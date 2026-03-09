import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout } from "../slices/employeeSlices.js";

function getCookie(name: string) {
let cookieValue = null;
if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
    }
    }
}
return cookieValue;
}


const rawBaseQuery = fetchBaseQuery({
baseUrl: process.env.REACT_APP_API_DOMAIN,
credentials: "include",
prepareHeaders: (headers) => {
    // Get the CSRF token from the cookie
    const csrfToken = getCookie("csrftoken");
    if (csrfToken) {
    // Set it as a header
    headers.set("X-CSRFToken", csrfToken);
    }
    return headers;
},
});

const isRelative = (a: string | FetchArgs) =>
typeof a === "string" ? !/^https?:\/\//i.test(a) :
typeof a?.url === "string" && !/^https?:\/\//i.test(String(a.url));

export const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> =
async (args, api, extraOptions) => {
    let result = await rawBaseQuery(args, api, extraOptions);

    // Check for a 401 error to handle token refresh
    if (result.error && result.error.status === 401 && isRelative(args)) {

    // Attempt to refresh the token
    const refresh = await rawBaseQuery({ url: "/api/user/refresh/", method: "POST" }, api, extraOptions);

    if (refresh?.error) {
        // If refresh fails, dispatch the logout action and return the original error
        api.dispatch(logout(undefined));
        return result;
    }

    // If refresh succeeds, retry the original request
    result = await rawBaseQuery(args, api, extraOptions);

    // If the retry also results in a 401, dispatch logout
    if (result.error && result.error.status === 401) {
        api.dispatch(logout(undefined));
    }
    }

    return result;
};

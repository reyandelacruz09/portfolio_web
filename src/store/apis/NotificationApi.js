import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const apiDomain = process.env.REACT_APP_API_DOMAIN
const token = localStorage.getItem('mytoken')

const notificationApi = createApi({
    reducerPath: 'notification',
    baseQuery: fetchBaseQuery({
        baseUrl: apiDomain
    }),
    endpoints(builder){
        return {
            sendFeedback: builder.mutation({
                query: (form) => {
                    return {
                        url: '/api/client/notification/add_notification/',
                        headers: { "Authorization": "token " + token },
                        method: 'POST',
                        body: form
                    };
                }
            }),
        };
    }

});
export const {
    useSendFeedbackMutation,
} = notificationApi;
export { notificationApi }
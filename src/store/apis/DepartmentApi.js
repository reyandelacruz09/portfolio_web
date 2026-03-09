import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const apiDomain = process.env.REACT_APP_API_DOMAIN
const token = localStorage.getItem('mytoken')
const employee_detailed = JSON.parse(localStorage.getItem('employee_detail'))


const departmentApi = createApi({
    reducerPath: 'department',
    baseQuery: fetchBaseQuery({
        baseUrl: apiDomain
    }),
    endpoints(builder){
        return {
            fetchDepartment: builder.query({
                query: () => {
                    return{
                        url:'/api/client/department/',
                        headers: { "Authorization": "token " + token },
                        params: {
                            client_id: employee_detailed.client.id
                        },
                        method: 'GET',
                    };
                }
            })
        };
    }
});
export const {
    useFetchDepartmentQuery,
} = departmentApi;
export { departmentApi }
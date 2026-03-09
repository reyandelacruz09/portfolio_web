import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const apiDomain = process.env.REACT_APP_API_DOMAIN
const token = localStorage.getItem('mytoken')
const employee_detailed = JSON.parse(localStorage.getItem('employee_detail'))

const memoApi = createApi({
    reducerPath: 'memo',
    baseQuery: fetchBaseQuery({
        baseUrl: apiDomain
    }),
    endpoints(builder){
        return {
            fetchMemo: builder.query({
                query: () => {
                    return{
                        url:'/api/client/memo/memos/',
                        headers: { "Authorization": "token " + token },
                        params: {
                            client_id: employee_detailed.client.id
                        },
                        method: 'GET',
                    };
                }
            }),
            fetchMemoGroup:builder.query({
                query: () => {
                    return{
                        url:'/api/client/memo/memo_list/',
                        headers: { "Authorization": "token " + token },
                        params: {
                            client_id: employee_detailed.client.id
                        },
                        method: 'GET',
                    };
                }
            }),
        };
    }
});
export const {
    useFetchMemoQuery,
    useFetchMemoGroupQuery
} = memoApi;
export { memoApi }
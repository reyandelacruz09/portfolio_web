import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const apiDomain = process.env.REACT_APP_API_DOMAIN
const token = localStorage.getItem('mytoken')
const employee_detailed = JSON.parse(localStorage.getItem('employee_detail'))


const clientApi = createApi({
    reducerPath: 'client',
    baseQuery: fetchBaseQuery({
        baseUrl: apiDomain
    }),
    endpoints(builder){
        return {
            clientAssessment: builder.query({
                query: () => {
                    return{
                        url:`/api/client/client_api/${employee_detailed.client.id}/client_assessment/`,
                        headers: { "Authorization": "token " + token },
                        method: 'GET',
                    };
                }
            }),
            employeeClientAssessment: builder.mutation({
                query: (data) => {
                    console.log(data);
                    return{
                        url: "api/employee/employee_assessment_list/",
                        headers: { "Authorization": "token " + token },
                        method: 'POST',
                        body: data
                    };
                }
            }),
        };
    }
})

export const {
    useClientAssessmentQuery,
    useEmployeeClientAssessmentMutation,
} = clientApi;
export { clientApi }
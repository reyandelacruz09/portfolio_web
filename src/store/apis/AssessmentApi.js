import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const apiDomain = process.env.REACT_APP_API_DOMAIN
const token = localStorage.getItem('mytoken')
const employee_detailed = JSON.parse(localStorage.getItem('employee_detail'))


const assessmentApi = createApi({
    reducerPath: 'assessment',
    baseQuery: fetchBaseQuery({
        baseUrl: apiDomain
    }),
    endpoints(builder){
        return {
            fetchAssessment: builder.query({
                query: () => {
                    return{
                        url:'/api/assessment/',
                        headers: { "Authorization": "token " + token },
                        params: {
                            client_id: employee_detailed.client.id
                        },
                        method: 'GET',
                    };
                }
            }),
            employeeAssDetailed: builder.query({
                query: (id) => {
                    return {
                        url:  `/api/assessment/${id}/employee_assessment_detailed/`,
                        headers: { "Authorization": "token " + token },
                        method: 'GET',
                    };
                }
            }),
            fetchEmployeeAssessment: builder.query({
                query: (employee_id) => {
                    return{
                        url:`/api/assessment/${employee_id}/employee_assessment/`,
                        headers: { "Authorization": "token " + token },
                        method: 'GET',
                    };
                }
            }),
            fetchEmployeeAssessmentSection: builder.query({
                query: (employee_assessment) => {
                    return{
                        url:`/api/assessment/${employee_assessment}/employee_assessment_section/`,
                        headers: { "Authorization": "token " + token },
                        method: 'GET',
                    };
                }
            }),
            fetchEmployeePageDetailed: builder.query({
                query: (pageId) => {
                    return {
                        url: `/api/assessment/${pageId}/employee_page_detailed/`,
                        headers: { "Authorization": "token " + token },
                        method: 'GET',
                    };
                }
            }),
            employeePageAction: builder.mutation({
                query: (form) => {
                    return {
                        url: `/api/assessment/employee_page_next_and_prev/`,
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
    useFetchAssessmentQuery,
    useEmployeeAssDetailedQuery,
    useFetchEmployeeAssessmentQuery,
    useFetchEmployeeAssessmentSectionQuery,
    useEmployeePageActionMutation,
    useFetchEmployeePageDetailedQuery
} = assessmentApi;
export { assessmentApi }

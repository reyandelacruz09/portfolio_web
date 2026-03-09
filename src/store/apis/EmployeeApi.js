import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const apiDomain = process.env.REACT_APP_API_DOMAIN
const token = localStorage.getItem('mytoken')
const employee_detailed = JSON.parse(localStorage.getItem('employee_detail'))
import { baseQueryWithReauth } from "./baseQuery.ts";


const employeeApi = createApi({
    reducerPath: 'employee',
    baseQuery: baseQueryWithReauth,
    endpoints(builder){
        return {
            addEmployee: builder.mutation({
                query: (form) => {
                    return {
                        url: '/api/employee/add_employee/',
                        // headers: { "Authorization": "token " + token },
                        method: 'POST',
                        body: form
                    };
                },
                invalidatesTags: ["Employees"],
            }),
            fetchEmployee: builder.query({
                query: () => {
                    return{
                        url:'/api/employee/employee_list/',
                        params: {
                            client_id: 1
                        },
                        method: 'GET',
                    };
                },
                providesTags: ["Employees"],
            }),
            employeeDetailed: builder.query({
                query: (id) => {
                    return {
                        url: `/api/employee/${id}/employee_detailed/`,
                        method: 'GET',
                    };
                }
            }),
            employeeDetailedEdit: builder.mutation({
                query: ({id, data}) => {
                    return {
                        url: `/api/employee/${id}/update_employee/`,
                        method: 'PUT',
                        body: data
                    };
                },
                invalidatesTags: ["Employees"],
            }),
            employeebadges: builder.query({
                query: (id) => {
                    return {
                        url: `/api/employee/${id}/employee_badge/`,
                        method: 'GET',
                    };
                }
            }),
            employeeAssignedAssessment: builder.mutation({
                query: (form) => {
                    return {
                        url: `/api/employee/employee_assign_assessment/`,
                        method: 'POST',
                        body: form
                    }
                }
            }),
            employeeAttendance: builder.mutation({
                query: (form) => {
                    console.log(form);
                    return {
                        url: `/api/employee/save_attendance/`,
                        method: 'POST',
                        body: form
                    }
                }
            }),
            EmployeeAttendance: builder.query({
                query: () => {
                    return{
                        url: `/api/employee/${employee_detailed.id}/get_attendances/`,
                        method: 'GET',
                    };
                }
            }),
            deleteEmployee: builder.mutation({
                query: (id) => ({
                  url: `/api/employee/${id}/delete_employee/`,
                  method: "DELETE",
                }),
                invalidatesTags: ["Employees"],
            }),
        };
    }
});
export const {
    useFetchEmployeeQuery,
    useAddEmployeeMutation,
    useEmployeeDetailedQuery,
    useEmployeeDetailedEditMutation,
    useEmployeebadgesQuery,
    useEmployeeAssignedAssessmentMutation,
    useEmployeeAttendanceMutation,
    useEmployeeAttendanceQuery,
    useDeleteEmployeeMutation,
} = employeeApi;
export { employeeApi }
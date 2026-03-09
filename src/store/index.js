import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { employeeApi } from "./apis/EmployeeApi";
import { departmentApi } from "./apis/DepartmentApi";
import { memoApi } from "./apis/MemoApi";
import { assessmentApi } from "./apis/AssessmentApi";
import {notificationApi } from "./apis/NotificationApi"
import { clientApi } from "./apis/ClientApi";

export const store = configureStore({
    reducer: {
        [employeeApi.reducerPath]: employeeApi.reducer,
        [departmentApi.reducerPath]: departmentApi.reducer,
        [memoApi.reducerPath]: memoApi.reducer,
        [assessmentApi.reducerPath]: assessmentApi.reducer,
        [notificationApi.reducerPath]: notificationApi.reducer,
        [clientApi.reducerPath]: clientApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(
                employeeApi.middleware,
                departmentApi.middleware,
                memoApi.middleware,
                assessmentApi.middleware,
                notificationApi.middleware,
                clientApi.middleware,
            );
    }
});

setupListeners(store.dispatch);
export {
    useFetchEmployeeQuery,
    useAddEmployeeMutation,
    useEmployeeDetailedQuery,
    useEmployeeDetailedEditMutation,
    useEmployeebadgesQuery,
    useEmployeeAssignedAssessmentMutation,
    useEmployeeAttendanceMutation,
    useEmployeeAttendanceQuery,
    useDeleteEmployeeMutation,
 } from './apis/EmployeeApi';
 export {
    useFetchDepartmentQuery
} from './apis/DepartmentApi';
export {
    useFetchMemoQuery,
    useFetchMemoGroupQuery
} from './apis/MemoApi';
export {
    useFetchEmployeeAssessmentQuery,
    useEmployeeAssDetailedQuery,
    useFetchAssessmentQuery,
    useFetchEmployeeAssessmentSectionQuery,
    useEmployeePageActionMutation,
    useFetchEmployeePageDetailedQuery,
} from "./apis/AssessmentApi";
export {
    useSendFeedbackMutation,
} from "./apis/NotificationApi";
export {
    useClientAssessmentQuery,
    useEmployeeClientAssessmentMutation
} from "./apis/ClientApi";
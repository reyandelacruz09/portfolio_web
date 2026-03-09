import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
    name: 'employee',
    initialState:{
        firstname: '',
        lastname: '',
        middlename: '',
        email: '',
        employeeId: 0,
        addender: '',
        dateHired: '',
        jobTitle: '',
        address1: '',
        address2: '',
        phoneNo: '',
        mobileNo: '',
        workSchedule: '',
        department: '',
        martialStatus: '',
        birthDay: '',
        employeeStatus: '',
        officeLocation: '',
        workArragement: '',
        cpioe: '',
        cpioeNo: '',
    },
    reducers: {
        logout(state, action) {
            // Resets the state to its initial default values
            return employeeSlice.getInitialState();
        },
        changeEmployeeId(state, action) {
            state.employeeId = action.payload;
        },
        changeFirstname(state, action){
            state.firstname = action.payload;
        },
        changeLastname(state, action){
            state.lastname = action.payload;
        },
        changeMiddlename(state, action){
            state.middlename = action.payload;
        },
        changeEmail(state, action){
            state.email = action.payload;
        },
        changeEnder(state, action){
            state.gender = action.payload;
        },
        changeDateHired(state, action){
            state.dateHired = action.payload;
        },
        changeJobTitle(state, action){
            state.jobTitle = action.payload;
        },
        changeAddress1(state, action){
            state.address1 = action.payload;
        },
        changeAddress2(state, action){
            state.address2 = action.payload;
        },
        changePhoneNo(state, action){
            state.phoneNo = action.payload;
        },
        changeMobileNo(state, action){
            state.mobileNo = action.payload;
        },
        changeWorkSchedule(state, action){
            state.workSchedule = action.payload;
        },
        changeDepartment(state, action){
            state.department = action.payload;
        },
        changeMartialStatus(state, action){
            state.martialStatus = action.payload;
        },
        changeBirthDay(state, action){
            state.birthDay = action.payload;
        },
        changeEmployeeStatus(state, action){
            state.employeeStatus = action.payload;
        },
        changeOfficeLocation(state, action){
            state.officeLocation = action.payload;
        },
        changeWorkArragement(state, action){
            state.workArragement = action.payload;
        },
        changeCpioe(state, action){
            state.cpioe = action.payload;
        },
        changeCpioeNo(state, action){
            state.cpioeNo = action.payload;
        }
    }
});

export const {
    logout,
    changeFirstname, changeLastname, changeMiddlename,
    changeEmail, changeEmployeeId, changeEnder,
    changeDateHired, changeJobTitle, changeAddress1,
    changeAddress2, changePhoneNo, changeMobileNo,
    changeWorkSchedule, changeDepartment, changeMartialStatus,
    changeBirthDay, changeEmployeeStatus, changeOfficeLocation,
    changeWorkArragement, changeCpioe, changeCpioeNo,
} = employeeSlice.actions;
export const employeeReducer = employeeSlice.reducer;

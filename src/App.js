import './App.css';
import {Routes, Route} from 'react-router-dom';
import React, { useEffect } from "react";

import {useNavigate} from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import Base from './components/pages/Base';
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from './components/pages/Login';
import EmployeePage from './components/pages/Employees/Employees';



function App() {
    const token = localStorage.getItem('mytoken')
    let navigate = useNavigate();

    // useEffect(() => {
    //     if (!token) {
    //         navigate('/')
    //   return;
    // }
    // }, [token])

    return (
        <div>
            <ToastContainer />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="base" element={<Base />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="employee_list" element={<EmployeePage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;

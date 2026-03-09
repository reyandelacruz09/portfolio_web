import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {Input, Button} from "@material-tailwind/react";
import { getCookie } from '../../utils/cookies';
const apiDomain = process.env.REACT_APP_API_DOMAIN

function Login() {

    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    // const fetchEmployeeDetailed = async (id, token) => {
    //     await axios.get(
    //         `${apiDomain}/api/employee/${id}/employee_detailed/`, {
    //             headers: {
    //                 'Authorization': 'token ' + token
    //             }
    //             }).then(result => {
    //                 localStorage.setItem(
    //                     'employee_detail',
    //                     JSON.stringify(result.data.data)
    //                 )
    //                 navigate('/base/dashboard')
    //             }).catch(error => {
    //                 console.log(error)
    //             })
    //         }

    let navigate = useNavigate()

    let email = username
    const login = async (event) => {
        event.preventDefault();

        const csrftoken = getCookie("csrftoken");

        try {
          const response = await axios.post(
            `${apiDomain}/api/user/login/`,
            {
              email: email,
              password: password,
            },
            {
              headers: {
                "X-CSRFToken": csrftoken
              },
              withCredentials: true
            }
          );

          console.log(response.data);

          navigate("/base/dashboard");

        } catch (error) {
          setError("Invalid username or password");
        }
      };

    // const login = async(event) => {
    //     event.preventDefault();
    //     await axios.post(`${apiDomain}/api/user/login/`,
    //     {
    //         username: email,
    //         password:password
    //     }
    //     ).then(function (response) {
    //         localStorage.setItem(
    //             'mytoken',
    //             response.data.token
    //         )
    //         localStorage.setItem(
    //             'user_info',
    //             JSON.stringify(response.data.user)
    //         )
    //         // fetchEmployeeDetailed(response.data.user.id, response.data.token);
    //         navigate("/base/dashboard");
    //       })
    //       .catch(function (error) {
    //         setError("Invalid username or password")
    //       });
    // }

    return (
        <div className='w-screen bg-gray-900 h-screen flex justify-center items-center'>
            <div className='w-96 p-6 shadow-lg bg-white rounded-md'>
                <div className="flex justify-center items-center">
                    <img
                        src="../images/company.png"
                        alt="course_logo"
                        className="relative inline-block h-10 w-fit rounded-2xl object-cover object-center"
                    />
                </div>
                <hr />
                <br/>
                    {error ?
                        <div className = "alert alert-warning alert-dismissible" role="alert">
                            <p className='text-red-700 text-center'>{error}</p>
                        </div>
                        :
                        null
                    }
                    <h3 className='m-4 block text-center font-semibold'>Login to your account.</h3>

                <form onSubmit={login}>
                    <div className = "m-4">
                        <label htmlFor="username" className="block text-base mb-2">Username</label>
                        <Input type="text"
                            id="username"  label="Please Enter Username"
                            value = {username}
                            onChange = {evt => setUsername(evt.target.value)}
                        />
                    </div>
                    <div className = "m-4">
                        <label htmlFor="password" className="block text-base mb-2">Password</label>
                        <Input type = "password"
                            id="password" label="Please Enter Password"
                            value = {password}
                            onChange = {evt => setPassword(evt.target.value)}
                        />
                    </div>
                    <div></div>
                    <div className='m-4 mt-4 justify-between items-center'>
                        <a href="/" className='text-indigo-800 font-semibold'>Forgot Password</a>
                    </div>

                    <div className = "pb-10 m-4 mb-3 flex justify-center">
                        <Button color="blue" type="submit" className="w-full rounded-md hover:bg-transparent hover:text-indigo-700">Login</Button>
                    </div>
                </form>
            </div>
            <div className='flex justify-center items-center absolute inset-x-0 bottom-0 h-16'>
                <a href='/' className='text-white'>Contact us</a>
            </div>
        </div>
    )
}
export default Login;

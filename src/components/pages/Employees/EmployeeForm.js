import { useState } from "react";
import { useAddEmployeeMutation, useEmployeeDetailedEditMutation } from "../../../store/apis/EmployeeApi";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

export default function EmployeeForm({onSuccess, employee}) {
    useEffect(() => {
        if (employee) {
          setFormData({
            username: employee.user.username || "",
            first_name: employee.user.first_name || "",
            middle_name: employee.user.middle_name || "",
            last_name: employee.user.last_name || "",
            email: employee.user.email || "",
            contact_number: employee.contact_number || "",
            country: employee.country || "",
            account_type: employee.account_type || "",
            profile_image: null
          });
        }
      }, [employee]);

    const [addEmployee, { isLoading, isSuccess, error }] = useAddEmployeeMutation();
    const [updateEmployee] = useEmployeeDetailedEditMutation();
    const isEdit = Boolean(employee);

    const [formData, setFormData] = useState({
        country: "",
        account_type: "",
        username: "",
        first_name: "",
        middle_name:"",
        last_name: "",
        email: "",
        contact_number: "",
        profile_image: null
      });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();

        Object.keys(formData).forEach((key) => {
          data.append(key, formData[key]);
        });

        try {
            if (isEdit) {
                await updateEmployee({
                  id: employee.id,
                  data
                }).unwrap();

                toast.success("Employee updated");
                console.log("Successfully update employee data")
              } else {
                console.log("Print the")
                console.log(data)
                await addEmployee(data).unwrap();
                toast.success("Employee added");
                console.log("Successfully Added employee data")

              }
          setFormData({
            username: "",
            first_name: "",
            middle_name:"",
            last_name: "",
            email: "",
            contact_number: "",
            country: "",
            account_type: "",
            profile_image: null,
          })
          onSuccess()
        } catch (error) {
          console.error(error);
        }
    };


  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded shadow">

    {/* Country */}
    <div lassName="mb-4">
    <label className="block text-sm font-medium mb-1">Country *</label>
    <select
        className="w-full border rounded px-3 py-2"
        name="country"
        value={formData.country}
        onChange={handleChange}
        required
    >
        <option value="">---</option>
        <option value="US">United States</option>
        <option value="UK">United Kingdom</option>
        <option value="NG">Nigeria</option>
    </select>
    </div>

    {/* Account Type */}
    <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Account Type *</label>
        <select
            className="w-full border rounded px-3 py-2"
            name="account_type"
            value={formData.account_type}
            onChange={handleChange}
            required
        >
            <option value="">---</option>
            <option value="1">Team Member'</option>
            <option value="2">Project Manager</option>
            <option value="3">Business Analysis</option>
        </select>
    </div>

    {/* Username */}
    <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Username *</label>
        <input
            className="w-full border rounded px-3 py-2"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
        />
    </div>
    {/* First Name */}
       <div className="mb-4">
        <label className="block text-sm font-medium mb-1">First Name *</label>
        <input
            className="w-full border rounded px-3 py-2"
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
        />
    </div>

    <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Middle Name</label>
        <input
            className="w-full border rounded px-3 py-2"
            type="text"
            name="middle_name"
            value={formData.middle_name}
            onChange={handleChange}
        />
    </div>

    {/* Last Name */}
    <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Last Name *</label>
        <input
            className="w-full border rounded px-3 py-2"
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
        />
    </div>

    {/* Email */}
    <div className="mb-4">
    <label className="block text-sm font-medium mb-1">Email Address *</label>
    <input
        className="w-full border rounded px-3 py-2"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
    />
    </div>

    {/* Contact Number */}
    <div className="mb-4">
    <label className="block text-sm font-medium mb-1">Contact Number</label>
    <input
        className="w-full border rounded px-3 py-2"
        type="text"
        name="contact_number"
        value={formData.contact_number}
        onChange={handleChange}
    />
    </div>

    {/* Photo */}
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">Photo (optional)</label>
      <input
          className="w-full border rounded px-3 py-2"
          type="file"
          name="profile_image"
          onChange={(e) =>
          setFormData({ ...formData, profile_image: e.target.files[0] })
          }
      />
    </div>

    {/* Submit */}
    <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">
    SUBMIT
    </button>

    </form>
  );
}
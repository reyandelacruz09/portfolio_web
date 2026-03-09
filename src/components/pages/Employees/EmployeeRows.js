import React from "react";
import { useDeleteEmployeeMutation } from "../../../store";
import EmployeePhoto from "./EmployeePhoto";
import { toast } from "react-toastify";

export default function EmployeeRow({ employee, onEdit }) {
  const [deleteEmployee] = useDeleteEmployeeMutation();
  const handleDelete = async () => {
    try {
      await deleteEmployee(employee.id).unwrap();
      toast.error("Employee deleted");
      console.log("Employee deleted");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <tr className="border-t hover:bg-gray-50">

      <td className="p-3">
        <EmployeePhoto photo={employee.profile_image} />
      </td>

      <td className="p-3">{employee.user.first_name} {employee.user.last_name}</td>

      <td className="p-3">{employee.user.username}</td>

      <td className="p-3">{employee.country}</td>

      <td className="p-3">{employee.user.email}</td>

      <td className="p-3">
        <span className="text-gray-700">
          {employee.account_type_display}
        </span>
      </td>

      <td className="p-3 space-x-2">

        <button
          onClick={() => onEdit(employee)}
          className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
        >
          ✏️
        </button>

        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
          🗑
        </button>

      </td>

    </tr>
  );
}
import React from "react";
import EmployeeRow from "./EmployeeRows";

export default function EmployeeTable({ employees, onEdit }) {

  return (
    <div className="bg-white shadow rounded-lg">

      <table className="w-full text-sm">

        <thead className="bg-gray-100 text-gray-600">
          <tr>
            <th className="p-3 text-left">PHOTO</th>
            <th className="p-3 text-left">NAME</th>
            <th className="p-3 text-left">USERNAME</th>
            <th className="p-3 text-left">COUNTRY</th>
            <th className="p-3 text-left">EMAIL</th>
            <th className="p-3 text-left">ACCOUNT TYPE</th>
            <th className="p-3 text-left">ACTION</th>
          </tr>
        </thead>

        <tbody>

          {employees.map(emp => (
            <EmployeeRow
              key={emp.id}
              employee={emp}
              onEdit={onEdit}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}
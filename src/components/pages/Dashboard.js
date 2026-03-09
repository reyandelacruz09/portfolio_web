import { useState, useEffect } from "react";

function Dashboard({ slide }) {

  let employeeDetailed = JSON.parse(
    localStorage.getItem("employee_detail")
  );

  const apiDomain = process.env.REACT_APP_API_DOMAIN;

  const delay = 3000;

  const [stats, setStats] = useState({
    users: 120,
    revenue: 54000,
    orders: 320,
    employees: 52
  });

  const employees = [
    { name: "John Doe", department: "IT", status: "Active" },
    { name: "Jane Smith", department: "Finance", status: "Active" },
    { name: "Michael Lee", department: "HR", status: "Inactive" },
  ];

  return (
    <div className="h-auto md:h-screen p-4 grid grid-cols-5 gap-4">

      {/* LEFT SIDE */}

      <div className="col-span-3 space-y-4">

        {/* STAT CARDS */}

        <div className="grid grid-cols-4 gap-4">

          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500 text-sm">Users</p>
            <h2 className="text-2xl font-bold">{stats.users}</h2>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500 text-sm">Revenue</p>
            <h2 className="text-2xl font-bold">${stats.revenue}</h2>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500 text-sm">Orders</p>
            <h2 className="text-2xl font-bold">{stats.orders}</h2>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500 text-sm">Employees</p>
            <h2 className="text-2xl font-bold">{stats.employees}</h2>
          </div>

        </div>

        {/* GRAPH AREA */}

        <div className="bg-white rounded shadow p-4 h-64">

          <h2 className="font-semibold mb-3">
            Sales Graph
          </h2>

          <div className="h-full flex items-center justify-center text-gray-400">
            Graph Component Here
          </div>

        </div>

        {/* TABLE */}

        <div className="bg-white rounded shadow p-4">

          <h2 className="font-semibold mb-4">
            Recent Employees
          </h2>

          <table className="w-full text-sm">

            <thead>
              <tr className="border-b text-gray-500">
                <th className="text-left py-2">Name</th>
                <th className="text-left">Department</th>
                <th className="text-left">Status</th>
              </tr>
            </thead>

            <tbody>

              {employees.map((emp, index) => (

                <tr key={index} className="border-b hover:bg-gray-50">

                  <td className="py-2">{emp.name}</td>
                  <td>{emp.department}</td>

                  <td>
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        emp.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {emp.status}
                    </span>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="col-span-2 space-y-4">

        {/* SLIDER */}

        <div className="bg-white rounded shadow p-4 h-64">

          <h2 className="font-semibold mb-3">
            Announcements
          </h2>

          <div className="h-full flex items-center justify-center text-gray-400">
            Image Slider Here
          </div>

        </div>

        {/* ACTIVITY */}

        <div className="bg-white rounded shadow p-4">

          <h2 className="font-semibold mb-3">
            Recent Activity
          </h2>

          <ul className="text-sm space-y-2">

            <li>✔ John added new employee</li>
            <li>✔ Jane updated payroll</li>
            <li>✔ Michael submitted report</li>
            <li>✔ Anna created project</li>

          </ul>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;
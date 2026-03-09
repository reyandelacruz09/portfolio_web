import React, { useState } from "react";
import { useFetchEmployeeQuery } from "../../../store/apis/EmployeeApi";
import Modal from "../../inputs/modals/Modal";
import AddEmployeeButton from "./EmployeeAddButton";
import EmployeeForm from "./EmployeeForm";
import SearchBar from "./EmployeeSearchBar";
import EmployeeTable from "./EmployeeTable";


export default function EmployeePage() {
  const [openModal, setOpenModal] = useState(false);
  const { data, error, isLoading } = useFetchEmployeeQuery();
  const [selectedEmployee, setSelectedEmployee] = useState(null);


  const closeModal = () => {
    setOpenModal(false);
    setSelectedEmployee(null);
  };
  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    setOpenModal(true);
  };

  if (isLoading) {
    return <p>Loading employees...</p>;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  console.log(data)

  const employees = data?.data?.results || [];

  // const [search, setSearch] = useState("");

  // const filtered = employees.filter(emp =>
  //   emp.name.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">
          Employee: <span className="text-blue-600">Records</span>
        </h2>
        <AddEmployeeButton onClick={() => setOpenModal(true)}/>
      </div>

      <div className="flex justify-end mb-4">
        {/* <SearchBar search={search} setSearch={setSearch} /> */}
      </div>
      <EmployeeTable
        employees={employees}
        onEdit={handleEdit}
      />
      {openModal && (
        <Modal
          title="Account: Add Record"
          onClose={() => setOpenModal(false)}
        >
          <EmployeeForm
            onSuccess={closeModal}
            employee={selectedEmployee}
          />
        </Modal>
      )}
    </div>
  );
}
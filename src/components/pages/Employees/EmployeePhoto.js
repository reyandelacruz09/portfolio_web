import React from "react";
const apiDomain = process.env.REACT_APP_API_DOMAIN

export default function EmployeePhoto({ photo }) {
  console.log("Print the image link")
  console.log(photo)
  if (!photo) {
    return (
      <div className="w-12 h-12 bg-gray-200 flex items-center justify-center text-xs text-gray-500">
        No Image
      </div>
    );
  }

  return (
    <img
      src={apiDomain + photo}
      alt="employee"
      className="w-12 h-12 rounded object-cover"
    />
  );
}
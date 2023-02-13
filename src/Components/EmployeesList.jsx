import React, { useState, useEffect } from "react";

import employeesServiceObj from "../Services/employees-service";

export const EmployeesList = () => {
  let title = "Welcome To WebPoCHub Employees List!";
  let subTitle = "Core Development Members Of WebPoCHub!";
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    (async () => {
      setEmployees(await employeesServiceObj.getAllEmployees());
    })();
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      <hr />
      <h6>{subTitle}</h6>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>City</th>
            <th>Email</th>
            <th>Contact #</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.employeeId}>
              <td>
                <span>{employee.employeeName}</span>
              </td>
              <td>
                <span>{employee.city}</span>
              </td>
              <td>
                <span>{employee.email}</span>
              </td>
              <td>
                <span>{employee.phone}</span>
              </td>
              <td>
                <span>{employee.country}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

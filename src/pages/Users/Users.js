import React from "react";
import Box from "../../components/shared/Box/Box";
import Table from "../../components/shared/Table/Table";

const Users = () => {
  const columns = [
    {
      Header: "First Name",
      accessor: "firstName",
    },
    {
      Header: "Last Name",
      accessor: "lastName",
    },
    {
      Header: "Age",
      accessor: "age",
    },
    {
      Header: "Salary",
      accessor: "salary",
    },
    {
      Header: "Actions",
      accessor: "sss",
      type: "delete",
      // Cell: ({ cell }) => {
      //   return (
      //     <button value={cell.row.values.name}>{cell.row.values.name}</button>
      //   );
      // },
      onClick: (cell) => console.log(cell),
    },
  ];

  const data = [
    {
      firstName: "Mahmoud",
      lastName: "Bassam",
      age: 24,
      salary: 4000,
    },
    {
      firstName: "Mahmoud",
      lastName: "Bassam",
      age: 24,
      salary: 4000,
    },
    {
      firstName: "Mahmoud",
      lastName: "Bassam",
      age: 24,
      salary: 4000,
    },
  ];

  return <Table data={data} columns={columns} />;
};

export default Users;

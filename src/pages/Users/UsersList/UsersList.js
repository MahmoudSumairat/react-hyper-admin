import React, { useEffect, useState } from "react";
import Table from "../../../components/shared/Table/Table";
import { useEndpoints } from "../../../hooks";

const columns = [
  {
    Header: "first name",
    accessor: "firstname",
  },
  {
    Header: "last name",
    accessor: "lastname",
  },
  {
    Header: "email",
    accessor: "email",
  },
  {
    Header: "create date",
    accessor: "createdAt",
    type: "date",
  },
  {
    Header: "update date",
    accessor: "updatedAt",
    type: "date",
  },
];

const UsersList = () => {
  const { getUsers, deleteUser } = useEndpoints();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();

    /* eslint-disable */
  }, []);

  const fetchUsers = async () => {
    const response = await getUsers();
    console.log(response);
    setUsers(response);
  };

  const onRowDeleteClick = async (id) => {
    await deleteUser(id);
    const newUsers = [...users].filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  return (
    <Table
      columns={columns}
      data={users}
      rowTitle="user"
      tableTitle="users list"
      deleteRowClick={onRowDeleteClick}
      addRowURL="add-user"
    />
  );
};

export default UsersList;

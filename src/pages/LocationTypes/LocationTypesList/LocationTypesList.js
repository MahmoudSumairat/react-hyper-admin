import React, { useEffect, useState } from "react";
import Table from "../../../components/shared/Table/Table";
import { useEndpoints } from "../../../hooks";

const columns = [
  {
    Header: "name",
    accessor: "name",
  },
  {
    Header: "description",
    accessor: "description",
  },
  {
    Header: "status",
    type: "active-status",
    accessor: "active",
  },
  {
    Header: "created at",
    type: "date",
    accessor: "createdAt",
  },
  {
    Header: "updated at",
    type: "date",
    accessor: "updatedAt",
  },
];

const LocationTypesList = () => {
  const { getLocationTypes, deleteLocationType } = useEndpoints();
  const [locationTypes, setLocationTypes] = useState([]);

  useEffect(() => {
    fetchLocationTypes();

    /* eslint-disable */
  }, []);

  const fetchLocationTypes = async () => {
    const response = await getLocationTypes();
    setLocationTypes(response);
  };

  const onDeleteClick = async (id) => {
    await deleteLocationType(id);
    const newLocationTypes = [...locationTypes].filter(
      (locationType) => locationType.id !== id
    );
    setLocationTypes(newLocationTypes);
  };

  return (
    <Table
      rowTitle="location type"
      tableTitle="location types list"
      data={locationTypes}
      columns={columns}
      deleteRowClick={onDeleteClick}
    />
  );
};

export default LocationTypesList;

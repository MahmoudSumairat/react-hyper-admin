import React, { useEffect, useState } from "react";
import Table from "../../../components/shared/Table/Table";
import { useEndpoints } from "../../../hooks";

const columns = [
  {
    Header: "status",
    type: "active-status",
    accessor: "active",
  },
  {
    Header: "type",
    accessor: "locationType.name",
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

const LocationsList = () => {
  const { getLocations, deleteLocation } = useEndpoints();
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchEventTypes();
    /* eslint-disable */
  }, []);

  const fetchEventTypes = async () => {
    const response = await getLocations();
    setLocations(response.data);
  };

  const onRowDelete = async (id) => {
    await deleteLocation(id);
    const newEventTypes = [...eventTypes].filter(
      (eventType) => eventType.id !== id
    );
    setLocations(newEventTypes);
  };

  return (
    <Table
      tableTitle="locations list"
      rowTitle="location"
      columns={columns}
      data={locations}
      deleteRowClick={onRowDelete}
      addRowURL="/add-location"
    />
  );
};

export default LocationsList;

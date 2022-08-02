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

const EventTypesList = () => {
  const { getEventTypes, deleteEventType } = useEndpoints();
  const [eventTypes, setEventTypes] = useState([]);

  useEffect(() => {
    fetchEventTypes();
    /* eslint-disable */
  }, []);

  const fetchEventTypes = async () => {
    const response = await getEventTypes();
    setEventTypes(response.data);
  };

  const onRowDelete = async (id) => {
    await deleteEventType(id);
    const newEventTypes = [...eventTypes].filter(
      (eventType) => eventType.id !== id
    );
    setEventTypes(newEventTypes);
  };

  return (
    <Table
      tableTitle="event types list"
      rowTitle="event type"
      columns={columns}
      data={eventTypes}
      deleteRowClick={onRowDelete}
      addRowURL="/add-event-type"
    />
  );
};

export default EventTypesList;

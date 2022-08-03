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
    Header: "start date",
    accessor: "startDate",
    type: "date",
  },
  {
    Header: "end date",
    accessor: "endDate",
    type: "date",
  },
  {
    Header: "event type",
    accessor: "eventType.name",
    type: "date",
  },
  {
    Header: "event category",
    accessor: "eventCategory.name",
    type: "date",
  },
  {
    Header: "event sub category",
    accessor: "eventSubcategory.name",
    type: "date",
  },
];

const EventsList = () => {
  const { getEvents, deleteEvent } = useEndpoints();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
    /* eslint-disable */
  }, []);

  const fetchEvents = async () => {
    const response = await getEvents();
    setEvents(response.data || []);
  };

  const onDeleteRow = async (id) => {
    await deleteEvent(id);
    const newEvents = [...events].filter((event) => event.id !== id);
    setEvents(newEvents);
  };

  return (
    <Table
      columns={columns}
      data={events}
      deleteRowClick={onDeleteRow}
      tableTitle="events list"
      rowTitle="event"
      addRowURL="add-event"
    />
  );
};

export default EventsList;

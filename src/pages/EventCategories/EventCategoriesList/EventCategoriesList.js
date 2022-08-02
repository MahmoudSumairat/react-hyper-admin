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
    Header: "active",
    type: "checkbox",
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

const EventCategoriesList = () => {
  const { getEventCategories, deleteEventCategory } = useEndpoints();
  const [eventCategories, setEventCategories] = useState([]);

  useEffect(() => {
    getEventCategories().then((response) => setEventCategories(response.data));
    /* eslint-disable */
  }, []);

  const handleRowDelete = (categoryId) => {
    deleteEventCategory(categoryId).then(() => {
      const rows = [...eventCategories].filter(
        (category) => category.id !== categoryId
      );
      setEventCategories(rows);
    });
  };

  return (
    <Table
      columns={columns}
      rowTitle="event category"
      deleteRowClick={handleRowDelete}
      data={eventCategories}
      addRowURL="/add-event-category"
    />
  );
};

export default EventCategoriesList;

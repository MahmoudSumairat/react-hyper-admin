import React, { useEffect, useState } from "react";
import Table from "../../../../../components/shared/Table/Table";
import { useEndpoints } from "../../../../../hooks";

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
const EventSubCategoriesList = ({
  categoryId,
  setEditMode,
  setEventSubCategoryDetails,
  setSubCategoryId,
  setShowSubCategoriesList,
}) => {
  const {
    getEventSubCategories,
    getEventSubCategoryDetails,
    deleteEventSubCategory,
  } = useEndpoints();
  const [eventSubCategories, setEventSubCategories] = useState([]);

  useEffect(() => {
    fetchSubCategories();
    /* eslint-disable */
  }, []);

  const fetchSubCategories = async () => {
    if (categoryId) {
      const response = await getEventSubCategories(categoryId);
      setEventSubCategories(response);
    }
  };

  const onRowClick = async (row) => {
    const response = await getEventSubCategoryDetails(categoryId, row.id);
    setEditMode(true);
    setEventSubCategoryDetails(response.data);
    setSubCategoryId(row.id);
    setShowSubCategoriesList(false);
  };

  const onDeleteRowClick = async (id) => {
    await deleteEventSubCategory(id);
    const newEventSubCategories = [...eventSubCategories].filter(
      (subCategory) => subCategory.id !== id
    );
    setEventSubCategories(newEventSubCategories);
  };

  return (
    <Table
      rowTitle="event sub category"
      tableTitle="event sub categories"
      columns={columns}
      data={eventSubCategories}
      onAddButtonClick={() => setShowSubCategoriesList(false)}
      onRowClick={onRowClick}
      onDeleteRowClick={onDeleteRowClick}
    />
  );
};

export default EventSubCategoriesList;

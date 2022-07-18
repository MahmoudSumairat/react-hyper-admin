import React, { Fragment } from "react";
import Divider from "../Divider/Divider";
import DropdownItem from "../DropdownItem/DropdownItem";
import MultiSelectDropdownItem from "../MultiSelectDropdownItem/MultiSelectDropdownItem";

const DropdownList = ({
  items,
  multiSelect,
  handleMultiSelectChange,
  selectedItemsMap,
  onSelectionChange,
  onDropdownHide,
}) => {
  return items.map((item) => {
    return (
      <Fragment key={item.id}>
        <Divider withDivider={item.withDivider} />
        {multiSelect ? (
          <MultiSelectDropdownItem
            onChange={(event) => handleMultiSelectChange(event, item)}
            item={item}
            isChecked={selectedItemsMap[item.id]}
          />
        ) : (
          <DropdownItem
            item={item}
            multiSelect={multiSelect}
            onSelectionChange={(item) => {
              onSelectionChange(item);
              onDropdownHide();
            }}
          />
        )}
      </Fragment>
    );
  });
};

export default DropdownList;

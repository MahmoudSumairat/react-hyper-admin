import React, { useEffect, useRef } from "react";
import FadeUpDown from "../../../animations/FadeUpDown/FadeUpDown";
import DropdownList from "./DropdownList/DropdownList";
import styles from "./styles.module.scss";

const handleClickOutsideEventListener = (clickOutside) => {
  document.addEventListener("mousedown", clickOutside);
  return () => {
    document.removeEventListener("mousedown", clickOutside);
  };
};

const Dropdown = ({
  showDropdown = false,
  items = [],
  onSelectionChange = () => {},
  onDropdownShow = () => {},
  onDropdownHide = () => {},
  className = "",
  parentNode = null,
  multiSelect,
  selectedItemsMap = {},
}) => {
  const node = useRef();

  const clickOutside = ({ target }) => {
    const { current } = node;
    const { current: parentNodeCurrent } = parentNode;
    if (
      (!current || !current.contains(target)) &&
      (!parentNode || !parentNodeCurrent || !parentNodeCurrent.contains(target))
    ) {
      onDropdownHide();
    }
  };

  useEffect(() => {
    handleClickOutsideEventListener(clickOutside);
  });

  return (
    <FadeUpDown
      onEnter={onDropdownShow}
      onExit={onDropdownHide}
      nodeRef={node}
      showsIn={showDropdown}
    >
      <ul ref={node} className={`${styles.sharedDropdown} ${className} `}>
        <DropdownList
          items={items}
          multiSelect={multiSelect}
          handleMultiSelectChange={onSelectionChange}
          selectedItemsMap={selectedItemsMap}
          onSelectionChange={onSelectionChange}
          onDropdownHide={onDropdownHide}
        />
      </ul>
    </FadeUpDown>
  );
};

export default Dropdown;

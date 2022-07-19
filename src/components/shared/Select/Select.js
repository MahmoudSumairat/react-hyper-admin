import React, { useRef, useState } from "react";
import FadeUpDown from "../../../animations/FadeUpDown/FadeUpDown";
import Dropdown from "../Dropdown/Dropdown";
import SelectButton from "./SelectButton/SelectButton";

import styles from "./styles.module.scss";
const { selectContainer, selectButtonOpened, selectFieldError, selectLabel } =
  styles;

// returns a comma separated string, by creating a map from the items and access the selected items in the map by the value array
const getNamesFromIds = (values = [], items = []) => {
  const itemsObj = {};
  const selectedValues = [];
  items.forEach((item) => {
    itemsObj[item.id] = item.displayName;
  });
  values.forEach((value) => {
    selectedValues.push(itemsObj[value]);
  });
  return selectedValues.join(", ");
};

// returns either the displayName of the selected item or the default select label
const getNameForSingleSelectedItem = (value, items, label) => {
  const selectedItem = items.find((item) => item.id === value);
  return selectedItem ? selectedItem.displayName : label;
};

// returns an object of the selectedItems with a key of the id and a value of the checked flag, to easy access and avoid nested loops
const createSelectedItemsMap = (value) => {
  const selectedItemsMap = {};
  value.forEach((item) => {
    selectedItemsMap[item] = true;
  });
  return selectedItemsMap;
};

const Select = ({
  items,
  onChange = () => {},
  onBlur = () => {},
  label = "select label",
  className,
  multiSelect,
  value = multiSelect ? [] : "",
  width,
  error,
  placeholder = "select",
}) => {
  if (multiSelect && !value.length) {
    value = [];
  }
  const nodeRef = useRef(null);

  const defaultButtonText = multiSelect
    ? getNamesFromIds(value, items, placeholder) || placeholder
    : getNameForSingleSelectedItem(value, items, placeholder);

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectButtonText, setSelectButtonText] = useState(defaultButtonText);
  const [defaultValue, setDefaultValue] = useState(value);
  const [isDropdownTouched, setIsDropdownTouched] = useState(false);

  const node = useRef();

  let newSelectedItems = [];
  let selectedItemsMap = {};
  if (multiSelect) {
    newSelectedItems = [...defaultValue];
    selectedItemsMap = createSelectedItemsMap(value);
  }

  const handleSelectionChange = (changes) => {
    let buttonText;

    if (multiSelect) {
      const changesNames = newSelectedItems.length
        ? getNamesFromIds(newSelectedItems, items, placeholder).split(",")
        : [];
      const multiSelectButtonValue = changesNames.join(", ");
      setDefaultValue(newSelectedItems);
      buttonText = multiSelectButtonValue || placeholder;
    } else {
      buttonText = changes.displayName;
      setDefaultValue(changes);
    }

    setSelectButtonText(buttonText);
    const result = multiSelect
      ? { target: { value: newSelectedItems } }
      : { target: { value: changes } };
    onChange(result);
    onBlur(result);
  };

  const handleMultiSelectChange = ({ target }, { id }) => {
    target.checked
      ? newSelectedItems.push(id)
      : (newSelectedItems = newSelectedItems.filter((item) => item !== id));

    setDefaultValue(newSelectedItems);
    handleSelectionChange();
  };

  return (
    <div className={`${selectContainer} ${className} ${width}`}>
      <label className={selectLabel}>{label}</label>
      <SelectButton
        node={node}
        setShowDropdown={(showState) => {
          setShowDropdown(showState);
          setIsDropdownTouched(true);
        }}
        showDropdown={showDropdown}
        selectButtonOpened={selectButtonOpened}
        selectButtonValue={selectButtonText}
      />
      <Dropdown
        parentNode={node}
        items={items}
        showDropdown={showDropdown}
        onDropdownHide={() => {
          setShowDropdown(false);
        }}
        onDropdownShow={() => setShowDropdown(true)}
        onSelectionChange={
          multiSelect ? handleMultiSelectChange : handleSelectionChange
        }
        onBlur={() =>
          isDropdownTouched && onBlur({ target: { value: defaultValue } })
        }
        multiSelect={multiSelect}
        selectedItemsMap={selectedItemsMap}
        value={defaultValue}
      />
      <FadeUpDown nodeRef={nodeRef} showsIn={!!error}>
        <span ref={nodeRef} className={selectFieldError}>
          {error}
        </span>
      </FadeUpDown>
    </div>
  );
};

export default Select;

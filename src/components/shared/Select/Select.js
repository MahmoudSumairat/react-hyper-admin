import React, { useRef, useState } from "react";
import FadeUpDown from "../../../animations/FadeUpDown/FadeUpDown";
import Dropdown from "../Dropdown/Dropdown";
import SelectButton from "./SelectButton/SelectButton";
import formStyles from "../../../styles/form.module.scss";
import styles from "./styles.module.scss";
import {
  getNameForSingleSelectedItem,
  getNamesFromIds,
  createSelectedItemsMap,
} from "./selectHelpers";
const { selectContainer, selectButtonOpened } = styles;
const { inputLabel, hasError, fieldError } = formStyles;

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
    <div
      className={`${selectContainer} ${className} ${width} ${
        !!error ? hasError : ""
      }`}
    >
      <label className={inputLabel}>{label}</label>
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
        <span ref={nodeRef} className={fieldError}>
          {error}
        </span>
      </FadeUpDown>
    </div>
  );
};

export default Select;

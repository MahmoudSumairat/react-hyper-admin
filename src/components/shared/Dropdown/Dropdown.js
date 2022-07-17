import React, { Fragment, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import DropdownItem from "./DropdownItem/DropdownItem";
import styles from "./Dropdown.module.scss";
import animationStyles from "../../../animations/FadeUpDown.module.scss";

const Dropdown = ({
  showDropdown = false,
  items = [],
  onSelectionChange = () => {},
  onDropdownShow = () => {},
  onDropdownHide = () => {},
  className = "",
  parentNode = null,
}) => {
  const node = useRef();

  const clickOutside = (e) => {
    if (
      (node.current && node.current.contains(e.target)) ||
      (parentNode &&
        parentNode.current &&
        parentNode.current.contains(e.target))
    ) {
      return;
    }
    onDropdownHide();
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);

    // clean up function before running new effect
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  });

  return (
    <CSSTransition
      in={showDropdown}
      unmountOnExit
      timeout={200}
      classNames={{
        enter: animationStyles.fadeUpDownEnter,
        enterActive: animationStyles.fadeUpDownEnterActive,
        exit: animationStyles.fadeUpDownExit,
        exitActive: animationStyles.fadeUpDownExitActive,
      }}
      onEnter={onDropdownShow}
      onExit={onDropdownHide}
      nodeRef={node}
    >
      <ul ref={node} className={`${styles.sharedDropdown} ${className} `}>
        {items.map((item) => {
          return (
            <Fragment key={item.id}>
              {item.withDivider && (
                <hr className={styles.sharedDropdownDivider} />
              )}
              <DropdownItem
                item={item}
                onSelectionChange={(item) => {
                  onSelectionChange(item);
                  onDropdownHide();
                }}
              />
            </Fragment>
          );
        })}
      </ul>
    </CSSTransition>
  );
};

export default Dropdown;

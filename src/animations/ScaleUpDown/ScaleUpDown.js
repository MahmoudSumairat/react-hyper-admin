import React from "react";
import { CSSTransition } from "react-transition-group";
import animationStyles from "./styles.module.scss";

const ScaleUpDown = (props) => {
  const {
    onEnter = () => {},
    onExit = () => {},
    nodeRef,
    showsIn = false,
  } = props;

  return (
    <CSSTransition
      in={showsIn}
      unmountOnExit
      timeout={100}
      classNames={{
        enter: animationStyles.scaleUpDownEnter,
        enterActive: animationStyles.scaleUpDownEnterActive,
        exit: animationStyles.scaleUpDownExit,
        exitActive: animationStyles.scaleUpDownExitActive,
      }}
      onEnter={onEnter}
      onExit={onExit}
      ref={nodeRef}
    >
      {props.children}
    </CSSTransition>
  );
};

export default ScaleUpDown;

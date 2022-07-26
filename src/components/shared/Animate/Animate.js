import React from "react";
import { CSSTransition } from "react-transition-group";
import animationTypes from "./animationTypes";

const Animate = (props) => {
  const {
    onEnter,
    onExit,
    nodeRef,
    showsIn,
    timeout = 200,
    animationType,
  } = props;

  return (
    <CSSTransition
      in={showsIn}
      unmountOnExit
      timeout={timeout}
      classNames={animationTypes[animationType]}
      onEnter={onEnter}
      onExit={onExit}
      nodeRef={nodeRef}
    >
      {props.children}
    </CSSTransition>
  );
};

export default Animate;

import React from "react";
import { CSSTransition } from "react-transition-group";
import animationStyles from "./styles.module.scss";

const SlideUpDown = (props) => {
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
      timeout={200}
      classNames={{
        enter: animationStyles.slideUpDownEnter,
        enterActive: animationStyles.slideUpDownEnterActive,
        exit: animationStyles.slideUpDownExit,
        exitActive: animationStyles.slideUpDownExitActive,
      }}
      onEnter={onEnter}
      onExit={onExit}
      nodeRef={nodeRef}
    >
      {props.children}
    </CSSTransition>
  );
};

export default SlideUpDown;

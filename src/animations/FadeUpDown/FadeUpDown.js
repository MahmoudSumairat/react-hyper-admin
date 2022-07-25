import React from "react";
import { CSSTransition } from "react-transition-group";
import animationStyles from "./styles.module.scss";

const FadeUpDown = (props) => {
  const { onEnter, onExit, nodeRef, showsIn, timeout = 200 } = props;

  return (
    <CSSTransition
      in={showsIn}
      unmountOnExit
      timeout={timeout}
      classNames={{
        enter: animationStyles.fadeUpDownEnter,
        enterActive: animationStyles.fadeUpDownEnterActive,
        exit: animationStyles.fadeUpDownExit,
        exitActive: animationStyles.fadeUpDownExitActive,
      }}
      onEnter={onEnter}
      onExit={onExit}
      nodeRef={nodeRef}
    >
      {props.children}
    </CSSTransition>
  );
};

export default FadeUpDown;

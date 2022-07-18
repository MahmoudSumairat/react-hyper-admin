import React from "react";
import { CSSTransition } from "react-transition-group";
import animationStyles from "./styles.module.scss";

const FadeUpDown = (props) => {
  const { onEnter, onExit, nodeRef, showsIn } = props;

  return (
    <CSSTransition
      in={showsIn}
      unmountOnExit
      timeout={200}
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

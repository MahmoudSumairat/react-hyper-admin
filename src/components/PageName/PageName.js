import React from "react";
import { useLocation } from "react-router";

const PageName = () => {
  const location = useLocation();

  const getPageName = () => {
    const pathNameArray = location.pathname.split("/");
    const pathNameLength = pathNameArray.length;
    return pathNameArray[pathNameLength - 1] || "home";
  };

  return (
    <div className="page-name">
      <span className="page-name__text">{getPageName()}</span>
    </div>
  );
};

export default PageName;

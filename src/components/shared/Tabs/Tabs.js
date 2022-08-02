import React, { useState } from "react";
import Box from "../Box/Box";
import styles from "./styles.module.scss";

const {
  tabsContainer,
  tabsHeader,
  tabsHeaderItem,
  tabsBody,
  tabsContent,
  activeTab,
} = styles;

const Tabs = ({ tabs = [] }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <div className={tabsContainer}>
      <Box className={tabsHeader}>
        {tabs.map((tab, index) => {
          return (
            <span
              onClick={() => setCurrentTabIndex(index)}
              className={`${tabsHeaderItem} ${
                index === currentTabIndex ? activeTab : ""
              } `}
            >
              {tab.title}
            </span>
          );
        })}
      </Box>
      <Box className={tabsBody}>
        {tabs.map((tab, index) => {
          return (
            index === currentTabIndex && (
              <div className={tabsContent}>{tab.component}</div>
            )
          );
        })}
      </Box>
    </div>
  );
};

export default Tabs;

import React, { useState } from "react";
import Box from "../Box/Box";
import styles from "./styles.module.scss";
import TabBody from "./TabBody/TabBody";

const { tabsContainer, tabsHeader, tabsHeaderItem, tabsBody, activeTab } =
  styles;

const Tabs = ({ tabs = [] }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [switchState, setSwitchState] = useState(true);

  return (
    <div className={tabsContainer}>
      <Box className={tabsHeader}>
        {tabs.map((tab, index) => {
          return (
            <span
              onClick={() => {
                setCurrentTabIndex(index);
                setSwitchState(!switchState);
              }}
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
        <TabBody
          switchState={switchState}
          currentTabIndex={currentTabIndex}
          tabs={tabs}
        />
      </Box>
    </div>
  );
};

export default Tabs;

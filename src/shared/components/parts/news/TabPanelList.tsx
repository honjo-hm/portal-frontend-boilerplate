import React from "react";
import { TabPanel } from "./TabPanel";

export const TabPanelList = (props) => (
    <div>
        {props.tabs.map((tab) => (
            <TabPanel key={`TabPanel${tab.id}`} tab={tab}>{tab.name}</TabPanel>
        ))}
    </div>
);

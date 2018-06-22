import React from "react";
import Swiper from "./Swiper";
import { TabPanel } from "../parts/news/TabPanel";

export const TabPanelList = (props) => (
    <Swiper onSwipe={props.onSwipe}>
        {props.tabs.map((tab) => (
            <TabPanel key={`TabPanel${tab.id}`} tab={tab}>{tab.name}</TabPanel>
        ))}
    </Swiper>
);

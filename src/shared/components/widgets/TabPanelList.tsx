import React from "react";
import Swiper from "./Swiper";
import { TabPanel } from "../parts/news/TabPanel";

const roopCounts = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
    {
        id: 4,
    },
    {
        id: 5,
    },
    {
        id: 6,
    },
];

export const TabPanelList = (props) => (
    <Swiper onSwipe={props.onSwipe}>
        {props.tabs.map((tab) => (
            <TabPanel roopCounts={roopCounts} key={`TabPanel${tab.id}`} tab={tab}>{tab.name}</TabPanel>
        ))}
    </Swiper>
);

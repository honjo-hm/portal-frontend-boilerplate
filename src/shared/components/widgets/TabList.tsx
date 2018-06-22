import React from "react";
import styled from "styled-components"
import { Tab } from "../parts/news/Tab";

const Items = styled.ul`
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f6f6f6;
    font-size: 12px;
    text-align: center;
    white-space: nowrap;
    border-top: 1px solid #e9e9e9;
    border-bottom: 1px solid #eb5505;
`;

export const TabList = (props) => (
    <Items>
        {props.tabs.map((tab) => (
            <Tab key={`Tab${tab.id}`} tab={tab} onClick={props.onClick}>{tab.name}</Tab>
        ))}
    </Items>
);

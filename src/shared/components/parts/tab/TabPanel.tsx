import React from "react";
import styled from "styled-components";
import { Footer } from "../footer/Footer";

export const TabPanel = (props) => (
    <Item hidden={!props.tab.active}>
        <Footer />
    </Item>
);

export const TabPanelList = (props) => (
    <Items>
        {props.tabs.map((tab) => (
            <TabPanel key={`TabPanel${tab.id}`} tab={tab} />
        ))}
    </Items>
);

const Item = styled.div`
    min-height: 500px;
    background-color: #f6f6f6;
`;

const Items = styled.div`
`;

import React from "react";
import styled from "styled-components";

export const TabPanel = (props) => (
    <Item hidden={!props.tab.active}>
        {props.tab.name}
    </Item>
);

export const TabPanelList = (props) => (
    <Items>
        {props.tabs.map((tab) => (
            <TabPanel key={`TabPanel${tab.id}`} tab={tab}>{tab.name}</TabPanel>
        ))}
    </Items>
);

const Item = styled.div`
    min-height: 500px;
`;

const Items = styled.div`
`;

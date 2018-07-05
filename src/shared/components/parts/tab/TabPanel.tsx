import React from "react";
import styled from "styled-components";
import { Item } from "../news/Item"
import { NewsList } from "../news/NewsList";
import { Footer } from "../footer/Footer";

const roopCountsSmall = [
    {
        id: 1,
    },
    {
        id: 1,
    },
    {
        id: 1,
    },
    {
        id: 1,
    },
    {
        id: 1,
    },
    {
        id: 1,
    },
]

const roopCountsLarge = [
    {
        id: 1,
    },
]

const roopCounts2column = [
    {
        id: 1,
    },
    {
        id: 1,
    },
]

const roopCountsMedium = [
    {
        id: 1,
    },
    {
        id: 1,
    },
]

export const TabPanel = (props) => (
    <ItemSample hidden={!props.tab.active}>
        <Item layout='large' roopCounts={roopCountsLarge}/>
        <Item layout='2column' roopCounts={roopCounts2column}/>
        <Item layout='medium' roopCounts={roopCountsMedium}/>
        <Item layout='small' roopCounts={roopCountsSmall}/>
        <NewsList />
        <Footer />
    </ItemSample>
);


export const TabPanelList = (props) => (
    <ItemSample2>
        {props.tabs.map((tab) => (
            <TabPanel key={`TabPanel${tab.id}`} tab={tab} />
        ))}
    </ItemSample2>
);

const ItemSample = styled.div`
    padding: 7px 10px;
    min-height: 500px;
    background-color: #f6f6f6;
`;

const ItemSample2 = styled.div`
`;

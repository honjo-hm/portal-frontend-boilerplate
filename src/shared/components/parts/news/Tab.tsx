import React from "react";
import styled from "styled-components"

export const Tab = (props) => (
    <Item data-tab-id={props.tab.id} data-ga-label={props.tab.name} onClick={props.onClick} data-selected={props.tab.active}>
        {props.tab.name}
    </Item>
);

export const TabList = (props) => (
    <Items>
        {props.tabs.map((tab) => (
            <Tab key={`Tab${tab.id}`} tab={tab} onClick={props.onClick}>{tab.name}</Tab>
        ))}
    </Items>
);

const Item = styled.li`
    position: relative;
    flex: 1;
    margin: 0;
    padding: 0 5px;
    min-height: 44px;
    line-height: 44px;
    &[data-selected='true'] {
        background-color: #eb5505;
        color: #fff;
    }
    ::before {
        content: '';
        position: absolute;
        left: 1px;
        top: 0;
        width: 1px;
        height: 1.5rem;
        margin-top: .75rem;
        background-color: rgba(0, 0, 0, 0.05);
        z-index: -1;
    }
    &:first-child::before,
    &[data-selected='true'] + ::before {
        opacity 0;
    }
`;

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
    border-bottom: 1px solid #eb5505;
`;

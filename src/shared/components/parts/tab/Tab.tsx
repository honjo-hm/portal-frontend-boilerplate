import React from "react";
import styled from "styled-components"

export const Tab = (props) => (
    <Item data-tab-id={props.tab.id} data-ga-label={props.tab.name} onClick={props.onClick} data-selected={props.tab.active}>
        {props.tab.name}
    </Item>
);

export const TabList = (props) => (
    <Nav>
        <Wrapper>
            <Items>
                {props.tabs.map((tab) => (
                    <Tab key={`Tab${tab.id}`} tab={tab} onClick={props.onClick}>{tab.name}</Tab>
                ))}
            </Items>
        </Wrapper>
    </Nav>
);

const Item = styled.li`
    position: relative;
    margin: 0;
    padding: 0 15px;
    min-height: 44px;
    line-height: 44px;
    &[data-selected='true'] {
        font-weight: bold;
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
    @media (min-width: 414px) {
        flex: 1;
    }
`;

const Items = styled.ul`
    display: flex;
    @media (min-width: 414px) {
        justify-content: space-around;
    }
`;

const Wrapper = styled.div`
    height: ${44 + 20}px;
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    max-width: 414px;
    margin: auto;
    @media (min-width: 414px) {
        max-width: 100%;
    }
`;

const Nav = styled.nav`
    height: 44px;
    overflow-y: hidden;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 2;
    font-size: 12px;
    text-align: center;
    border-bottom: 2px solid #eb5505;
    background-color: #f6f6f6;
`;

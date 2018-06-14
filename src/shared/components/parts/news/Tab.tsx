import React from "react";
import styled from "styled-components"

const Item = styled.li`
    flex: 1;
    margin: 0;
    padding: 0 5px;
    min-height: 44px;
    line-height: 44px;
    &:active,
    &:hover {
        background-color: #eb5505;
        color: #fff;
    }
`;

const onClick = (e) => {
    console.log('onclick', e);
};

export const Tab = (props) => (
    <Item data-tab-id={props.tab.id} data-ga-label={props.tab.name} onClick={onClick}>
        <span>{props.tab.name}</span>
    </Item>
);

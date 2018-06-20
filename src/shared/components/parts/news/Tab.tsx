import React from "react";
import styled from "styled-components"

const Item = styled.li`
    flex: 1;
    margin: 0;
    padding: 0 5px;
    min-height: 44px;
    line-height: 44px;
    &[data-selected='true'] {
        background-color: #eb5505;
        color: #fff;
    }
`;

export const Tab = (props) => (
    <Item data-tab-id={props.tab.id} data-ga-label={props.tab.name} onClick={props.onClick} data-selected={props.tab.active}>
        {props.tab.name}
    </Item>
);

import React from "react";
import styled from "styled-components"
import {Item} from "./Item"


const ItemStyle = styled.div`
    min-height: 500px;
`;

export const TabPanel = (props) => (
    <ItemStyle hidden={!props.tab.active}>
        {props.tab.name}
        <Item layout='small' roopCounts={props.roopCounts}/>
    </ItemStyle>
);

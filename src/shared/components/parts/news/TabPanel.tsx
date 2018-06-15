import React from "react";
import styled from "styled-components"

const Item = styled.div`
    min-height: 500px;
`;

export const TabPanel = (props) => (
    <Item>
        {props.tab.name}
    </Item>
);

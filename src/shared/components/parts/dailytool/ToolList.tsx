import React from "react";
import styled from "styled-components"
import { Tool } from "./Tool";

const Items = styled.ul`
     display: -webkit-box;
     width: 100%;
`;

export const ToolList = (props) => (
    <Items>
        {props.tools.map((tool) => (
            <Tool key={`Tool${tool.id}`} tool={tool}></Tool>
        ))}
    </Items>
);

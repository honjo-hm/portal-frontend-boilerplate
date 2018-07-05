import React from "react";
import styled from "styled-components";

const NewsLabel = styled.span`
    display: inline-block;
    height: 11px;
    margin-right: 5px;
    padding: 2px 2px 0;
    font-size: 10px;
    line-height:     1;
    -webkit-transform: scale(.9,.9);
    transform: scale(.9,.9);
    border: 1px solid #eb5505;
    color: #eb5505;
`;

export const Label = () => (
    <NewsLabel>NEW</NewsLabel>
);  
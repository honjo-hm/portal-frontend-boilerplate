import React from "react";
import styled from "styled-components";

const NewsServiceName = styled.span`
    display: inline-block;
    margin-right: 5px;
    line-height: 1.2;
    font-size: 10px;
    color: #9e9e9e; 
`;

export const ServiceName = () => (
    <NewsServiceName>時事通信社</NewsServiceName>
);
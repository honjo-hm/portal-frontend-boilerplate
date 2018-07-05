import React from "react";
import styled from "styled-components";

const NewsLastupdate = styled.span`
    display: inline-block;
    margin-right: 5px;
    line-height: 1.2;
    font-size: 10px;
    color: #9e9e9e; 
`;

export const Lastupdate = (props) => (
    <NewsLastupdate>{props.newsItem.slice(5, 16).replace('-', '/')}</NewsLastupdate>
);
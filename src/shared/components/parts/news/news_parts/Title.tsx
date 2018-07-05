import React from "react";
import styled from "styled-components";

const NewsTitle = styled.p`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
`;

export const Title = (props) => (
    <NewsTitle>{props.newsItem}</NewsTitle>
);
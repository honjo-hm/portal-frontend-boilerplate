import React from "react";
import styled from "styled-components";
import { NewsDivide } from "./NewsDivide";

const NewsItemsWrapper = styled.ul`
    width: 100%;
    box-sizing: border-box;
`;

export const NewsItems = (props) => (
    <NewsItemsWrapper>
        {props.newsItems.map((newsItem) => (
            <NewsDivide key={`newsItem${newsItem.id}`} newsItem={newsItem}></NewsDivide>
        ))}
    </NewsItemsWrapper>
);
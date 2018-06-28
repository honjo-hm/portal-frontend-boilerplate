import React from "react";
import styled from "styled-components";
import { NewsPartsSS } from "./NewsPartsSS";
import { NewsPartsS } from "./NewsPartsS";
import { NewsPartsM } from "./NewsPartsM";
import { NewsPartsL } from "./NewsPartsL";

const NewsItem = styled.li`
    width: 100%;
    border-top: 1px solid #f6f6f6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    vertical-align: top;
    clear: left;
`;

/*
* 記事のサイズを出し分ける
*/

export const NewsDivide = (props) => (
    <NewsItem>
        {(() => {
            if (props.newsItem.size === 'ss') {
                return <NewsPartsSS newsItem={props.newsItem} />;
            } else if (props.newsItem.size === 's') {
                return <NewsPartsS newsItem={props.newsItem} />;
            } else if (props.newsItem.size === 'm') {
                return <NewsPartsM newsItem={props.newsItem} />;
            } else if (props.newsItem.size === 'l') {
                return <NewsPartsL newsItem={props.newsItem} />;
            }
        })()}
    </NewsItem>
);

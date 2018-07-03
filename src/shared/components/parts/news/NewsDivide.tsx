import React from "react";
import styled from "styled-components";
import { NewsPartsCol2 } from "./NewsPartsCol2";
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
    overflow: hidden;
    &.half {
        width: 50%;
        ＆:nth-child(odd){
            float: left;
        }
        &:nth-child(even){
            float: right;
        }
    }
`;

export const NewsDivide = (props) => (
    <NewsItem className={props.newsItem.size === 'col2'? "half" : ""}>
        {(() => {
            if (props.newsItem.size === 's') {
                return <NewsPartsS newsItem={props.newsItem} />;
            } else if (props.newsItem.size === 'col2') {
                return <NewsPartsCol2 newsItem={props.newsItem} />;
            } else if (props.newsItem.size === 'm') {
                return <NewsPartsM newsItem={props.newsItem} />;
            } else if (props.newsItem.size === 'l') {
                return <NewsPartsL newsItem={props.newsItem} />;
            }
        })()}
    </NewsItem>
);

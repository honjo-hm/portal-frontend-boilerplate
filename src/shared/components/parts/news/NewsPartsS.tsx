import React from "react";
import styled from "styled-components";
import { Title } from "./news_parts/Title";
import { Lastupdate } from "./news_parts/Lastupdate";
import { ServiceName } from "./news_parts/ServiceName";
import { Label } from "./news_parts/Label";
import { Thumbnail } from "./news_parts/Thumbnail";

const NewsLink = styled.a`
    display: -webkit-box;
    display: -ms-flexbox;
    display: box;   
    position: relative;
    -webkit-box-align: center;
    padding: 3px 0;
    text-decoration: none;
    color: #3c3c3c;
`;

const NewsItemThumbnailSmall = styled.div`
    position: relative;
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    border: 1px solid #d8d8d8;
    overflow: hidden;

    &::before {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #e9e9e9;
        content: '';
    }

    span {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
    }

`;

const NewsText = styled.div`
    -webkit-box-flex: 1;
    padding: 3px 0 3px 5px;
`;

const NewsSubText = styled.div`
    line-height: 1.2;
    color: #9e9e9e;
    font-size: 10px;
`;

export const NewsPartsS = (props) => (
    <NewsLink href={props.newsItem.url}>
        <NewsItemThumbnailSmall>
            <Thumbnail newsItem={props.newsItem.s_thumbnail} />
        </NewsItemThumbnailSmall>
        <NewsText>
            <Title newsItem={props.newsItem.title} />
            <NewsSubText>
                <Label />
                <Lastupdate newsItem={props.newsItem.updated_date} />
                <ServiceName newsItem={props.newsItem.credit} />
            </NewsSubText>
        </NewsText>
    </NewsLink>
);

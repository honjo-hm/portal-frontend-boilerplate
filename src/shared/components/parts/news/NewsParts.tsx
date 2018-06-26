import React from "react";
import styled from "styled-components";
import { Title } from "./Title";
import { Lastupdate } from "./Lastupdate";
import { ServiceName } from "./ServiceName";
import { Label } from "./Label";
import { Thumbnail } from "./Thumbnail";

const NewsItem = styled.li`
    width: 100%;
    border-top: 1px solid #f6f6f6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    vertical-align: top;
    clear: left;
`;

const NewsLink = styled.a`
    display: -webkit-box;
    display: -ms-flexbox;
    display: box;   
    position: relative;
    -webkit-box-align: center;
    padding: 3px 0;
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

export const NewsParts = (props) => (
    <NewsItem>
        <NewsLink>
            <Thumbnail newsItem={props.newsItem.s_thumbnail} />
            <NewsText>
                <Title newsItem={props.newsItem.title} />
                <NewsSubText>
                    <Label />
                    <Lastupdate newsItem={props.newsItem.updated_date} />
                    <ServiceName newsItem={props.newsItem.credit} />
                </NewsSubText>
            </NewsText>
        </NewsLink>
    </NewsItem>
);

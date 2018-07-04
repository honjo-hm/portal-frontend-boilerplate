import React from "react";
import styled from "styled-components";
import { Title } from "./news_parts/Title";
import { Lastupdate } from "./news_parts/Lastupdate";
import { ServiceName } from "./news_parts/ServiceName";
import { Label } from "./news_parts/Label";
import { Thumbnail } from "./news_parts/Thumbnail";
//@ts-ignore
import { Link } from "../../../routes/index";

const NewsLink = styled.div`
    display: block;
    background-color: #fff;
    text-decoration: none;
    color: #3c3c3c;
`;

const NewsItem_thumbnail_laege = styled.div`
    position: relative;
    padding-top: 43.33%;
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
    padding: 7px 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    line-height: 1.2;
`;

const NewsSubText = styled.div`
    line-height: 1.2;
    color: #9e9e9e;
    font-size: 10px;
`;

export const NewsPartsL = (props) => (
  <div>
      {/* 一旦、Lのみ記事詳細モックに飛ばす */}
      <Link route='detail'>
          <NewsLink>
              <NewsItem_thumbnail_laege>
                  <Thumbnail newsItem={props.newsItem.l_thumbnail} />
              </NewsItem_thumbnail_laege>
              <NewsText>
                  <Title newsItem={props.newsItem.title} />
                  <NewsSubText>
                      <Label />
                      <Lastupdate newsItem={props.newsItem.updated_date} />
                      <ServiceName newsItem={props.newsItem.credit} />
                  </NewsSubText>
              </NewsText>
          </NewsLink>
      </Link>
  </div>
);

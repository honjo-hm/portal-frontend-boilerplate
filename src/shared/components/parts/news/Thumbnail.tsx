import React from "react";
import styled from "styled-components";

//TODO: サムネイルの各大きさのclassをどうするか考える

const NewsThumbnail = styled.div`
    position: relative;
    width: 50px;
    height: 50px;
    background-position: center top;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    overflow: hidden;

    & img {
        width: 100%;
    } 

`;

export const Thumbnail = (props) => (
    <NewsThumbnail><img src={props.newsItem} /></NewsThumbnail>
);
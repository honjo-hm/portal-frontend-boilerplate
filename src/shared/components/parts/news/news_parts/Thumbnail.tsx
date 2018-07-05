import React from "react";
import styled from "styled-components";

//TODO: サムネイルの各大きさのclassをどうするか考える

const NewsThumbnail = styled.span`
    display: block;
`;

export const Thumbnail = (props) => (
    <NewsThumbnail><img src={props.newsItem} /></NewsThumbnail>
);
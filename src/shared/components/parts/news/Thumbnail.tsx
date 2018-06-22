import React from "react";
import styled from "styled-components";

//TODO: サムネイルの各大きさのclassをどうするか考える

const NewsThumbnail = styled.div`
    position: relative;
    width: 50px;
    height: 50px;
    background-image: url('//portal.st-img.jp/thumb/5c1a181c8c8013b9b33536eab99353b5_1529018131_s.jpg');
    background-position: center top;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
`;

export const Thumbnail = () => (
    <NewsThumbnail></NewsThumbnail>
);
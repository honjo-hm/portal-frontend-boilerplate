/**
 * 記事詳細 - コンテンツ見出し
 */
import React from "react";
import styled from "styled-components"

const Headline = styled.h1`
    margin: 0;
    padding: 10px;
    background-color: #f6f6f6;
    color: #676767;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.3;
`;

export const ContentsHeadlineParts = (props) => (
    <Headline>{props.text}</Headline>
);

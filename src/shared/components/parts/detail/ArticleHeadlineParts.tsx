/**
 * 記事詳細 - 記事見出し
 */
import React from "react";
import styled from "styled-components"

const Headline = styled.div`
    margin: 10px 0 5px;
    line-height: 1.3;
`;
const HeadlineText = styled.h1`
    font-size: 18px;
    font-weight: 700;
    margin: 0 10px;
`;

export const ArticleHeadlineParts = (props) => (
      <Headline>
          <HeadlineText>{props.title}</HeadlineText>
      </Headline>
);

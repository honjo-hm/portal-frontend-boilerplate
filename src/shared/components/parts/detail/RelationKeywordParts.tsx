/**
 * 記事詳細 - 関連キーワード
 */
import React from "react";
import styled from "styled-components"

const Item = styled.li`
    display: inline-block;
    margin: 0 10px 10px 0;
    border-radius: 4px;
    border: 1px solid #e9e9e9;
    background-color: #f6f6f6;
    font-size: 12px;
`;
const KeywordLink = styled.a`
    display: block;
    padding: 5px 10px;
`;

const createUrl = keywordId => {
  return 'https://stg.article.auone.jp/keyword/article/' + keywordId;
}

export const RelationKeywordParts = (props) => (
    <Item data-keywordid={props.keyword.id} data-keywordname={props.keyword.name}>
        <KeywordLink href={createUrl(props.keyword.id)} data-ga-action="関連キーワード" data-ga-label={props.keyword.name}>
            {props.keyword.name}
        </KeywordLink>
    </Item>
);

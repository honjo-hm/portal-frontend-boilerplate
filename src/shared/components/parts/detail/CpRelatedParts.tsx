/**
 * 記事詳細 - CP関連リンク
 */
import React from "react";
import styled from "styled-components"

const Item = styled.li`
    border: none;
    line-height: 1.3;
    margin: 0 10px;
    border-top: 1px solid #f6f6f6;
`;
const LinkText = styled.a`
    padding-right: 2px;
    font-size: 13px;
    font-weight: 400;
    display: block;
    position: relative;
    padding: 8px 10px 8px 2px;
`;

export const CpRelatedParts = (props) => (
    <Item>
        <LinkText href={props.cpItem.link} className="link-text" target="_blank" data-ga-action="関連リンク_CP" data-ga-label={props.cpItem.title}>{props.cpItem.title}</LinkText>
    </Item>
);

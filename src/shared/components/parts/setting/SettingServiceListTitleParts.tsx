/**
 * 個人設定ページ - 設定変更タイトル
 */
import React from "react";
import styled from 'styled-components'

/**
 * style
 */
const SettingTitle = styled.div`
    height: 24px;
    padding: 7px 12px;
    background-color: #f6f6f6;
    border-bottom: 1px solid #e9e9e9;
`;

const SettingTitleText = styled.h2`
    position: relative;
    display: inline-block;
    height: 24px;
    padding-left: 12px;
    line-height: 24px;
    font-size: 16px;

    &::before, &::after {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 5px;
        height: 24px;
        background-color: #eb5505;
        content: '';
    }

    &::after {
        height: 12px;
        background: -webkit-gradient(linear,left top,left bottom,from(#fbb58f),to(#eb5505));
    }
`;

/**
 * parts
 */
export const SettingServiceListTitleParts = (props) => (
    <SettingTitle>
        <SettingTitleText>{props.title}</SettingTitleText>
    </SettingTitle>
);

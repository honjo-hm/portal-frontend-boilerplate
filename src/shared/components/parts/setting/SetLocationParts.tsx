/**
 * 個人設定ページ - 現地から設定
 */
import React from "react";
import styled from 'styled-components'

/**
 * style
 */
const SettingLocationBtn = styled.div`
    margin-top: 15px;
    border-top: 1px solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
    padding: 12px 0;
`;

const SettingLocationText = styled.span`
    padding-left: 25px;
    background: url(https://dev-capybara1.kdev.auone.jp/emu/dist/img/location-pin.png?cc=1528868102) no-repeat;
    background-size: 15px 20px;
    display: inline-block;
    height: 20px;
    line-height: 20px;
`;


/**
 * script
 */
const onClickSettingLocationBottun = (e) => {
    console.log(e);
};

export const SetLocationParts = () => (
    <SettingLocationBtn onClick={e => onClickSettingLocationBottun(e)}>
        <SettingLocationText>現在地から設定</SettingLocationText>
    </SettingLocationBtn>
);

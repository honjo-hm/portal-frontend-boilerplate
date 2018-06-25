/**
 * 個人設定ページ - 路線クリアボタン
 */
import React from "react";
import styled from 'styled-components'

/**
 * style
 */
const SettingBottunClear = styled.div`
    max-width: 400px;
    margin: 10px auto;
    padding: 0 30px;

    & p {
        height: 37px;
        line-height: 37px;
        border: 1px solid #e9e9e9;
        background-color: #efefef;
        border-radius: 4px;
        text-align: center;
        font-size: 15px;

        span {
            padding-left: 30px;
            position: relative;
            display: inline-block;
        }
        span:before {
            left: 0;
            margin-top: -13px;
            background-image: url(https://dev-capybara1.kdev.auone.jp/emu/dist//img/sprite-setting.png?cc=1528868102);
            background-position: -39px 0;
            width: 25px;
            height: 25px;
            background-size: 64px 30px;
            background-repeat: no-repeat;
            position: absolute;
            top: 50%;
            content: '';
        }
    }
`;

const TrainClearBottunArea = styled.span`
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    padding-left: 30px;
    position: relative;
    display: inline-block;
    font-weight: inherit;
    font-style: inherit;
    font-family: inherit;
    font-size: 100%;
    vertical-align: baseline;
    line-height: 37px;

    &:before {
        left: 0;
        margin-top: -13px;
        background-image: url(https://dev-capybara1.kdev.auone.jp/emu/dist//img/sprite-setting.png?cc=1528868102);
        background-position: -39px 0;
        width: 25px;
        height: 25px;
        background-size: 64px 30px;
        background-repeat: no-repeat;
        position: absolute;
        top: 50%;
        content: '';
    }
`;

/**
 * script
 */

const onClickClearSetting = (e) => {
    console.log(e);
}

/**
 * parts
 */
export const ClearButtonTrainParts = (props) => (
    <SettingBottunClear onClick={e => onClickClearSetting(e)}>
        <p data-ga-action="Personal" data-ga-label="路線設定クリア">
            <span>設定した路線をクリア</span>
        </p>
    </SettingBottunClear>
);


/**
 * 個人設定ページ - 検索設定ボタン
 */
import React from "react";
import styled from "styled-components";

const SettingSearchList = styled.ul`
    border-top: 1px solid #e9e9e9;

    & li {
        display: block;
        height: 30px;
        line-height: 30px;
        padding: 8px 25px 8px 10px;
        font-size: 15px;
        border-bottom: 1px solid #e9e9e9;
    }
`;

const SettingSearchText = styled.p`
    float: left;
`;

const SettingSearchSwitch = styled.div`
    float: right;
`;

const SettingSearchTgl = styled.input`
    display: none;
`;

const SettingSearchTglBtn = styled.label`
    background: #eb5505;
    position: relative;
    display: block;
    box-sizing: border-box;
    outline: 0;
    width: 64px;
    height: 30px;
    border-radius: 30px;
    transition: all .4s ease;

    & span {
        display: block;
        padding: 0 4px;
        color: #fff;
        font-size: 14px;
    }

    &:after {
        left: 2px;
        left: 36px;
        display: block;
        position: absolute;
        top: 2px;
        width: 26px;
        height: 26px;
        border-radius: 26px;
        background: #fff;
        box-shadow: 1px 1px 2px rgba(0,0,0,.3);
        content: '';
        transition: all .3s ease;
    }
`;

const SettingSearchTglBtnOn = styled.span`
`;

const SettingSearchTglBtnOff = styled.span`
    text-align: right;
`;

const SettingBtnClear = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
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
    }

    & p span {
        padding-left: 30px;
        position: relative;
        display: inline-block;
    }

    & p span:before {
        left: 0;
        margin-top: -13px;
        background-image: url(https://dev-capybara1.kdev.auone.jp/emu/dist/img/sprite-setting.png?cc=1530238755);
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


const displayNone: any = {
    display: "none"
};

const onClearHistoryButton = (e) => {
    alert("検索履歴削除");
};

const onSettingSwitch = (e) => {
    alert(this);
};


export const SearchButtonParts = () => (
    <form action="" method="">
        <SettingSearchList>
            <li>
                <SettingSearchText>入力補助</SettingSearchText>
                <SettingSearchSwitch>
                    <SettingSearchTgl type="checkbox" name="" id="cb1"/>
                    <SettingSearchTglBtn onClick={(e) => onSettingSwitch(e)}>
                        <SettingSearchTglBtnOn>ON</SettingSearchTglBtnOn>
                        <SettingSearchTglBtnOff style={displayNone}>OFF</SettingSearchTglBtnOff>
                    </SettingSearchTglBtn>
                </SettingSearchSwitch>
            </li>
            <li>
                <SettingSearchText>検索履歴</SettingSearchText>
                <SettingSearchSwitch>
                    <SettingSearchTgl type="checkbox" name="" id="cb2"/>
                    <SettingSearchTglBtn onClick={(e) => onSettingSwitch(e)}>
                        <SettingSearchTglBtnOn>ON</SettingSearchTglBtnOn>
                        <SettingSearchTglBtnOff>OFF</SettingSearchTglBtnOff>
                    </SettingSearchTglBtn>
                </SettingSearchSwitch>
            </li>
        </SettingSearchList>
        <SettingBtnClear onClick={(e) => onClearHistoryButton(e)}>
            <p><span>検索履歴の削除</span></p>
        </SettingBtnClear>
    </form>
);

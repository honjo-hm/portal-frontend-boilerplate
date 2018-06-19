/**
 * サイドメメニューボタン
 */
import React from "react";
import styled from "styled-components";

/**
 * style
 */
const DrawerBot = styled.div`
    position: fixed;
    bottom: 33px;
    left: 0;
    width: 66px;
    height: 80px;
    opacity: 1;
    margin: 0;
    background: url(https://dev-capybara1.kdev.auone.jp/emu/dist/img/drawer_btn.png) 50% 50% no-repeat;
    background-size: 52px auto;
    cursor: pointer;
    z-index: 900;
`;

/**
 * script
 */
const onClickSubPageDrawerBottun = (e) => {
    console.log(e);
};

/**
 * parts
 */
export const SubPageDraewrBottunParts = () => (
    <DrawerBot onClick={e => onClickSubPageDrawerBottun(e)}></DrawerBot>
);

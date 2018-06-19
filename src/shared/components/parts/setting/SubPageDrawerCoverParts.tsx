/**
 * サイドメメニューカバー
 */
import React from "react";
import styled from "styled-components";

/**
 * style
 */
const DrawerCover = styled.div`
    visibility: hidden;
    transition-duration: .3s;
    transition-property: opacity;
    opacity: 0;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,.6);
    z-index: 999;
    -webkit-tap-highlight-color: transparent;

    &:after {
        content: '';
        z-index: 1001;
        position: absolute;
        top: 15px;
        left: 255px;
        display: block;
        background: url(https://dev-capybara1.kdev.auone.jp/emu/dist/img/drawer_close.png) no-repeat;
        height: 57px;
        width: 36px;
        background-size: 36px auto;
    }
`;

/**
 * parts
 */
export const SubPageDrawerCoverParts = () => (
    <DrawerCover />
);

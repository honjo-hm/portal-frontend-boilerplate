import React from "react";
import styled from 'styled-components';

const SidemenuAppBannerWrapper = styled.div`
    a {
        display: block;
        height: 60px;
        background: url(//simg.auone.jp/emu/dist/img/sp/app-banner.png) center no-repeat;
        background-size: 320px auto;
        border-top: 1px solid #e9e9e9;
        text-indent: 100%;
        overflow: hidden;
        border-bottom: 1px solid #e9e9e9;
        white-space: nowrap;
    }
`;

export const SidemenuAppBanner = () => (
    <SidemenuAppBannerWrapper>
        <div className="sidemenu__app-banner">
          <a href="https://itunes.apple.com/app/apple-store/id714702585?pt=619251&amp;ct=websm00&amp;mt=8" className="js-analytics" data-ga-action="SideMenu" data-ga-label="auサービスTOPアプリ">auサービスTOPアプリ お得なクーポンやプレゼント、最新ニュースをお届け　詳しく見る</a>
        </div>
    </SidemenuAppBannerWrapper>
);

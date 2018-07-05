import React from "react";
import styled from 'styled-components';

const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: justify;
    flex: 1;
    h1 {
      width: 110px;
      height: 13px;
      background: url(//simg.auone.jp/emu/dist/img/portal_logo.png?cc=1528868102) no-repeat;
      -webkit-background-size: 110px auto;
      background-size: 110px auto;
      text-indent: 100%;
      white-space: nowrap;
      overflow: hidden;
    }
    a {
      display: block;
    }
    div {
      display: block;
      width: 124px;
      height: 40px;
      margin: 2px 0 0 10px;
      background: url(//simg.auone.jp/emu/dist/img/worldcup/header_icon_wc.png?cc=1528868102) no-repeat left center;
      background-size: 124px 40px;
      content: '';
    }
`;

export const ServiceTitle = () => (
    <HeaderLogo>
      <h1><a href="/">au Webポータル</a></h1>
      <div></div>
    </HeaderLogo>
);

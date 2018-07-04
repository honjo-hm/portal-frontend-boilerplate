import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 3px;
    .header__sidemenu-line {
        position: relative;
        width: 25px;
        height: 16px;
        border-top: 2px solid #535353;
    }
    .header__sidemenu-line::before {
        display: block;
        position: absolute;
        top: 6px;
        width: 25px;
        height: 6px;
        border-top: 2px solid #535353;
        border-bottom: 2px solid #535353;
        content: '';
    }
    .header__sidemenu-text {
        padding-top: 5px;
        color: #9e9e9e;
        font-size: 10px;
        font-weight: 700;
        transform: scale(.8,.8);
    }
`;

export const SidemenuButton = (props) => (
    <Wrapper onClick={ props.onClick }>
      <p className="header__sidemenu-line"></p>
      <p className="header__sidemenu-text">メニュー</p>
    </Wrapper>
);

import React from "react";
import styled from 'styled-components';

const SidemenuHeaderWrapper = styled.div`
    .sidemenu__title {
        display: flex;
        align-items: center;
        position: sticky;
        top: 0;
        height: 50px;
        padding-left: 50px;
        z-index: 10;
        border-bottom: 1px solid #e9e9e9;
    }
    .sidemenu__title-text {
        flex: 1;
        font-weight: bold;
        text-align: center;
    }
    .sidemenu__close-button {
        position: relative;
        width: 50px;
        height: 50px;
        z-index: 2147483644;
        span {
              position: absolute;
              bottom: 5px;
              width: 100%;
              color: #9e9e9e;
              font-size: 10px;
              font-weight: 700;
              line-height: 1;
              text-align: center;
              transform: scale(.8,.8);
          }
        }
    }
    .sidemenu__close-button::before,
    .sidemenu__close-button::after {
        position: absolute;
        top: 0;
        bottom: 7px;
        left: 0;
        right: 0;
        margin: auto;
        width: 22px;
        height: 2px;
        background-color: #535353;
        content: '';
    }
    .sidemenu__close-button::before {
        transform: rotate(45deg);
    }
    .sidemenu__close-button::after {
        transform: rotate(-45deg);
    }
`;

export const SidemenuHeader = (props) => (
    <SidemenuHeaderWrapper>
        <div className="sidemenu__title">
            <p className="sidemenu__title-text">メニュー</p>
            <p className="js-sidemenu__close-button sidemenu__close-button" onClick={ props.onClick }><span>閉じる</span></p>
        </div>
    </SidemenuHeaderWrapper>
);

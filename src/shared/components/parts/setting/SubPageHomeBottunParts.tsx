/**
 * 2階層以下ヘッダーホームボタン
 */
import React from "react";
import styled from 'styled-components'

//@ts-ignore
import { Link } from "../../../routes/index";

 /**
  * style
  */
const SettingHeaderHome = styled.li`
    & a{
        display: block;
        position: relative;
        min-width: 30px;
        min-height: 30px;
        line-height: 1;
        text-align: center;
        border-radius: 4px;
        border: 1px solid #b9b9b9;
        background: -webkit-gradient(linear,left top,left bottom,from(#fff),to(#eee));
        box-shadow: 0 1px 1px rgba(255,255,255,.3) inset, 0 0 0 rgba(0,0,0,.1), 0 1px 1px rgba(0,0,0,.1);
        box-sizing: border-box;
        font-family: Arial;
        color: #333;

        i {
            display: inline-block;
            position: absolute;
            top: 3px;
            left: 2px;
            height: 22px;
            width: 24px;
            background: url(https://dev-capybara1.kdev.auone.jp/emu/dist/img/icon_header_home.png?cc=1528868102) no-repeat;
            background-size: 24px 22px;
            font-style: italic;
            line-height: 1;
        }
    }
    & a:visited {
        color: #727272;
    }
`;

/**
 * parts
 */
export const SubPageHomeBottunParts = () => (
    <SettingHeaderHome>
        <Link route="index">
            <a>
                <i>&nbsp;</i>
            </a>
        </Link>
    </SettingHeaderHome>
);

/**
 * 個人設定ページ - 地域情報
 */
import React from "react";
import styled from 'styled-components'

//@ts-ignore
import { Link } from "../../../routes/index";

export const SettingAreaParts = (props) => (
    <li>
        <Link route={props.route} regionCode={props.region.code}>
            <a>{props.region.name}</a>
        </Link>
    </li>  
);

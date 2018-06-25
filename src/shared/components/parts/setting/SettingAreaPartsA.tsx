/**
 * 個人設定ページ - 地域情報
 */
import React from "react";
import styled from 'styled-components'

//@ts-ignore
import { Link } from "../../../routes/index";

export const SettingAreaPartsA = (props) => (
    <li>
        <Link route={props.route} regionCode={props.region.code} prefCode={props.prefecture}>
        {/* <Link route={props.route} params={{regionCode: "01", prefCode: "23"}}> */}
            <a>{props.region.name}</a>
        </Link>
    </li>  
);

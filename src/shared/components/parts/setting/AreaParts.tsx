/**
 * 個人設定ページ - 地域情報
 */
import React from "react";
import styled from 'styled-components'

//@ts-ignore
import { Link } from "../../../routes/index";

export const AreaParts = (props) => (
    <li>
        <Link route={props.route} regionCode={props.area.regionCode} prefCode={props.area.prefCode}>
            <a>{props.area.name}</a>
        </Link>
    </li>  
);

/**
 * 個人設定ページ - 設定実行
 */
import React from "react";

export const AreaPartsB = (props) => (
    <li>
        <p onClick={() => setCookie(props.name, props.value)}>{props.name}</p>
    </li>  
);

const setCookie = (name, value) => {
    alert("設定しました。");
};

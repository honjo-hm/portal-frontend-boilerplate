/**
 * 個人設定ページ - 設定実行
 */
import React from "react";

const setCookie = (name, value) => {
    alert("設定しました。");
};

export const AreaPartsB = (props) => (
    <li>
        <p onClick={() => setCookie(props.name, props.key)}>{props.name}</p>
    </li>  
);

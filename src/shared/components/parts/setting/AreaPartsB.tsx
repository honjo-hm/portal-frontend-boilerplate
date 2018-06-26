/**
 * 個人設定ページ - 設定実行
 */
import React from "react";

const setCookie = (name, value) => {
    alert("設定しました。" + value);
};

export const AreaPartsB = (props) => (
    <li>
        <p onClick={() => setCookie("cookie_name", props.area.code)}>{props.area.name}</p>
    </li>  
);

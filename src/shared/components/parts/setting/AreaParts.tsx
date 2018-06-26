/**
 * 個人設定ページ - 地域情報
 */
import React from "react";

//@ts-ignore
import { Link } from "../../../routes/index";

export const AreaParts = (props) => (
    <li>
        {(() => {
            let params = {
                children: <a>{props.area.name}</a>,
                route: props.route,
            };

            // patternに一致するパラメータを追加
            const routeParams = props.area.params;
            for (let key in routeParams) {
                params[key] = routeParams[key];
            }

            return Link(params)
        })()}
    </li>  
);

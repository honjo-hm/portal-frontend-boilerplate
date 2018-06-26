/**
 * 個人設定ページ - 戻るボタン
 */
import React from "react";

import { SettingLeadBackLink } from "../../../style/setting/parts";

//@ts-ignore
import { Link } from "../../../routes/index";


/**
 * parts
 */
export const BackBottunParts = (props) => (
    <SettingLeadBackLink>
    {(() => {
        let params = {
            children: <a>戻る</a>,
            route: props.params.route,
        };

        // patternに一致するパラメータを追加
        const routeParams = props.params.params;
        for (let key in routeParams) {
            params[key] = routeParams[key];
        }

        return Link(params)
    })()}
    </SettingLeadBackLink>
);


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
        <Link route={props.route} regionCode={props.regionCode} prefCode={props.prefCode} params={{regionCode: "01"}}>
            <a data-ga-action="Personal">戻る</a>
        </Link>
    </SettingLeadBackLink>
);


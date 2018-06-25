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
        <Link route={props.route} params={props.params}>
            <a data-ga-action="Personal" data-ga-label="戻る">戻る</a>
        </Link>
    </SettingLeadBackLink>
);


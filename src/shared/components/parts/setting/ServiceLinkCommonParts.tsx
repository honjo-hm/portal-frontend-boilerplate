/**
 * 個人設定ページ - 設定変更ページリンク(天気・占い)
 */
import React from "react";

import { SettingLinkText, ServiceLinkAncher } from "../../../style/setting/parts";

//@ts-ignore
import { Link } from "../../../routes/index";

/**
 * parts
 */
export const ServiceLinkCommonParts = (props) => (
    <SettingLinkText>
        <Link route={props.route}>
            <ServiceLinkAncher>
                <span>未設定</span>
            </ServiceLinkAncher>
        </Link>
    </SettingLinkText>
);

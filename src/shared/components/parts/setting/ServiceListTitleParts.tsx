/**
 * 個人設定ページ - 設定変更タイトル
 */
import React from "react";

import { SettingTitle, SettingTitleText } from "../../../style/setting/parts";


/**
 * parts
 */
export const ServiceListTitleParts = (props) => (
    <SettingTitle>
        <SettingTitleText>{props.title}</SettingTitleText>
    </SettingTitle>
);

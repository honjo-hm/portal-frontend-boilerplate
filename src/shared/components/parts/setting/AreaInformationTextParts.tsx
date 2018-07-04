/**
 * 個人設定ページ - 地域情報
 */
import React from "react";

import { SettingLeadCurrentText } from "../../../style/setting/common";

export const AreaInformationTextParts = (props) => (
    <div>
        <p>現在設定されている{props.discription}</p>
        <SettingLeadCurrentText>{props.label}</SettingLeadCurrentText>
    </div>
);

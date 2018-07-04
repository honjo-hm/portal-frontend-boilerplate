/**
 * 個人設定ページ - 現地から設定
 */
import React from "react";

import { SettingLocationBtn, SettingLocationText } from "../../../style/setting/parts";

/**
 * script
 */
const onClickSettingLocationBottun = (e) => {
    console.log(e);
};

export const SetLocationParts = () => (
    <SettingLocationBtn onClick={e => onClickSettingLocationBottun(e)}>
        <SettingLocationText>現在地から設定</SettingLocationText>
    </SettingLocationBtn>
);

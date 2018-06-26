/**
 * 個人設定ページ - 路線クリアボタン
 */
import React from "react";

import { SettingBottunClear, TrainClearBottunArea } from "../../../style/setting/parts";

/**
 * parts
 */
export const ClearButtonTrainParts = (props) => (
    <SettingBottunClear onClick={props.onClick}>
        <p>
            <span>設定した路線をクリア</span>
        </p>
    </SettingBottunClear>
);


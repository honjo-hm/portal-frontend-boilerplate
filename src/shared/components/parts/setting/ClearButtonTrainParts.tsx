/**
 * 個人設定ページ - 路線クリアボタン
 */
import React from "react";

import { SettingBottunClear, TrainClearBottunArea } from "../../../style/setting/parts";

/**
 * script
 */

const onClickClearSetting = (e) => {
    console.log(e);
    alert("路線クリア");
}

/**
 * parts
 */
export const ClearButtonTrainParts = (props) => (
    <SettingBottunClear onClick={e => onClickClearSetting(e)}>
        <p data-ga-action="Personal" data-ga-label="路線設定クリア">
            <span>設定した路線をクリア</span>
        </p>
    </SettingBottunClear>
);


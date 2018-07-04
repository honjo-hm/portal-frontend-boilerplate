/**
 * 個人設定ページ - 戻るボタン
 */
import React from "react";

import { SettingLead } from "../../../style/setting/common";

import { SearchButtonParts } from "../../parts/setting/SearchButtonParts";
import { SearchDescriptionParts } from "../../parts/setting/SearchDescriptionParts";
import { BackBottunParts } from "../../parts/setting/BackButtonParts";

/**
 * module
 */
export default class SearchWidget extends React.Component<{}, {}> {
    /**
     * render
     */
    public render(): React.ReactNode {
        return (
            <div>
                <SettingLead>
                    <BackBottunParts route="index" params={{}} />
                </SettingLead>
                <SearchButtonParts />
                <SearchDescriptionParts />
            </div>
        );
    }
}

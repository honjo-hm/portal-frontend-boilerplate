/**
 * 個人設定ページ -  都道府県選択情報
 */
import React from "react";

import { SettingLead, SettingLeadCurrentText } from "../../../style/setting/common";

import { BackBottunParts } from "../../parts/setting/BackButtonParts";
import SettingRegionListWidget from "./RegionListWidget";

export interface RegionInfomationProps {
    route: string;
    code: string;
    // params: {[key: string]: string}[];
}

/**
 * module
 */
export default class RegionInfomationWidget extends React.Component<RegionInfomationProps, {}> {
    public render(): React.ReactNode {
        return (
            <SettingLead>
                <BackBottunParts route={this.props.route} />
                <SettingLeadCurrentText>{SettingRegionListWidget.AREA_LIST[this.props.code]}</SettingLeadCurrentText>
            </SettingLead>
        );
    }
}

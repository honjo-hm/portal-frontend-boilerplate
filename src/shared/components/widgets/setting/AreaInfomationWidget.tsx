/**
 * 個人設定ページ - 戻るボタン
 */
import React from "react";

import { SettingLead, SettingLeadCurrentText } from "../../../style/setting/common";

import { BackBottunParts } from "../../parts/setting/BackButtonParts";
import { SetLocationParts } from "../../parts/setting/SetLocationParts";

/**
 * props
 */
export interface AreaInfomationProps {
    route: string;
    label: string;
}

/**
 * module
 */
export default class AreaInfomationWidget extends React.Component<AreaInfomationProps, {}> {
    public render(): React.ReactNode {
        return (
            <SettingLead>
                <BackBottunParts route={this.props.route} />
                <p>現在設定されている{this.props.label}}</p>
                <SettingLeadCurrentText>未設定</SettingLeadCurrentText>
                <SetLocationParts />
            </SettingLead>
        );
    }
}

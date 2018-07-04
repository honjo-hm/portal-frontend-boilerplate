/**
 * 個人設定ページ -  都道府県選択情報
 */
import React from "react";

import { SettingLead, SettingLeadCurrentText } from "../../../style/setting/common";

import { BackBottunParts } from "../../parts/setting/BackButtonParts";

export interface RegionInfomationProps {
    route: string;
    label: string;
    params: any;
}

/**
 * module
 */
export default class SelectedInfomationWidget extends React.Component<RegionInfomationProps, {}> {
    /**
     * constructor
     *
     * @param props 
     */
    constructor(props: RegionInfomationProps) {
        super(props);
    }

    /**
     * render
     */
    public render(): React.ReactNode {
        return (
            <SettingLead>
                <BackBottunParts route={this.props.route} params={this.props.params} />
                <SettingLeadCurrentText>{this.props.label}</SettingLeadCurrentText>
            </SettingLead>
        );
    }
}

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
interface AreaInfomationProps {
    information: InformationProps;
}

interface InformationProps {
    route: "settingServices",
    discription: "地域",
    label: "未設定",
    useLocation: "1",
}

/**
 * module
 */
export default class AreaInfomationWidget extends React.Component<AreaInfomationProps, {}> {
    /**
     * constructor
     *
     * @param props 
     */
    constructor(props: AreaInfomationProps) {
        super(props);
    }

    /**
     * render
     */
    public render(): React.ReactNode {
        return (
            <SettingLead>
                <BackBottunParts route={this.props.information.route} params={{}} />
                <p>現在設定されている{this.props.information.discription}</p>
                <SettingLeadCurrentText>{this.props.information.label}</SettingLeadCurrentText>
                <SetLocationParts />
            </SettingLead>
        );
    }
}

/**
 * 個人設定ページ - 戻るボタン
 */
import React from "react";
import styled from 'styled-components'

import { SettingBackBottunParts } from "../../parts/setting/SettingBackButtonParts";
import { SettingLocationParts } from "../../parts/setting/SettingLocationParts";

export interface AreaInfomationProps {
    route: string;
    label: string;
}

/**
 * style
 */
const SettingLead = styled.div`
    margin: 10px 0;
    text-align: center;
`;

const SettingLeadCurrentText = styled.p`
    margin-top: 5px;
    font-weight: 700;
    font-size: 15px;
`;

/**
 * module
 */
export default class AreaInfomationWidget extends React.Component<AreaInfomationProps, {}> {
    public render(): React.ReactNode {
        return (
            <SettingLead>
                <SettingBackBottunParts route={this.props.route} />
                <p>現在設定されている{this.props.label}}</p>
                <SettingLeadCurrentText>未設定</SettingLeadCurrentText>
                <SettingLocationParts />
            </SettingLead>
        );
    }
}

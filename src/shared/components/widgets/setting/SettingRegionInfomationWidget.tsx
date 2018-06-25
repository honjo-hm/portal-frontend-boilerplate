/**
 * 個人設定ページ -  都道府県選択情報
 */
import React from "react";
import styled from 'styled-components'

import { SettingBackBottunParts } from "../../parts/setting/SettingBackButtonParts";
import SettingRegionListWidget from "./SettingRegionListWidget";

export interface SettingAreaInfomationProps {
    route: string;
    code: string;
    // params: {[key: string]: string}[];
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
export default class SettingRegionInfomationWidget extends React.Component<SettingAreaInfomationProps, {}> {
    public render(): React.ReactNode {
        return (
            <SettingLead>
                <SettingBackBottunParts route={this.props.route} />
                <SettingLeadCurrentText>{SettingRegionListWidget.AREA_LIST[this.props.code]}</SettingLeadCurrentText>
            </SettingLead>
        );
    }
}

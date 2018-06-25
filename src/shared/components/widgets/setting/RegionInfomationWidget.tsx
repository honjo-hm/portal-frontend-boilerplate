/**
 * 個人設定ページ -  都道府県選択情報
 */
import React from "react";
import styled from 'styled-components'

import { BackBottunParts } from "../../parts/setting/BackButtonParts";
import SettingRegionListWidget from "./RegionListWidget";

export interface RegionInfomationProps {
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

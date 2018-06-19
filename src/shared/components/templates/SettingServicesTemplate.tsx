/**
 * 個人設定ページ
 */
import React from "react";
import styled from 'styled-components'

import SettingDescriptionWidget from "../widgets/setting/SettingDescriptionWidget";
import SettingServiceCommonWidget from "../widgets/setting/SettingServiceCommonWidget";
import SettingServiceTrainWidget from "../widgets/setting/SettingServiceTrainWidget";
import SettingServiceStaticWidget from "../widgets/setting/SettingServiceStaticWidget";
import SubPageDrawerBottunWidget from "../widgets/setting/SubPageDrawerBottunWidget";
import SubPageDrawerCoverWidget from "../widgets/setting/SubPageDrawerCoverWidget";
import SubPageDrawerWidget from "../widgets/setting/SubPageDrawerWidget";
import SubPageHeaderWidget from "../widgets/setting/SubPageHeaderWidget";



/**
 * props
 */
export interface SettingsProps {
    title: string;
}

const Setting = styled.div`
    margin: 10px 0 65px;
`;

/**
 * module
 */
export default class SettingServicesTemplate extends React.Component<SettingsProps> {

    constructor (props: SettingsProps) {
        super(props);
    }

    public render(): React.ReactNode {
        return (
            <div>
                <div>
                    <SubPageHeaderWidget title={this.props.title}/>
                    <Setting>
                        <SettingDescriptionWidget />
                        <SettingServiceCommonWidget title="天気設定" route="settingWeatherRegion"/>
                        <SettingServiceCommonWidget title="占い設定" route="index"/>
                        <SettingServiceTrainWidget />
                        <SettingServiceStaticWidget />
                    </Setting>
                </div>
                {/* ↓↓サイドメニュー↓↓ */}
                <SubPageDrawerWidget />
                <SubPageDrawerCoverWidget />
                <SubPageDrawerBottunWidget />
                {/* ↑↑サイドメニュー↑↑ */}
            </div>
        );
    }
}

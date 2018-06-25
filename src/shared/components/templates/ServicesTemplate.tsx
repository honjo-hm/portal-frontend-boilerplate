/**
 * 個人設定ページ
 */
import React from "react";

import { Setting } from "../../style/setting/common";

import ServiceCommonWidget from "../widgets/setting/ServiceCommonWidget";
import ServiceTrainWidget from "../widgets/setting/ServiceTrainWidget";
import ServiceStaticWidget from "../widgets/setting/ServiceStaticWidget";
import SettingDescriptionWidget from "../widgets/setting/SettingDescriptionWidget";
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

/**
 * module
 */
export default class ServicesTemplate extends React.Component<SettingsProps> {
    public render(): React.ReactNode {
        return (
            <div>
                <div>
                    <SubPageHeaderWidget title={this.props.title}/>
                    <Setting>
                        <SettingDescriptionWidget />
                        <ServiceCommonWidget title="天気設定" route="settingWeatherRegion"/>
                        <ServiceCommonWidget title="占い設定" route="index"/>
                        <ServiceTrainWidget />
                        <ServiceStaticWidget />
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

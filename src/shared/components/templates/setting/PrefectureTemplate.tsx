/**
 * 個人設定ページ - 都道府県設定
 */
import React from "react";

import { Setting } from "../../../style/setting/common";

import PrefectureListWidget from "../../widgets/setting/PrefectureListWidget";
import RegionInfomationWidget from "../../widgets/setting/RegionInfomationWidget";
import SubPageDrawerBottunWidget from "../../widgets/setting/SubPageDrawerBottunWidget";
import SubPageDrawerCoverWidget from "../../widgets/setting/SubPageDrawerCoverWidget";
import SubPageDrawerWidget from "../../widgets/setting/SubPageDrawerWidget";
import SubPageHeaderWidget from "../../widgets/setting/SubPageHeaderWidget";

/**
 * props
 */
export interface SettingsProps {
    title: string;
}

/**
 * module
 */
export default class PrefectureTemplate extends React.Component<SettingsProps> {
    public render(): React.ReactNode {
        return (
            <div>
                <div>
                    <SubPageHeaderWidget title={this.props.title}/>
                    <Setting>
                        <RegionInfomationWidget route="settingWeatherRegion" code="01" />
                        <PrefectureListWidget route="settingWeatherCity" code="01" />
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

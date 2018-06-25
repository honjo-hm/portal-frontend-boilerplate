/**
 * 個人設定ページ - 都道府県設定
 */
import React from "react";
import styled from 'styled-components'

import PrefectureListWidget from "../widgets/setting/PrefectureListWidget";
import RegionInfomationWidget from "../widgets/setting/RegionInfomationWidget";
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
 * style
 */
const Setting = styled.div`
    margin: 10px 0 65px;

    & a {
        font-size: 15px;
    }
`;

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

/**
 * 個人設定ページ
 */
import React from "react";
import styled from 'styled-components'

import AreaInfomationWidget from "../widgets/setting/AreaInfomationWidget";
import RegionListWidget from "../widgets/setting/RegionListWidget";
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
export default class RegionTemplate extends React.Component<SettingsProps> {
    public render(): React.ReactNode {
        return (
            <div>
                <div>
                    <SubPageHeaderWidget title={this.props.title}/>
                    <Setting>
                        <AreaInfomationWidget route="settingServices" label="地域" />
                        <RegionListWidget route="settingWeatherPrefecture" />
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

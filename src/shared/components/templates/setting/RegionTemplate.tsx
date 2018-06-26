/**
 * 個人設定ページ - 地域設定
 */
import React from "react";

import { Setting } from "../../../style/setting/common";

import AreaInfomationWidget from "../../widgets/setting/AreaInfomationWidget";
import RegionListWidget from "../../widgets/setting/RegionListWidget";
import SubPageDrawerBottunWidget from "../../widgets/setting/SubPageDrawerBottunWidget";
import SubPageDrawerCoverWidget from "../../widgets/setting/SubPageDrawerCoverWidget";
import SubPageDrawerWidget from "../../widgets/setting/SubPageDrawerWidget";
import SubPageHeaderWidget from "../../widgets/setting/SubPageHeaderWidget";

/**
 * props
 */
interface RegionProps {
    title: string;
}

/**
 * state
 */
interface RegionState {
    label: string;
}

/**
 * module
 */
export default class RegionTemplate extends React.Component<RegionProps, RegionState> {
    constructor(props) {
        super(props);
        this.state = {
            label: "未設定"
        };
    }

    public render(): React.ReactNode {
        const information: any = {
            route: "settingServices",
            discription: "地域",
            label: this.state.label,
        }; 

        return (
            <div>
                <div>
                    <SubPageHeaderWidget title={this.props.title}/>
                    <Setting>
                        <AreaInfomationWidget information={information} />
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

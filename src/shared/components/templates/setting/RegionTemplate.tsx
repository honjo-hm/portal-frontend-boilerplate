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
    /**
     * constructor
     *
     * @param props 
     */
    constructor(props: RegionProps) {
        super(props);
        this.state = {
            label: "未設定"
        };
    }

    /**
     * render
     */
    public render(): React.ReactNode {
        // 表示情報
        const information: any = {
            route: "settingServices",
            discription: "地域",
            label: this.state.label,
        }; 

        return (
            <div>
                <div>
                    {/* ヘッダー */}
                    <SubPageHeaderWidget title={this.props.title}/>
                    <Setting>
                        {/* 設定状況 */}
                        <AreaInfomationWidget information={information} />
                        {/* 地域リスト */}
                        <RegionListWidget route="settingWeatherPrefecture" />
                    </Setting>
                </div>
                {/* ↓↓サイドメニュー↓↓ */}
                <SubPageDrawerWidget showSidemenu={false} />
                <SubPageDrawerCoverWidget showSidemenu={false} onClick="" />
                <SubPageDrawerBottunWidget onClick="" />
                {/* ↑↑サイドメニュー↑↑ */}
            </div>
        );
    }
}

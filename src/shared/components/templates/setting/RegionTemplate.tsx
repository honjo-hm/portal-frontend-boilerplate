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
interface RegionStates {
    label: string;
    showSidemenu: boolean;
}


/**
 * module
 */
export default class RegionTemplate extends React.Component<RegionProps, RegionStates> {
    /**
     * constructor
     *
     * @param props 
     */
    constructor(props: RegionProps) {
        super(props);
        this.state = {
            label: "未設定",
            showSidemenu: false
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
                <SubPageDrawerWidget showSidemenu={this.state.showSidemenu} />
                <SubPageDrawerCoverWidget showSidemenu={this.state.showSidemenu} onClick={e => this.onHiddenidemenu(e)} />
                <SubPageDrawerBottunWidget onClick={e => this.onShowSidemenu(e)} />
                {/* ↑↑サイドメニュー↑↑ */}
            </div>
        );
    }

    /**
     * サイドメニュー表示
     *
     * @param e
     */
    private onShowSidemenu(e) {
        document.body.setAttribute("style", "overflow: hidden; height: 100%; width: 100%;");
        this.setState({showSidemenu: true});
    }

    /**
     * サイドメニュー非表示
     *
     * @param e
     */
    private onHiddenidemenu(e) {
        document.body.removeAttribute("style");
        this.setState({showSidemenu: false});
    }
}

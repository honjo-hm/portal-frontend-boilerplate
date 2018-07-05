/**
 * 個人設定ページ - 天気設定(市区町村)
 */
import React from "react";

import { Setting } from "../../../style/setting/common";

import CityListWidget from "../../widgets/setting/CityListWidget";
import SelectedInfomationWidget from "../../widgets/setting/SelectedInfomationWidget";
import SubPageDrawerBottunWidget from "../../widgets/setting/SubPageDrawerBottunWidget";
import SubPageDrawerCoverWidget from "../../widgets/setting/SubPageDrawerCoverWidget";
import SubPageDrawerWidget from "../../widgets/setting/SubPageDrawerWidget";
import SubPageHeaderWidget from "../../widgets/setting/SubPageHeaderWidget";

/**
 * props
 */
interface WeatherProps {
    title: string;
}

/**
 * state
 */
interface WeatherStates {
    showSidemenu: boolean;
}

/**
 * module
 */
export default class WeatherTemplate extends React.Component<WeatherProps, WeatherStates> {
    /**
     * constructor
     *
     * @param props
     */
    constructor(props: WeatherProps) {
        super(props);
        this.state = {
            showSidemenu: false
        };
    }

    /**
     * render
     */
    public render(): React.ReactNode {
        // TODO: 仮で値を設定しておく
        const regionCode = "02";
        const informationLabel = "埼玉";
        const backParams = {
            route: "settingWeatherRegion",
            params: {regionCode: regionCode}
        };

        return (
            <div>
                <div>
                    {/* ヘッダー */}
                    <SubPageHeaderWidget title={this.props.title}/>
                    <Setting>
                        {/* 設定状況 */}
                        <SelectedInfomationWidget label={informationLabel} route="settingWeatherPrefecture" params={backParams} />
                        {/* 市区町村リスト */}
                        <CityListWidget  />
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

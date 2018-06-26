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
 * module
 */
export default class WeatherTemplate extends React.Component<WeatherProps, {}> {
    /**
     * constructor
     *
     * @param props
     */
    constructor(props: WeatherProps) {
        super(props);
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
                <SubPageDrawerWidget showSidemenu={false} />
                <SubPageDrawerCoverWidget showSidemenu={false} onClick="" />
                <SubPageDrawerBottunWidget onClick=""/>
                {/* ↑↑サイドメニュー↑↑ */}
            </div>
        );
    }
}

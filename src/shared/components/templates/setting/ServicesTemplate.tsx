/**
 * 個人設定ページ
 */
import React from "react";

import { Setting } from "../../../style/setting/common";

import ServiceCommonWidget from "../../widgets/setting/ServiceCommonWidget";
import ServiceTrainWidget from "../../widgets/setting/ServiceTrainWidget";
import ServiceStaticWidget from "../../widgets/setting/ServiceStaticWidget";
import SettingDescriptionWidget from "../../widgets/setting/SettingDescriptionWidget";
import SubPageDrawerBottunWidget from "../../widgets/setting/SubPageDrawerBottunWidget";
import SubPageDrawerCoverWidget from "../../widgets/setting/SubPageDrawerCoverWidget";
import SubPageDrawerWidget from "../../widgets/setting/SubPageDrawerWidget";
import SubPageHeaderWidget from "../../widgets/setting/SubPageHeaderWidget";


/**
 * 初期値
 */
const weather: SettingState = {label: "未設定"};
const fortune: SettingState = {label: "未設定"};
const trains: SettingState[] = [
    {label: "未設定"},
    {label: "未設定"},
    {label: "未設定"},
];

/**
 * props
 */
interface ServicesProps {
   title: string;
}

/**
 * state
 */
interface SettingStates {
    weather: SettingState;
    fortune: SettingState;
    trains: SettingState[];
}

interface SettingState {
    label: string;
}

/**
 * module
 */
export default class ServicesTemplate extends React.Component<ServicesProps, SettingStates> {
    constructor(props) {
        super(props);
        this.state = {
            weather,
            fortune,
            trains,
        };
    }

    // 路線クリア
    private onClearTrains(e)
    {
        // TODO: cookie削除
        const newTrains: any = this.state.trains.map((train) => {
            train.label = "未設定";
            return train;
        });

        this.setState({trains: newTrains});
    }

    public render(): React.ReactNode {

        // 設定値
        const weatherInfo: {[key: string]: string} = {prefix: "", label: this.state.weather.label, route:"settingWeatherRegion"};
        const fortuneInfo: {[key: string]: string} = {prefix: "", label: this.state.fortune.label, route:"index"};
        const trainInfos: {[key: string]: string}[] = this.state.trains.map((train, index) => {
            return {prefix: "路線" + (index + 1) + "  ", label: train.label, route:"index"};
        });

        return (
            <div>
                <div>
                    <SubPageHeaderWidget title={this.props.title}/>
                    <Setting>
                        <SettingDescriptionWidget />
                        <ServiceCommonWidget title="天気設定" route="settingWeatherRegion" links={weatherInfo} />
                        <ServiceCommonWidget title="占い設定" route="index" links={fortuneInfo} />
                        <ServiceTrainWidget title="路線設定" links={trainInfos} onClick={e => this.onClearTrains(e)} />
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

/**
 * 個人設定ページ
 */
import React from "react";

import styled from 'styled-components'

import { Setting } from "../../../style/setting/common";

import ServiceCommonWidget from "../../widgets/setting/ServiceCommonWidget";
import ServiceTrainWidget from "../../widgets/setting/ServiceTrainWidget";
import ServiceStaticWidget from "../../widgets/setting/ServiceStaticWidget";
import SettingDescriptionWidget from "../../widgets/setting/SettingDescriptionWidget";
import SubPageDrawerBottunWidget from "../../widgets/setting/SubPageDrawerBottunWidget";
import SubPageDrawerCoverWidget from "../../widgets/setting/SubPageDrawerCoverWidget";
import SubPageDrawerWidget from "../../widgets/setting/SubPageDrawerWidget";
import SubPageHeaderWidget from "../../widgets/setting/SubPageHeaderWidget";

const Contens = styled.div`
overflow: hidden;
min-height: 100%;
position: relative;
    &.on {
        overflow: hidden;
        min-height: 100%;
        position: relative;
    }
`;

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
    showSidemenu: boolean;
}

interface SettingState {
    label: string;
}

/**
 * module
 */
export default class ServicesTemplate extends React.Component<ServicesProps, SettingStates> {
    /**
     * construct
     * 
     * @param props
     */
    constructor(props: ServicesProps) {
        super(props);
        // state初期化
        this.state = {
            weather,
            fortune,
            trains,
            showSidemenu: false
        };
    }

    /**
     * 路線クリア処理
     *
     * @param e
     */
    private onClearTrains(e)
    {
        // TODO: cookie削除
        console.log("路線くりあ！");
        const newTrains: any = this.state.trains.map((train) => {
            train.label = "未設定";
            return train;
        });

        this.setState({trains: newTrains});
    }

    /**
     * render
     */
    public render(): React.ReactNode {

        // 各サービスの表示内容
        const weatherInfo: {[key: string]: string} = {
            prefix: "",
            label: this.state.weather.label,
            route:"settingWeatherRegion"
        };
        const fortuneInfo: {[key: string]: string} = {
            prefix: "",
            label: this.state.fortune.label,
            route:"index"
        };
        const trainInfo: {[key: string]: string}[] = this.state.trains.map((train, index) => {
            return {
                prefix: `路線${index + 1}  `,
                label: train.label,
                route:"index"
            };
        });

        // サイドメニュー表示時のスタイル
        const showSidemenuStyle: any = {
            overflow: "hidden",
            "min-height": "100%",
            position: "relative"

        }

        return (
            <div>
                <Contens style={this.state.showSidemenu ? showSidemenuStyle : {}}>
                    {/* ヘッダー */}
                    <SubPageHeaderWidget title={this.props.title}/>
                    <Setting>
                        {/* 説明分 */}
                        <SettingDescriptionWidget />
                        {/* 天気設定 */}
                        <ServiceCommonWidget title="天気設定" route="settingWeatherRegion" links={weatherInfo} />
                        {/* 占い設定 */}
                        <ServiceCommonWidget title="占い設定" route="index" links={fortuneInfo} />
                        {/* 路線設定 */}
                        <ServiceTrainWidget title="路線設定" links={trainInfo} onClick={e => this.onClearTrains(e)} />
                        {/* その他設定 */}
                        <ServiceStaticWidget />
                    </Setting>
                </Contens>
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

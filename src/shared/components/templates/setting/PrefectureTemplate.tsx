/**
 * 個人設定ページ - 都道府県設定
 */
import React from "react";

import { Setting } from "../../../style/setting/common";

import PrefectureListWidget from "../../widgets/setting/PrefectureListWidget";
import SelectedInfomationWidget from "../../widgets/setting/SelectedInfomationWidget";
import SubPageDrawerBottunWidget from "../../widgets/setting/SubPageDrawerBottunWidget";
import SubPageDrawerCoverWidget from "../../widgets/setting/SubPageDrawerCoverWidget";
import SubPageDrawerWidget from "../../widgets/setting/SubPageDrawerWidget";
import SubPageHeaderWidget from "../../widgets/setting/SubPageHeaderWidget";
import { REGION_LIST } from "../../widgets/setting/RegionListWidget";

/**
 * props
 */
interface PrefectureProps {
    title: string;
}

/**
 * module
 */
export default class PrefectureTemplate extends React.Component<PrefectureProps, {}> {
    /**
     * constructor
     *
     * @param props
     */
    constructor(props: PrefectureProps) {
        super(props);
    }

    /**
     * render
     */
    public render(): React.ReactNode {
        // TODO: 仮で値を設定しておく
        const regionCode = "02";
        return (
            <div>
                <div>
                    {/* ヘッダー */}
                    <SubPageHeaderWidget title={this.props.title}/>
                    <Setting>
                        {/* 設定状況 */}
                        <SelectedInfomationWidget label={REGION_LIST[regionCode]} route="settingWeatherRegion" params={{}} />
                        {/* 都道府県リスト */}
                        <PrefectureListWidget route="settingWeatherCity" code={regionCode} />
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

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
export default class PrefectureTemplate extends React.Component<PrefectureProps, any> {
    constructor(props, context) {
        super(props);
    }

    public render(): React.ReactNode {

        const regionCode = "02";
        return (
            <div>
                <div>
                    <SubPageHeaderWidget title={this.props.title}/>
                    <Setting>
                        <SelectedInfomationWidget label={REGION_LIST[regionCode]} route="settingWeatherRegion" params={{}} />
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

/**
 * 個人設定ページ - 都道府県い道府県ちラン
 */
import React from "react";

import { SettingList } from "../../../style/setting/common";

import { AreaPartsA } from "../../parts/setting/AreaPartsA";

/**
 * props
 */
export interface PrefectureListProps {
    route: string;
    code: string
}

const PREFECTURE = {
    "36": "徳島県",
    "37": "香川県",
    "38": "愛媛県",
    "39": "高知県",
}

/**
 * module
 */
export default class PrefectureListWidget extends React.Component<PrefectureListProps, {}> {
    public render(): React.ReactNode {
        let regions = [
            {name: PREFECTURE["36"], code: "36"},
            {name: PREFECTURE["37"], code: "37"},
            {name: PREFECTURE["38"], code: "38"},
            {name: PREFECTURE["39"], code: "39"}
        ];
        return (
            <SettingList>
                {
                    regions.map((region) => {
                        return <AreaPartsA route={this.props.route} region={region} prefecture="36" />
                    })
                }
            </SettingList>
        );
    }
}

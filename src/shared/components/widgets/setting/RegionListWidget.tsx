/**
 * 個人設定ページ -  地域一覧
 */
import React from "react";

import { SettingList } from "../../../style/setting/common";

import { AreaParts } from "../../parts/setting/AreaParts";

/**
 * props
 */
export interface RegionListProps {
    route: string;
}

/**
 * module
 */
export default class RegionListWidget extends React.Component<RegionListProps, {}> {

    // 地域データ
    static readonly AREAS: {[key: string]: string;}[]  = [
        {name: "北海道・東北", code: "01"},
        {name: "関東", code: "02"},
        {name: "甲信越・北陸", code: "03"},
        {name: "東海", code: "04"},
        {name: "近畿", code: "05"},
        {name: "中国", code: "06"},
        {name: "四国", code: "07"},
        {name: "九州・沖縄", code: "08"}
    ];

    static readonly AREA_LIST: {[key: string]: string;} = {
        "01": "北海道",
        "02": "関東",
        "03": "甲信越・北陸",
        "04": "東海",
        "05": "近畿",
        "06": "中国",
        "07": "四国",
        "08": "九州・沖縄"
    };

    public render(): React.ReactNode {
        return (
            <SettingList>
                {
                    RegionListWidget.AREAS.map((region) => {
                        let route: string = this.props.route;
                        return <AreaParts route={route} region={region} />
                    })
                }
            </SettingList>
        );
    }
}

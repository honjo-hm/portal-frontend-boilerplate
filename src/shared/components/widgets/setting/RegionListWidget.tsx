/**
 * 個人設定ページ -  地域一覧
 */
import React from "react";

import { SettingList } from "../../../style/setting/common";

import { AreaSelectButtonParts } from "../../parts/setting/AreaSelectButtonParts";

// 地域情報
export const REGION_LIST: {[key: string]: string;} = {
    "01": "北海道",
    "02": "関東",
    "03": "甲信越・北陸",
    "04": "東海",
    "05": "近畿",
    "06": "中国",
    "07": "四国",
    "08": "九州・沖縄"
};

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
    public render(): React.ReactNode {
        const route: string = this.props.route;
        
        let list: any = [];
        for (let key in REGION_LIST) {
            let area = {
                name: REGION_LIST[key], 
                params: {
                    regionCode: key
                }
            }
            list.push(<AreaSelectButtonParts route={route} area={area} />);
        }

        return (
            <SettingList>
                {list}
            </SettingList>
        );
    }
}

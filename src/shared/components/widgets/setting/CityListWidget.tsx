/**
 * 個人設定ページ - 都道府県い道府県ちラン
 */
import React from "react";

import { SettingList } from "../../../style/setting/common";

import { AreaSetButtonParts } from "../../parts/setting/AreaSetButtonParts";


/**
 * module
 */
export default class CityListWidget extends React.Component<{}, {}> {
    /**
     * 市区町村リスト取得
     */
    private getCities() {
        return this.callPref();
    }

    /**
     * TODO: 仮データ
     */
    private callPref() {
        return {
            "37201": "高松市",
            "37202": "丸亀市",
            "37203": "坂出市",
        };
    }

    /**
     * render
     */
    public render(): React.ReactNode {
        const cities = this.getCities();
        let list: any = [];

        for (let key in cities) {
            console.log(key);
            let area = {name: cities[key], code: key}
            list.push(<AreaSetButtonParts area={area} />);
        }
    
        return (
            <SettingList>
                {list}
            </SettingList>
        );
    }
}

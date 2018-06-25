/**
 * 個人設定ページ - 都道府県い道府県ちラン
 */
import React from "react";

import { SettingList } from "../../../style/setting/common";

import { AreaPartsB } from "../../parts/setting/AreaPartsB";

const CITY = {
    "37201": "高松市",
    "37202": "丸亀市",
    "37203": "坂出市",
}

/**
 * module
 */
export default class CityListWidget extends React.Component<{}, {}> {
    public render(): React.ReactNode {
        let cities = [
            {name: CITY["37201"], code: "37201"},
            {name: CITY["37202"], code: "37202"},
            {name: CITY["37203"], code: "37203"},
        ];
        return (
            <SettingList>
                {
                    cities.map((city) => {
                        return <AreaPartsB name={city.name} />
                    })
                }
            </SettingList>
        );
    }
}

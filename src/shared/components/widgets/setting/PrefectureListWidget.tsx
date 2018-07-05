/**
 * 個人設定ページ - 都道府県い道府県ちラン
 */
import React from "react";

import { SettingList } from "../../../style/setting/common";

import { AreaSelectButtonParts } from "../../parts/setting/AreaSelectButtonParts";


/**
 * props
 */
export interface PrefectureListProps {
    route: string;
    code: string
}

/**
 * module
 */
export default class PrefectureListWidget extends React.Component<PrefectureListProps, {}> {
    /**
     * 都道府県リスト取得
     */
    private getPrefectures() {
        return this.callPref();
    }

    /**
     * TODO: 仮データ
     */
    private callPref() {
        return {
            "36": "徳島県",
            "37": "香川県",
            "38": "愛媛県",
            "39": "高知県",
        };
    }

    /**
     * render
     */
    public render(): React.ReactNode {
        const route: string = this.props.route;
        const regionCode = this.props.code;
        const prefectures = this.getPrefectures();
        let list: any = [];

        for (let key in prefectures) {
            let area = {
                name: prefectures[key],
                params: {
                    regionCode: regionCode,
                    prefCode: key
                }
            };
            list.push(<AreaSelectButtonParts key={key} route={route} area={area} />);
        }

        return (
            <SettingList>
                {list}
            </SettingList>
        );
    }
}

/**
 * 個人設定ページ - サービス設定(路線)
 */
import React from "react";
import styled from 'styled-components'

import { SettingServiceListTitleParts } from "../../parts/setting/SettingServiceListTitleParts";
import { SettingServiceLinkTrainParts } from "../../parts/setting/SettingServiceLinkTrainParts";
import { SettingClearBottunTrainParts } from "../../parts/setting/SettingClearButtonTrainParts";

/**
 * style
 */
const SettingContents = styled.section`
    margin: 10px 0 20px;
`;

const SettingList = styled.ul`
    border-top: none;
`;

/**
 * module
 */
export default class ServiceTrainWidget extends React.Component<{}, {}> {

    static readonly TRAIN_NUM: number = 3;

    public render(): React.ReactNode {
        return (
            <SettingContents>
                <SettingServiceListTitleParts title="路線設定"/>
                <SettingList>
                    <SettingServiceLinkTrainParts label="路線1&nbsp;&nbsp;"/>
                    <SettingServiceLinkTrainParts label="路線2&nbsp;&nbsp;"/>
                    <SettingServiceLinkTrainParts label="路線3&nbsp;&nbsp;"/>
                </SettingList>
                <SettingClearBottunTrainParts />
            </SettingContents>
        );
    }
}

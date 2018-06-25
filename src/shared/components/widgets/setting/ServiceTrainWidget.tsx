/**
 * 個人設定ページ - サービス設定(路線)
 */
import React from "react";
import styled from 'styled-components'

import { ServiceListTitleParts } from "../../parts/setting/ServiceListTitleParts";
import { ServiceLinkTrainParts } from "../../parts/setting/ServiceLinkTrainParts";
import { ClearButtonTrainParts } from "../../parts/setting/ClearButtonTrainParts";

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

    public render(): React.ReactNode {
        return (
            <SettingContents>
                <ServiceListTitleParts title="路線設定"/>
                <SettingList>
                    <ServiceLinkTrainParts label="路線1&nbsp;&nbsp;"/>
                    <ServiceLinkTrainParts label="路線2&nbsp;&nbsp;"/>
                    <ServiceLinkTrainParts label="路線3&nbsp;&nbsp;"/>
                </SettingList>
                <ClearButtonTrainParts />
            </SettingContents>
        );
    }
}

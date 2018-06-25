/**
 * 個人設定ページ - サービス設定(天気・占い)
 */
import React from "react";
import styled from 'styled-components'

import { SettingServiceListTitleParts } from "../../parts/setting/SettingServiceListTitleParts";
import { SettingServiceLinkCommonParts } from "../../parts/setting/SettingServiceLinkCommonParts";

/**
 * props
 */
export interface ServiceCommonProps {
    title: string;
    route: string;
}

/**
 * style
 */
const SettingContents = styled.section`
    // TODO: 1番目のみ適応させる
    border-top: "1px solid #e9e9e9";
    margin: 10px 0 20px;
`;

/**
 * module
 */
export default class ServiceCommonWidget extends React.Component<ServiceCommonProps, {}> {
    public render(): React.ReactNode {
        return (
            <SettingContents>
                <SettingServiceListTitleParts title={this.props.title} />
                <SettingServiceLinkCommonParts route={this.props.route}/>
            </SettingContents>
        );
    }
}

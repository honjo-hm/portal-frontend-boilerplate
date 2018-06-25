/**
 * 個人設定ページ - サービス設定(天気・占い)
 */
import React from "react";
import styled from 'styled-components'

import { ServiceListTitleParts } from "../../parts/setting/ServiceListTitleParts";
import { ServiceLinkCommonParts } from "../../parts/setting/ServiceLinkCommonParts";

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
                <ServiceListTitleParts title={this.props.title} />
                <ServiceLinkCommonParts route={this.props.route}/>
            </SettingContents>
        );
    }
}

/**
 * 個人設定ページ - サービス設定(路線)
 */
import React from "react";
import styled from 'styled-components'

import { ServiceLinkCommonParts } from "../../parts/setting/ServiceLinkCommonParts";
import { ServiceListTitleParts } from "../../parts/setting/ServiceListTitleParts";
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
 * props
 */
export interface ServiceTrainProps {
    title: string;
    links: any;
    onClick: any;
}

/**
 * module
 */
export default class ServiceTrainWidget extends React.Component<ServiceTrainProps, {}> {
    /**
     * constructor
     *
     * @param props
     */
    constructor(props: ServiceTrainProps) {
        super(props);
    }

    /**
     * render
     */
    public render(): React.ReactNode {
        return (
            <SettingContents>
                <ServiceListTitleParts title={this.props.title} />
                {
                    this.props.links.map((link) => {
                        return <ServiceLinkCommonParts links={link}/>
                    })
                }
                {/* クリアボタン */}
                <ClearButtonTrainParts onClick={this.props.onClick} />
            </SettingContents>
        );
    }
}

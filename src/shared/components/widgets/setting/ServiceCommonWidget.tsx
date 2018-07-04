/**
 * 個人設定ページ - サービス設定(天気・占い)
 */
import React from "react";

import { SettingContents } from "../../../style/setting/common";

import { ServiceListTitleParts } from "../../parts/setting/ServiceListTitleParts";
import { ServiceLinkCommonParts } from "../../parts/setting/ServiceLinkCommonParts";

/**
 * props
 */
export interface ServiceCommonProps {
    title: string;
    route: string;
    links: any;
}

/**
 * module
 */
export default class ServiceCommonWidget extends React.Component<ServiceCommonProps, {}> {
    /**
     * constructor
     *
     * @param props
     */
    constructor(props: ServiceCommonProps) {
        super(props);
    }

    /**
     * render
     */
    public render(): React.ReactNode {
        return (
            <SettingContents>
                <ServiceListTitleParts title={this.props.title} />
                <ServiceLinkCommonParts route={this.props.links.route} links={this.props.links}/>
            </SettingContents>
        );
    }
}

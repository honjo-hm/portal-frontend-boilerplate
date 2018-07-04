/**
 * 個人設定ページ - サービス設定(その他)
 */
import React from "react";

import { SettingContents } from "../../../style/setting/common";

import { ServiceListTitleParts } from "../../parts/setting/ServiceListTitleParts";
import { ServiceLinkStaticParts } from "../../parts/setting/ServiceLinkStaticParts";

/**
 * module
 */
export default class ServiceStaticWidget extends React.Component<{}, {}> {
    /**
     * render
     */
    public render(): React.ReactNode {
        return (
            <SettingContents>
                <ServiceListTitleParts title="その他設定" />
                <ServiceLinkStaticParts label="入力補助・検索履歴設定" route="index"/>
                <ServiceLinkStaticParts label="通知設定方法" route="settingSearch"/>
                <ServiceLinkStaticParts label="マイニュース設定" route="index"/>
            </SettingContents>
        );
    }
}

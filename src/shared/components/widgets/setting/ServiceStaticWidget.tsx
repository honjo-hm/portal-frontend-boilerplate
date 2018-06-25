/**
 * 個人設定ページ - サービス設定(その他)
 */
import React from "react";
import styled from 'styled-components'

import { SettingServiceListTitleParts } from "../../parts/setting/SettingServiceListTitleParts";
import { SettingServiceLinkStaticParts } from "../../parts/setting/SettingServiceLinkStaticParts";

/**
 * style
 */
const SettingContents = styled.section`
    border-top: "1px solid #e9e9e9";
    margin: 10px 0 20px;
`;

/**
 * module
 */
export default class ServiceStaticWidget extends React.Component<{}, {}> {
    public render(): React.ReactNode {
        return (
            <SettingContents>
                <SettingServiceListTitleParts title="その他設定" />
                <SettingServiceLinkStaticParts label="入力補助・検索履歴設定" url="index"/>
                <SettingServiceLinkStaticParts label="通知設定方法" url="index"/>
                <SettingServiceLinkStaticParts label="マイニュース設定" url="index" link="https://article.auone.jp/keyword/setting"/>
            </SettingContents>
        );
    }
}

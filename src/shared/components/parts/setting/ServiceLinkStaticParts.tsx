/**
 * 個人設定ページ - 設定変更ページリンク(その他)
 */
import React from "react";

import { SettingLinkText, ServiceLinkAncher } from "../../../style/setting/parts";

//@ts-ignore
import { Link } from "../../../routes/index";


export const ServiceLinkStaticParts = (props) => (
    <SettingLinkText>
        {(() => {
            if (props.link) {
                // 外部サイトへのリンク
                return (
                    <ServiceLinkAncher href={props.link}>
                        <span>{props.label}</span>
                    </ServiceLinkAncher>
                );

            } else {
                return (
                    <Link route={props.url}>
                        <ServiceLinkAncher>
                            <span>{props.label}</span>
                        </ServiceLinkAncher>
                    </Link>
                );
            }
        })()}
    </SettingLinkText>
);

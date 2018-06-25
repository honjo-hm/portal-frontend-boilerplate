/**
 * 個人設定ページ - 設定変更ページリンク(路線)
 */
import React from "react";

import { SettingListItems, ServiceLinkAncher } from "../../../style/setting/parts";

//@ts-ignore
import { Link } from "../../../routes/index";

/**
 * parts
 */
export const ServiceLinkTrainParts = (props) => (
    <SettingListItems>
            <Link route="index">
                <ServiceLinkAncher>
                    {props.label}<span>未設定</span>
                </ServiceLinkAncher>
            </Link>
    </SettingListItems>
);

/**
 * 個人設定ページ - 説明文
 */
import React from "react";

import { SettingDescriptionParts } from "../../parts/setting/SettingDescriptionParts";

/**
 * module
 */
export default class SettingDescriptionWidget extends React.Component<{}, {}> {
    /**
     * render
     */
    public render(): React.ReactNode {
        return (
            <SettingDescriptionParts />
        );
    }
}

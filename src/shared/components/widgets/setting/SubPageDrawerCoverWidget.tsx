/**
 * 2階層以下のサイドメニュー暗転部
 */
import React from "react";

import { SubPageDrawerCoverParts } from "../../parts/setting/SubPageDrawerCoverParts";

/**
 * module
 */
export default class SubPageDrawerCoverWidget extends React.Component<{},{}> {
    /**
     * render
     */
    public render(): React.ReactNode {
        return (
            <SubPageDrawerCoverParts />
        );
    }
}

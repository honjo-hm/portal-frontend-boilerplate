/**
 * 2階層以下のサイドメニューボタン
 */
import React from "react";

import { SubPageDraewrBottunParts } from "../../parts/setting/SubPageDraewrBottunParts";

/**
 * module
 */
export default class SubPageDrawerBottunWidget extends React.Component<{}, {}> {

    public render(): React.ReactNode {
        return (
            <SubPageDraewrBottunParts />
        );
    }
}

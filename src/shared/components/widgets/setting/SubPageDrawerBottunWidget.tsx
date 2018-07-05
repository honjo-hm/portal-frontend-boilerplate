/**
 * 2階層以下のサイドメニューボタン
 */
import React from "react";

import { SubPageDraewrBottunParts } from "../../parts/setting/SubPageDraewrBottunParts";

/**
 * props
 */
export interface SubPageDrawerBottunProps {
    onClick: any;
};

/**
 * module
 */
export default class SubPageDrawerBottunWidget extends React.Component<SubPageDrawerBottunProps, {}> {
    /**
     * constructor
     *
     * @param props
     */
    constructor(props: SubPageDrawerBottunProps) {
        super(props);
    }

    /**
     * render
     */
    public render(): React.ReactNode {
        return (
            <SubPageDraewrBottunParts onClick={this.props.onClick} />
        );
    }
}

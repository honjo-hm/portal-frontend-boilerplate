/**
 * 2階層以下のサイドメニュー暗転部
 */
import React from "react";

import { SubPageDrawerCoverParts } from "../../parts/setting/SubPageDrawerCoverParts";


/**
 * props
 */
export interface SubPageDrawerCoverProps {
    showSidemenu: boolean;
    onClick: any;
};

/**
 * module
 */
export default class SubPageDrawerCoverWidget extends React.Component<SubPageDrawerCoverProps,{}> {
    /**
     * constructor
     *
     * @param props 
     */
    constructor(props: SubPageDrawerCoverProps) {
        super(props);
    }
    /**
     * render
     */
    public render(): React.ReactNode {
        return (
            <SubPageDrawerCoverParts showSidemenu={this.props.showSidemenu} onClick={this.props.onClick} />
        );
    }
}

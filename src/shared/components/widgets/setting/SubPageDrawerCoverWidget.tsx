/**
 * 2階層以下のサイドメニュー暗転部
 */
import React from "react";
import styled from 'styled-components'

import { SubPageDrawerCoverParts } from "../../parts/setting/SubPageDrawerCoverParts";

/**
 * module
 */
export default class SubPageDrawerCoverWidget extends React.Component<{},{}> {

    public render(): React.ReactNode {
        return (
            <SubPageDrawerCoverParts />
        );
    }
}

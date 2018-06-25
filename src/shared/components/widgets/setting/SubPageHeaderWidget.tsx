/**
 * 2階層以下のヘッダー
 */
import React from "react";
import { injectGlobal } from "styled-components";
import styled from 'styled-components'

import { SubPageHeaderTitleParts} from "../../parts/setting/SubPageHeaderTitleParts";
import { SubPageHomeBottunParts } from "../../parts/setting/SubPageHomeBottunParts";

/**
 * props
 */
export interface SubPageHeaderProps {
    title: string;
}

/**
 * style
 */
injectGlobal`
    header {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        display: block;
    }
`;

 const SettingHeader = styled.ul`
    display: -webkit-box;
    -webkit-box-align: center;
    position: relative;
    min-height: 40px;
    padding-right: 10px;
    border-bottom: 2px solid #eb5505;
    background-color: #fff;
    
`;

/**
 * module
 */
export default class SubPageHeaderWidget extends React.Component<SubPageHeaderProps, {}> {
    constructor (props: SubPageHeaderProps) {
        super(props);
    }

    public render(): React.ReactNode {
        return (
            <header>
                <SettingHeader>
                    <SubPageHeaderTitleParts title={this.props.title}/>
                    <SubPageHomeBottunParts />
                </SettingHeader>
            </header>
        );
    }
}

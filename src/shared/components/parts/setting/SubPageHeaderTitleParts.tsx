/**
 * 2階層以下ヘッダータイトル
 */
import React from "react";
import styled from 'styled-components'

/**
 * style
 */
const SubPageHeaderTitle = styled.li`
    -webkit-box-flex: 1;
    padding: 2px 0 0 10px;
    font-size: 18px;
`;

/**
 * parts
 */
export const SubPageHeaderTitleParts = (props) => (
    <SubPageHeaderTitle>
        <h1>{props.title}</h1>
    </SubPageHeaderTitle>
);

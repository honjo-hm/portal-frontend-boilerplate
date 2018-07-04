/**
 * 記事詳細 - コンテンツ一覧
 */
import React from "react";
import styled from "styled-components"
import { ContentsHeadlineParts } from "../../parts/detail/ContentsHeadlineParts";
import { ContentsListParts } from "../../parts/detail/ContentsListParts";

const Section = styled.section`
    background: #f6f6f6;
    margin-bottom: 30px;
`;

export default class ContentsListWidgets extends React.Component<{}, {}> {

    public render(): React.ReactNode {
        return (
            <Section>
                    <ContentsHeadlineParts text='コンテンツ一覧'/>
                    <ContentsListParts/>
            </Section>
        );
    }
}

/**
 * 記事詳細 - レコメンド
 */
import React from "react";
import styled from "styled-components"
import { ContentsHeadlineParts } from "../../parts/detail/ContentsHeadlineParts";

const Section = styled.section`
    margin-bottom: 15px;
`;

export default class RecommendWidgets extends React.Component<{}, {}> {

    public render(): React.ReactNode {
        return (
            <Section>
                <ContentsHeadlineParts text='あなたにおすすめ'/>
                {/* レコメンド記事 */}
                <ContentsHeadlineParts text='こんな記事も読まれてます'/>
                {/* レコメンド記事 */}
            </Section>
        );
    }
}

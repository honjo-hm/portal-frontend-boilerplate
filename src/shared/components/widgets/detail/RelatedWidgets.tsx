/**
 * 記事詳細 - 関連記事
 */
import React from "react";
import styled from "styled-components"
import { ContentsHeadlineParts } from "../../parts/detail/ContentsHeadlineParts";

const Section = styled.section`
    max-width: 414px;
    margin: 15px auto;
    padding: 0 10px;
`;
const Contents = styled.div`
    border-radius: 4px;
    border: 1px solid #e9e9e9;
`;

export default class RelatedWidgets extends React.Component<{}, {}> {

    public render(): React.ReactNode {
        return (
            <Section>
                <Contents>
                    <ContentsHeadlineParts text='関連情報'/>
                    {/* 関連記事リスト */}
                </Contents>
            </Section>
        );
    }
}

/**
 * Article Detail Template
 *
 * @package Template
 * @since 2018.07.03
 * @copyright mediba.inc
 */
import React from "react";
import styled from "styled-components"
import DetailWidgets from "../widgets/detail/DetailWidgets";
import RelatedWidgets from "../widgets/detail/RelatedWidgets";
import CpRelatedWidgets from "../widgets/detail/CpRelatedWidgets";
import RecommendWidgets from "../widgets/detail/RecommendWidgets";
import ContentsListWidgets from "../widgets/detail/ContentsListWidgets";

export default class ArticleDetailTemplate extends React.Component<{}, {}> {
    public render(): React.ReactNode {
        return (
            <div>
                <DetailWidgets/>
                <RelatedWidgets/>
                <CpRelatedWidgets/>
                <RecommendWidgets/>
                <ContentsListWidgets/>
            </div>
        );
    }
}

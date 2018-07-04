/**
 * 記事詳細 - 記事詳細本文
 */
import React from "react";
import styled from "styled-components"

const ArticleBody = styled.div`
    margin-bottom: 15px;
    margin: 0 10px;

    & * {
        max-width: 100%;
        height: auto;
        margin: 0 auto;
    }
    .headline {
        margin: 10px 0 5px;
        line-height: 1.3;
    }
    .headline__text {
        font-size: 18px;
        font-weight: 700;
    }
    h2, h3, h4, h5, h6 {
        color: #676767;
        font-size: 17px;
        font-weight: 700;
        line-height: 1.3;
    }
    h2 {
        margin: 16px -10px;
        padding: 10px;
        background-color: #f6f6f6;
    }
    p {
        margin: 16px auto;
        max-width: 100%;
    }
    .caption, figcaption, small, .article__caption, .article__subtext {
        max-width: 414px;
        margin: 0 auto;
        color: #9e9e9e;
        font-size: 10px;
        line-height: 1.2;
    }
    .article__photo {
        max-width: 414px;
        margin: 16px auto;
        text-align: center;
    }
    .article__photo + figcaption {
        margin-top: -6px;
    }
    figcaption {
        margin-bottom: 16px;
    }
    .article__keyword {
        padding-bottom: 1px;
        border-bottom: dashed 1px #0574eb;
    }
`;

export const BodyParts = (props) => (
      <ArticleBody dangerouslySetInnerHTML={{__html: props.body}}>
      </ArticleBody>
);

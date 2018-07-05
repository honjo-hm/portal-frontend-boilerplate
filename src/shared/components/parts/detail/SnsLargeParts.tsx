/**
 * 記事詳細 - SNSシェアボタン
 */
import React from "react";
import styled from "styled-components"

const Item = styled.li`
    a::before {
      background-image: url(https://dev.portal.st-img.jp/assets/img/sp/sprite-sns.png?cc=1529998430);
      -webkit-background-size: 42px 39px;
      background-size: 42px 39px;
      background-repeat: no-repeat;
      display: block;
      content: '';
    }
    .sns-facebook {
        background: #315096
    }
    .sns-facebook::before {
        background-position: -22px 0;
        width: 20px;
        height: 21px
    }
    .sns-twitter {
        background: #43bceb
    }
    .sns-twitter::before {
        background-position: 0 -22px;
        width: 21px;
        height: 17px
    }
    .sns-line {
        background: #00b932
    }
    .sns-line::before {
        background-position: 0 0;
        width: 22px;
        height: 22px
    }
`;
const SnsLink = styled.a`
    display: -webkit-box;
    display: -ms-flexbox;
    display: box;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    height: inherit;
    border-radius: 4px;
    width: 93px;
    height: 35px;
`;

export const SnsLargeParts = (props) => (
    <Item>
        <SnsLink href={props.snsItem.url} target="_blank" data-ga-action="Function" data-ga-label={props.snsItem.name} className={props.snsItem.class_name}></SnsLink>
    </Item>
);

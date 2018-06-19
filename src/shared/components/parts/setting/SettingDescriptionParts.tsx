/**
 * 個人設定ページ - 説明文
 */
import React from "react";
import styled from 'styled-components'

 /**
  * style
  */
const SettingText = styled.div`
    margin: 10px 10px 0;
    line-height: 1.5;
    font-size: 14px;
`;

/**
 * parts
 */
export const SettingDescriptionParts = () => (
    <SettingText>
        トップページに表示する天気エリアや、運行情報をお知らせする路線の設定ができます。
    </SettingText>
);

/**
 * 個人設定ページ - 検索設定説明文
 */
import React from "react";
import styled from "styled-components";

const SettingText = styled.div`
    margin: 10px 10px 0;
    line-height: 1.5;
    font-size: 14px;
`;


const SettingNotice = styled.p`
    margin-top: 15px;
    line-height: 1.6;
    font-size: 12px;
    padding-left: 1em;
    text-indent: -1em;
`;

export const SearchDescriptionParts = () => (
    <SettingText>
        <SettingNotice>※入力補助機能とは、お客さまが検索窓に入力された際に、その文字を含む自動的に算出された人気ワードを候補として表示する機能です。</SettingNotice>
        <SettingNotice>※検索履歴とは、お客さまが検索窓に入力された際に、お客さまが以前検索したワードが候補として表示する機能です。</SettingNotice>
    </SettingText>
);

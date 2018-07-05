/**
 * 記事詳細 - CP関連リンク
 */
import React from "react";
import styled from "styled-components"
import { ContentsHeadlineParts } from "../../parts/detail/ContentsHeadlineParts";
import { CpRelatedParts } from "../../parts/detail/CpRelatedParts";

const Section = styled.section`
    background-color: #f6f6f6;
`;
const Items = styled.ul`
    border-bottom: 2px solid #f6f6f6;
    background-color: #fff;
`;

// 仮のCP関連リンク情報
const cpItems = [
    {
        id: 1,
        title: 'スペインの目利きがW杯日本の18名を採点。「もう外せない」のは誰か',
        link: 'https://sportiva.shueisha.co.jp/clm/football/jfootball/2018/07/02/18/?cx_refAction=distMediaRecs&cx_recsMode1=20180320&cx_recsMode2=contextual'
    },
    {
        id: 2,
        title: 'ベンチからの視点。東口と川島「GKのことはGKにしかわからない」',
        link: 'https://sportiva.shueisha.co.jp/clm/football/jfootball/2018/06/30/___split_52/?cx_refAction=distMediaRecs&cx_recsMode1=20180320&cx_recsMode2=contextual'
    },
    {
        id: 3,
        title: 'スペインの知将が西野采配に苦言。「3人の選手は効果的でなかった」',
        link: 'https://sportiva.shueisha.co.jp/clm/football/jfootball/2018/07/01/post_34/?cx_refAction=distMediaRecs&cx_recsMode1=20180320&cx_recsMode2=contextual'
    }
];

export default class CpRelatedWidgets extends React.Component<{}, {}> {

    public render(): React.ReactNode {
        return (
            <Section>
                <ContentsHeadlineParts text='情報提供元の記事'/>
                <Items>
                  {cpItems.map((cpItem) => (
                      <CpRelatedParts key={`CpRelatedLink${cpItem.id}`} cpItem={cpItem}/>
                  ))}
                </Items>
            </Section>
        );
    }
}

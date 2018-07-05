/**
 * 記事詳細 - 記事詳細表示
 */
import React from "react";
import styled from "styled-components"
import { ArticleHeadlineParts } from "../../parts/detail/ArticleHeadlineParts";
import { BodyParts } from "../../parts/detail/BodyParts";
import { InfoParts } from "../../parts/detail/InfoParts";
import { RelationKeywordParts } from "../../parts/detail/RelationKeywordParts";
import { SnsLargeParts } from "../../parts/detail/SnsLargeParts";

const ArticleContainer = styled.div`
    margin-bottom: 15px;
`;
const RelationKeywords = styled.div`
    margin: 25px 0 10px 10px;
`;
const KeywordItems = styled.ul`
    width: 100%;
    font-size: 0;
`;
const Sns = styled.div`
    width: 320px;
    margin: 10px auto 20px;
`;
const SnsItems = styled.ul`
    display: -webkit-box;
    display: -ms-flexbox;
    display: box;
    -webkit-box-pack: justify;
`;

// 仮の記事詳細情報
const data = {
        id: '93_11_r_20180628_1530165011895994',
        title: 'なぜポーランドは早期敗退した？　数字に見るレバンドフスキと大舞台での低調さ',
        body: '<figure><img src="https://dev.portal.st-img.jp/detail/0ac345e781e0f8da2019e4339ad392ab_1530165011_1.jpg" alt="ポーランド代表FWレバンドフスキは2試合にフル出場しているが、未だ無得点となっている【写真：Getty Images】" width="900" height="600"><figcaption>ポーランド代表FWレバンドフスキは2試合にフル出場しているが、未だ無得点となっている【写真：Getty Images】</figcaption></figure><h2>ポーランドは2連敗で敗退決定、レバンドフスキはいまだW杯ノーゴール</h2><p>　日本代表は現地時間28日、ロシア・ワールドカップ（W杯）グループリーグ最終戦でポーランド代表との対戦を控えている。日本にとっては決勝トーナメント進出をかけた重要な一戦となる一方、ポーランドは2連敗ですでに敗退が決定している。</p><p>　W杯欧州予選では、8勝1分1敗で首位通過を果たしていたポーランド。グループHを突破する有力候補だったチームに、一体何が起こったのか。その原因の一つに挙げられるのが、FWロベルト・レバンドフスキ（バイエルン・ミュンヘン）の不発ぶりだ。今大会では2試合180分間フル出場しているが、いまだ無得点となっている。</p><p>　レバンドフスキは欧州予選で10試合16得点と大爆発。同予選における歴代最多得点記録を樹立するほどの圧倒的な得点力を見せつけた。</p><p>　一方、そんなエースには大会前から一つの懸念があった。代表での主要国際大会参戦は、2012年と16年の欧州選手権（EURO）に続き今回が3回目となるレバンドフスキ。12年のEUROでポーランドはグループリーグ敗退を喫したが、レバンドフスキは3試合1得点。続く16年のEUROでチームはベスト8まで進出したものの、5試合1得点に留まっていた。そして今大会は2試合でノーゴール。主要大会においては、通算10試合出場でわずか2得点しか記録していないのだ。</p><p><br /></p><h2>ワールドクラスのストライカーを襲う“異変”</h2><p>　欧州予選では10試合16得点、かたや主要大会では通算10試合2得点。もちろん、予選と本大会では対戦相手のレベルに明らかな差があるのは確かだが、世界有数のストライカーでありながら、主要大会の試合数に対する得点率が20％と低いのは“異変”と言えそうだ。</p><p>　今大会に出場しているその他の主な欧州各国エースの主要大会通算成績を見ると、ポルトガル代表FWクリスティアーノ・ロナウドは通算37試合16ゴール（得点率43％）、フランス代表FWアントワーヌ・グリーズマンは通算13試合7ゴール（得点率53％）、イングランド代表FWハリー・ケインは通算6試合5ゴール（得点率83％）を記録しており、実績豊富なレバンドフスキの低調さがよく分かる。</p><p>　この要因の一つとして考えられるのが、レバンドフスキが個の力で状況を打開するタイプの選手ではないということ。それは、セネガル戦後の「僕はアシストあってのFWだ」というコメントからも分かるように、周囲と連動しながら得点を重ねていくタイプのストライカーだ。そのため、レバンドフスキへの供給ルートをいかに遮断するかが対戦相手にとって重要なテーマとなっており、主要大会の対戦国はそれが徹底できていると言えるのかもしれない。</p><p>　いずれにしても、レバンドフスキへの供給源を断つことが、日本にとって勝利の近道となることは間違いなさそうだ。</p><p><br />（Football ZONE web編集部）</p>',
        url: 'https://www.football-zone.net/archives/116582',
        post_start_date: '2018-07-01 10:00:00',
        cp: {
            id: 21,
            name: 'Football ZONE web',
            image_name: 'sti.png'
        },
        articleKeywords: [
            {
                keyword_id: 193,
                name: 'サッカーW杯'
            },
            {
                keyword_id: 2,
                name: '海外サッカー'
            }
        ]
};

// SNSシェアボタン
const snsItems = [
    {
        id: 1,
        name: 'Facebook',
        class_name: 'sns-facebook',
        url: 'http://www.facebook.com/share.php?u='
    },
    {
        id: 2,
        name: 'Twitter',
        class_name: 'sns-twitter',
        url: 'http://twitter.com/share?url='
    },
    {
        id: 3,
        name: 'Line',
        class_name: 'sns-line',
        url: 'http://line.me/R/msg/text/'
    }
];

export default class DetailWidgets extends React.Component<{}, {}> {

    public render(): React.ReactNode {
        return (
            <ArticleContainer>
                <ArticleHeadlineParts title={data.title}/>
                <BodyParts body={data.body}/>
                <InfoParts info={data}/>
                <RelationKeywords>
                    <KeywordItems>
                      {data.articleKeywords.map((keyword) => (
                          <RelationKeywordParts key={`RelationKeyword${keyword.keyword_id}`} keyword={keyword}/>
                      ))}
                    </KeywordItems>
                </RelationKeywords>
                <Sns>
                    <SnsItems>
                        {snsItems.map((snsItem) => (
                            <SnsLargeParts key={`SnsItem${snsItem.id}`} snsItem={snsItem}/>
                        ))}
                    </SnsItems>
                </Sns>
            </ArticleContainer>
        );
    }
}

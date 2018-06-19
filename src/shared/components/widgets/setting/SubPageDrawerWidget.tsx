/**
 * 2階層以下のサイドメニューボタン表示領域
 */
import React from "react";
import styled from 'styled-components'

/**
 * style
 */
const Drawer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
`;

const DrawerSlide = styled.div`
    position: absolute;
    width: 240px;
    top: 0;
    left: -240px;
    z-index: 1001;
    background-color: #fff;
`;

const DrawerModel = styled.div`
    padding-bottom: 120px;
`;

const DrawerAd = styled.div`
    min-height: 135px;
    text-align: center;
    position: relative;

    &>img {
        width: 30px;
        height: 30px;
        position: absolute;
        top: 45%;
        left: 45%;
        z-index: -1;
        border-radius: 4px;
    }
`;

const DrawerContents = styled.ul`
    width: 240px;

    & li {
        border-bottom: 1px solid #e9e9e9;
        position: relative;
    }
    & li a {
        display: block;
        font-size: 14px;
        padding: 10px 0 10px 10px;
        color: #000;
        height: auto;
        line-height: normal;
    }
    & li i {
        vertical-align: middle;
        margin: -5px 5px 0 0;
    }
`;

/**
 * module
 */
export default class SubPageDrawerWidget extends React.Component<{},{}> {

    static readonly SIDEMENU_LIST: {[key: string]: string}[] = [
        {
            route: "index",
            link: "",
            label: "au WebポータルTOP"
        },
        {
            route: "",
            link: "https://pass.auone.jp/main/?medid=spass_side&amp;srcid=none&amp;serial=smps",
            label: "auスマートパス"
        },
    ];

    public render(): React.ReactNode {
        // TODO: parts化
        return (
            <Drawer>
                <DrawerSlide>
                    <div>
                        <DrawerModel>
                            <div>
                                <img src="//kimg.auone.jp/emu/dist/img/loading.gif" />
                            </div>
                            <nav>
                                <DrawerContents>
                                    {
                                        SubPageDrawerWidget.SIDEMENU_LIST.map((item: {[key: string]: string}) => {
                                            return <li>
                                                <a href={item.link} data-ga-category="SmartpassTop" data-ga-action="SideMenu" data-ga-label={item.label}>
                                                    <i></i>{item.label}
                                                </a>
                                            </li>
                                        })
                                    }

                                    <li>
                                        <a href="https://auone.jp/" data-ga-category="SmartpassTop" data-ga-action="SideMenu" data-ga-label="au Webポータル">
                                            <i></i>au WebポータルTOP
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://pass.auone.jp/main/?medid=spass_side&amp;srcid=none&amp;serial=smps" data-ga-category="SmartpassTop" data-ga-action="SideMenu" data-ga-label="auスマートパス">
                                            <i></i>auスマートパス
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://ac.ebis.ne.jp/tr_set.php?argument=WSwgvzTd&amp;ai=k01_130446" data-ga-category="SmartpassTop" data-ga-action="SideMenu" data-ga-label="ビデオパス">
                                            <i></i>ビデオパス
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://ac.ebis.ne.jp/tr_set.php?argument=WSwgvzTd&amp;ai=k01_82977" data-ga-category="SmartpassTop" data-ga-action="SideMenu" data-ga-label="うたパス">
                                            <i></i>うたパス
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://ac.ebis.ne.jp/tr_set.php?argument=WSwgvzTd&amp;ai=k01_92868" data-ga-category="SmartpassTop" data-ga-action="SideMenu" data-ga-label="ブックパス">
                                            <i></i>ブックパス
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://disneypass.jp/spmn/" data-ga-category="SmartpassTop" data-ga-action="SideMenu" data-ga-label="ディズニーパス">
                                            <i></i>ディズニーパス<span>(C)Disney</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://game.auone.jp/" data-ga-category="SmartpassTop" data-ga-action="SideMenu" data-ga-label="ゲーム">
                                            <i></i>ゲーム
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://pass.auone.jp/pass_member/?medid=spass_side&amp;srcid=none&amp;serial=smps" data-ga-category="SmartpassTop" data-ga-action="SideMenu" data-ga-label="入退会">
                                            <i></i>各種サービス入会・退会
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://wallet.auone.jp/contents/sp/access/009_top.html" data-ga-category="SmartpassTop" data-ga-action="SideMenu" data-ga-label="auWALLET">
                                            <i></i>au WALLET
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://wm.auone.jp/front/?trcd=AUSM151126&amp;islgin=true&amp;bid=wm-cb-sasm745" data-ga-category="SmartpassTop" data-ga-action="SideMenu" data-ga-label="au WALLET Market">
                                            <i></i>au WALLET Market
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://wowma.jp/?aff_id=prt0001" data-ga-category="SmartpassTop" data-ga-action="SideMenu" data-ga-label="ショッピング">
                                            <i></i>ショッピング
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://enjoy.point.auone.jp/gacha/?rf=Androidweb" data-ga-category="SmartpassTop" data-ga-action="SideMenu" data-ga-label="ポイントガチャ">
                                            <i></i>ポイントガチャ
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.au.kddi.com/electricity/" data-ga-category="SmartpassTop" data-ga-action="SideMenu" data-ga-label="auでんき">
                                            <i></i>auでんき
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://ac.ebis.ne.jp/tr_set.php?argument=WSwgvzTd&amp;ai=k01_156914" data-ga-category="SmartpassTop" data-ga-action="SideMenu" data-ga-label="auのほけん・ローン">
                                            <i></i>auのほけん・ローン
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.au.com/support/?aid=cs-cs-support-0001" data-ga-category="SmartpassTop" data-ga-action="SideMenu" data-ga-label="サポート">
                                            <i></i>サポート
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.au.kddi.com/" data-ga-category="SmartpassTop" data-ga-action="SideMenu" data-ga-label="auホームページ">
                                            <i></i>auホームページ
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://sp-web.search.auone.jp/" data-ga-category="SmartpassTop" data-ga-action="SideMenu" data-ga-label="検索">
                                            <i></i>検索
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://article.auone.jp/flash" data-ga-category="SmartpassTop" data-ga-action="SideMenu" data-ga-label="ニュース">
                                            <i></i>ニュース
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://tenki.auone.jp/" data-ga-category="SmartpassTop" data-ga-action="SideMenu" data-ga-label="天気">
                                            <i></i>天気
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://fortune.auone.jp/" data-ga-category="SmartpassTop" data-ga-action="SideMenu" data-ga-label="占い">
                                            <i></i>占い
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://touch.eznavi.auone.jp/transfer/" data-ga-category="SmartpassTop" data-ga-action="SideMenu" data-ga-label="乗換">
                                            <i></i>乗換・地図
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://auone.jp/app/download/&amp;referer=4891" data-ga-category="SmartpassTop" data-ga-action="SideMenu" data-ga-label="アプリ版を見る">
                                            <i></i>auサービスTOPアプリを見る
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://auone.jp/setting/" data-ga-category="SmartpassTop" data-ga-action="SideMenu" data-ga-label="各種設定">
                                            <i></i>各種設定
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://pass.auone.jp/pass_help/?medid=spass_side&amp;srcid=none&amp;serial=smps" data-ga-category="SmartpassTop" data-ga-action="SideMenu" data-ga-label="ヘルプ">
                                            <i></i>ヘルプ
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://pass.auone.jp/inquiry/?medid=spass_side&amp;srcid=none&amp;serial=smps" data-ga-category="SmartpassTop" data-ga-action="SideMenu" data-ga-label="お問い合わせ">
                                            <i></i>お問い合わせ
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://pass.auone.jp/terms/?medid=spass_side&amp;srcid=none&amp;serial=smps" data-ga-category="SmartpassTop" data-ga-action="SideMenu" data-ga-label="利用規約">
                                            <i></i>利用規約
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kddi.com/corporate/kddi/public/privacy/" data-ga-category="SmartpassTop" data-ga-action="SideMenu" data-ga-label="プライバシーポリシー">
                                            <i></i>プライバシーポリシー
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.mediba.jp/privacy/sp/advertising.html" data-ga-category="SmartpassTop" data-ga-action="SideMenu" data-ga-label="広告について">
                                            <i></i>広告について
                                        </a>
                                    </li>
                                </DrawerContents>
                            </nav>
                        </DrawerModel>
                    </div>
                </DrawerSlide>
            </Drawer>
        );
    }
}

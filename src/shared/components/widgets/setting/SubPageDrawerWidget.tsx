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

const DrawerModal = styled.div`
    padding-bottom: 120px;
`;

const DrawerAdBox = styled.div`
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
    & li a span {
        position: static!important;
        vertical-align: middle;
        font-size: 10px;
        display: inline-block;
        margin-top: -2px;
        margin-left: 5px!important;
    }
    & li i {
        vertical-align: middle;
        margin: -5px 5px 0 0;
    }
`;

const showStyle: any = {
    position: "absolute",
    transform: "translate3d(240px, 0px, 0px)",
    transition: "-webkit-transform 350ms cubic-bezier(0.04, 0.78, 0.11, 0.97)",
    display: "block",
};

const hiddenStyle: any = {
    position: "absolute",
    transform: "translate3d(-240px, 0px, 0px)",
    transition: "-webkit-transform 300ms cubic-bezier(0.611, 0.044, 0.983, 0.267)",
    display: "none",
};

const modalStyle: any = {
    "transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)",
    "transition-duration": "0ms",
    transform: "translate(0px, 0px) translateZ(0px)"
};

/**
 * props
 */
interface SubPageDrawerProps {
    showSidemenu: boolean
};

/**
 * module
 */
export default class SubPageDrawerWidget extends React.Component<SubPageDrawerProps,{}> {
    /**
     * constructor
     *
     * @param props
     */
    constructor(props: SubPageDrawerProps) {
        super(props);
    }
    /**
     * サイドメニュー情報
     */
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
        {
            route: "",
            link: "http://ac.ebis.ne.jp/tr_set.php?argument=WSwgvzTd&amp;ai=k01_130446",
            label: "ビデオパス"
        },
        {
            route: "",
            link: "http://ac.ebis.ne.jp/tr_set.php?argument=WSwgvzTd&amp;ai=k01_82977",
            label: "うたパス"
        },
        {
            route: "",
            link: "http://ac.ebis.ne.jp/tr_set.php?argument=WSwgvzTd&amp;ai=k01_92868",
            label: "ブックパス"
        },
        {
            route: "",
            link: "http://disneypass.jp/spmn/",
            label: "ディズニーパス<span>(C)Disney</span>"
        },
        {
            route: "",
            link: "https://game.auone.jp/",
            label: "ゲーム"
        },
        {
            route: "",
            link: "https://pass.auone.jp/pass_member/?medid=spass_side&amp;srcid=none&amp;serial=smps",
            label: "各種サービス入会・退会"
        },
        {
            route: "",
            link: "https://wallet.auone.jp/contents/sp/access/009_top.html",
            label: "au WALLET"
        },
        {
            route: "",
            link: "https://wm.auone.jp/front/?trcd=AUSM151126&amp;islgin=true&amp;bid=wm-cb-sasm745",
            label: "au WALLET Market"
        },
        {
            route: "",
            link: "https://wowma.jp/?aff_id=prt0001",
            label: "ショッピング"
        },
        {
            route: "",
            link: "https://enjoy.point.auone.jp/gacha/?rf=Androidweb",
            label: "ポイントガチャ"
        },
        {
            route: "",
            link: "http://www.au.kddi.com/electricity/",
            label: "auでんき"
        },
        {
            route: "",
            link: "http://ac.ebis.ne.jp/tr_set.php?argument=WSwgvzTd&amp;ai=k01_156914",
            label: "auのほけん・ローン"
        },
        {
            route: "",
            link: "https://www.au.com/support/?aid=cs-cs-support-0001",
            label: "サポート"
        },
        {
            route: "",
            link: "http://www.au.kddi.com/",
            label: "auホームページ"
        },
        {
            route: "",
            link: "https://sp-web.search.auone.jp/",
            label: "検索"
        },
    ];

    /**
     * render
     */
    public render(): React.ReactNode {
        // TODO: parts化
        return (
            <Drawer>
                <DrawerSlide style={this.props.showSidemenu ? showStyle : hiddenStyle}>
                    <div style={{height: "640px"}}>
                        <DrawerModal style={modalStyle}>
                            <DrawerAdBox>
                                <img src="//kimg.auone.jp/emu/dist/img/loading.gif" />
                            </DrawerAdBox>
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
                        </DrawerModal>
                    </div>
                </DrawerSlide>
            </Drawer>
        );
    }
}

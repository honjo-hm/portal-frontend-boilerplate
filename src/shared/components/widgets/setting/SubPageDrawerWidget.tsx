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
        {
            route: "",
            link: "https://article.auone.jp/flash",
            label: "ニュース"
        },
        {
            route: "",
            link: "https://tenki.auone.jp/",
            label: "天気"
        },
        {
            route: "",
            link: "http://fortune.auone.jp/",
            label: "占い"
        },
        {
            route: "",
            link: "http://touch.eznavi.auone.jp/transfer/",
            label: "乗換・地図"
        },
        {
            route: "",
            link: "https://auone.jp/app/download/&amp;referer=4891",
            label: "auサービスTOPアプリを見る"
        },
        {
            route: "",
            link: "https://auone.jp/setting/",
            label: "各種設定"
        },
        {
            route: "",
            link: "https://pass.auone.jp/pass_help/?medid=spass_side&amp;srcid=none&amp;serial=smps",
            label: "ヘルプ"
        },
        {
            route: "",
            link: "https://pass.auone.jp/inquiry/?medid=spass_side&amp;srcid=none&amp;serial=smps",
            label: "お問い合わせ"
        },
        {
            route: "",
            link: "https://pass.auone.jp/terms/?medid=spass_side&amp;srcid=none&amp;serial=smps",
            label: "利用規約"
        },
        {
            route: "",
            link: "http://www.kddi.com/corporate/kddi/public/privacy/",
            label: "プライバシーポリシー"
        },
        {
            route: "",
            link: "http://www.mediba.jp/privacy/sp/advertising.html",
            label: "広告について"
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
                                        SubPageDrawerWidget.SIDEMENU_LIST.map((item: {[key: string]: string}, index: number) => {
                                            return <li key={index}>
                                                <a href={item.link} data-ga-category="SmartpassTop" data-ga-action="SideMenu" data-ga-label={item.label}>
                                                    <i></i>{item.label}
                                                </a>
                                            </li>
                                        })
                                    }
                                </DrawerContents>
                            </nav>
                        </DrawerModal>
                    </div>
                </DrawerSlide>
            </Drawer>
        );
    }
}

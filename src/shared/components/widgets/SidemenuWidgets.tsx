import React from "react";
import styled from 'styled-components';

import { SidemenuHeader } from "../parts/SidemenuHeader";
import { SidemenuHead } from "../parts/SidemenuHead";
import { SidemenuLists } from "../parts/SidemenuLists";

import { SidemenuContents } from "../parts/SidemenuContents";
import { SidemenuAppBanner } from "../parts/SidemenuAppBanner";
import { SidemenuFooter } from "../parts/SidemenuFooter";


// interface MyComponentState { isShowing:boolean , isShowed:boolean, isHiding: boolean }

const SidemenuWrapper = styled.div`
  .showing {
    display: block;
  }
  .showed {
    display: block;
  }
  .hiding {
    display: block;
  }
  .hidden {
    display: none;
  }
`;

const sidemenuLists = [
{
    id: 123456,
    title: 'au Webポータル',
    icon: true,
    className: 'portal',
    menus: [
      {
        name: 'TOP',
        icon: true,
        url: '/',
        className: 'top'
      },
      {
        name: '個人設定',
        icon: true,
        url: '/setting/services/',
        className: 'setting'
      },
      {
        name: '検索',
        icon: true,
        url: 'https://search.auone.jp/',
        className: 'search'
      },
      {
        name: '乗換・地図',
        icon: true,
        url: 'https://touch.eznavi.auone.jp/transfer/',
        className: 'train'
      },
      {
        name: '今日の天気',
        icon: false,
        url: 'https://tenki.auone.jp/weather/',
        className: 'weather'
      },
      {
        name: '今日の運勢',
        icon: false,
        url: 'https://sp.fortune.auone.jp/astro/ranking',
        className: 'fortune'
      },
    ]
  }
]


const portalMenues = {
    id: 123456,
    title: 'au Webポータル',
    icon: true,
    className: 'portal',
    menus: [
      {
        name: 'TOP',
        icon: true,
        url: '/',
        className: 'top'
      },
      {
        name: '個人設定',
        icon: true,
        url: '/setting/services/',
        className: 'setting'
      },
      {
        name: '検索',
        icon: true,
        url: 'https://search.auone.jp/',
        className: 'search'
      },
      {
        name: '乗換・地図',
        icon: true,
        url: 'https://touch.eznavi.auone.jp/transfer/',
        className: 'train'
      },
      {
        name: '今日の天気',
        icon: false,
        url: 'https://tenki.auone.jp/weather/',
        className: 'weather'
      },
      {
        name: '今日の運勢',
        icon: false,
        url: 'https://sp.fortune.auone.jp/astro/ranking',
        className: 'fortune'
      },
    ]
  }

const newsMenues = {
    id: 7890123,
    title: 'ニュース',
    icon: true,
    className: 'news',
    menus: [
      {
        name: '速報',
        icon: false,
        url: 'https://article.auone.jp/flash',
        className: ''
      },
      {
        name: '国内',
        icon: false,
        url: 'https://article.auone.jp/genre/2',
        className: 'setting'
      },
      {
        name: '経済・IT',
        icon: false,
        url: 'https://article.auone.jp/genre/3',
        className: 'search'
      },
      {
        name: '国際',
        icon: false,
        url: 'https://article.auone.jp/genre/4',
        className: 'train'
      },
      {
        name: ' 芸能',
        icon: false,
        url: 'https://article.auone.jp/genre/5',
        className: 'weather'
      },
      {
        name: 'スポーツ',
        icon: false,
        url: 'https://article.auone.jp/genre/2',
        className: 'fortune'
      },
      {
        name: 'コネタ',
        icon: false,
        url: 'https://article.auone.jp/genre/2',
        className: 'fortune'
      },
      {
        name: '総合ランキング',
        icon: false,
        url: 'https://article.auone.jp/ranking/0',
        className: 'fortune'
      },
      {
        name: 'すべてのキーワード',
        icon: false,
        url: 'https://article.auone.jp/genre/0',
        className: 'fortune'
      },
    ]
  }

const customerMenues = {
    id: 7890123,
    title: 'お客さま向けサービス',
    icon: true,
    className: 'custormer',
    menus: [
      {
        name: 'auホームページ',
        icon: false,
        url: 'http://www.au.kddi.com/',
        className: ''
      },
      {
        name: 'サポート',
        icon: false,
        url: 'https://www.au.com/support/?aid=cs-cs-support-0001',
        className: ''
      },
      {
        name: 'au WALLET',
        icon: false,
        url: 'https://wallet.auone.jp/contents/sp/access/009_top.html',
        className: ''
      },
      {
        name: 'ポイントを使う',
        icon: false,
        url: 'https://id.auone.jp/id/sp/point/sp_point/point_use.html?medid=auweb_side_&srcid=wpoint_use&serial=035',
        className: ''
      },
      {
        name: ' ポイント貯める',
        icon: false,
        url: 'https://id.auone.jp/id/sp/point/sp_point/point_charge.html?medid=auweb_side_&srcid=wpoint_get&serial=034',
        className: ''
      },
      {
        name: 'ポイントガチャで貯める',
        icon: false,
        url: 'https://enjoy.point.auone.jp/gacha/?rf=Androidweb',
        className: ''
      },
      {
        name: '残高',
        icon: false,
        url: 'https://wallet.auone.jp/?medid=pass&srcid=wallet&serial=0220',
        className: ''
      },
      {
        name: 'ポイント',
        icon: false,
        url: 'https://id.auone.jp/point/info/index.html',
        className: ''
      },
    ],
    isLogin: false,
  }

const recommendMenus = {
    id: 7890123,
    title: 'おすすめサービス',
    icon: false,
    className: 'recommend',
    menus: [
      {
        name: 'auSTAR',
        icon: false,
        url: 'http://www.au.kddi.com/pr/star/sp/?bid=we-we-star-0001',
        className: 'austar'
      },
      {
        name: 'auスマートパス',
        icon: false,
        url: 'https://pass.auone.jp/main/?medid=portal_side&srcid=none&serial=smps',
        className: 'smartpass',
        submenus: [
          {
            name: '会員特典',
            icon: false,
            url: 'https://tokuten.auone.jp/?medid=portal_side',
            className: ''
          },
          {
            name: 'アプリ',
            icon: false,
            url: 'https://pass.auone.jp/app/?medid=portal_side&srcid=none&serial=smps',
            className: ''
          },
          {
            name: 'あんしん',
            icon: false,
            url: 'https://pass.auone.jp/anshin/?medid=portal_side&srcid=none&serial=smps',
            className: ''
          },
        ]
      },
      {
        name: 'うたパス',
        icon: false,
        url: 'https://wallet.auone.jp/contents/sp/access/009_top.html',
        className: ''
      },
      {
        name: 'ビデオパス',
        icon: false,
        url: 'https://id.auone.jp/id/sp/point/sp_point/point_use.html?medid=auweb_side_&srcid=wpoint_use&serial=035',
        className: ''
      },
      {
        name: 'ブックパス',
        icon: false,
        url: 'https://id.auone.jp/id/sp/point/sp_point/point_charge.html?medid=auweb_side_&srcid=wpoint_get&serial=034',
        className: ''
      },
      {
        name: 'ディズニーパス',
        icon: false,
        url: 'https://enjoy.point.auone.jp/gacha/?rf=Androidweb',
        className: ''
      },
      {
        name: 'グルメパス',
        icon: false,
        url: 'https://wallet.auone.jp/?medid=pass&srcid=wallet&serial=0220',
        className: ''
      },
      {
        name: 'ニュースパス',
        icon: false,
        url: 'https://id.auone.jp/point/info/index.html',
        className: ''
      },
    ],
  }

const serviceMenus = {
    id: 123456,
    title: '生活に役立つサービス',
    icon: true,
    className: 'service',
    menus: [
      {
        name: 'Wowma!',
        subtext: '総合通販',
        icon: false,
        url: '/',
        className: ''
      },
      {
        name: 'au WALLET Market',
        icon: false,
        url: '/',
        className: ''
      },
      {
        name: 'auトラベル',
        icon: true,
        url: '/',
        className: ''
      },
      {
        name: 'auでんき',
        icon: true,
        url: '/',
        className: ''
      },
      {
        name: 'auのほけん・ローン',
        icon: false,
        url: '/',
        className: ''
      },
      {
        name: 'au x タスカジ',
        subtext: '家事代行',
        icon: false,
        url: '/',
        className: ''
      },
      {
        name: 'camily',
        subtext: '子育て',
        icon: false,
        url: '/',
        className: ''
      },
      {
        name: 'MANT',
        subtext: 'ファッション',
        icon: false,
        url: '/',
        className: ''
      },
      {
        name: 'auゲーム',
        icon: false,
        url: '/',
        className: ''
      },
      {
        name: 'ゲームギフト',
        icon: false,
        url: '/',
        className: ''
      },
      {
        name: '無料マンガ',
        icon: false,
        url: '/',
        className: ''
      },
      {
        name: 'Z TOKYO',
        subtext: 'カルチャー',
        icon: false,
        url: '/',
        className: ''
      }
    ]
  }

const settingMenus = {
    id: 123456,
    title: '各種設定・その他',
    icon: true,
    className: 'setting',
    menus: [
      {
        name: 'おすすめ情報設定',
        icon: false,
        url: '/',
        className: ''
      },
      {
        name: 'メルマガ登録・解除',
        icon: false,
        url: '/',
        className: ''
      },
      {
        name: 'ヘルプ',
        icon: false,
        url: '/',
        className: ''
      },
      {
        name: 'お問い合わせ',
        icon: false,
        url: '/',
        className: ''
      },
      {
        name: '各種サービス入会・退会',
        icon: false,
        url: '/',
        className: ''
      },
      {
        name: '利用規約',
        icon: false,
        url: '/',
        className: 'fortune'
      },
      {
        name: 'プライバシーポリシー',
        icon: false,
        url: '/',
        className: ''
      },
      {
        name: '広告について',
        icon: false,
        url: '/',
        className: ''
      },
    ],
}

export default class SidemenuWidgets extends React.Component<any,any> {
  constructor(props) {
    super(props);
    this.state = {
      sidemenuLists
    }
  }

  public render() {
    const sidemenuContents:any = [];
    for(let i in this.state.sidemenuLists) {
      sidemenuContents.push(
        <dl key={ this.state.sidemenuLists[i].id }>
          <SidemenuHead key={ `SidemenuHead` }>{ this.state.sidemenuLists[i].title }</SidemenuHead>
          <SidemenuLists key={ `SidemenuLists` } menus={ this.state.sidemenuLists[i].menus } />
        </dl>
      )
    }

    const settingMenuContents = (
      <dl key={ Math.random()}>
        <dt>{ settingMenus.title }</dt>
        <dd>
          <ul>
            {
              settingMenus.menus.map((menu, index) => {
                return <li key={index}>{menu.name}</li>
              })
            }
          </ul>
        </dd>
      </dl>
    );

    return (
      <SidemenuWrapper key={ `sidemenuWrapper` }>
        <div className={this.props.status}>
          <SidemenuHeader key={`SidemenuHeader`}  onClick={ this.props.onClick }/>
          <SidemenuContents key={`SidemenuContents`} sidemenuLists={this.state.sidemenuLists}/>
          <SidemenuAppBanner key={`SidemenuAppBanner`}/>
          <SidemenuFooter key={`SidemenuFooter`}/>
        </div>
        { sidemenuContents }
        { settingMenuContents }
      </SidemenuWrapper>
    );
  }
}

import React from "react";
import styled from 'styled-components';

//@ts-ignore
import { Link } from "../../routes/index";

const Wrapper = styled.div`
  dt {
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    font-size: 12px;
    font-weight: 700;
  }
  .sidemenu__portal-title {
    background-color: #535353;
    color: #fff;
    position: relative;
    padding-left: 30px;
    &::before {
      display: block;
      position: absolute;
      left: 10px;
      top: 0;
      bottom: 0;
      margin: auto;
      content: '';
      background-image: url(//simg.auone.jp/emu/dist/img/sp/sprite-sidemenu.png?cc=1528868102);
      background-position: 0 0;
      background-size: 55px 52px;
      background-repeat: no-repeat;
      width: 15px;
      height: 15px;
    }
  }
  .sidemenu__items {
      overflow: hidden;
  }
  .sidemenu__item {
    float: left;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 50%;
    font-size: 13px;
    vertical-align: top;
    border-bottom: 1px solid #e9e9e9;
    &:nth-child(odd) {
      border-right: 1px solid #e9e9e9;
    }
    a {
      display: flex;
      align-items: center;
      height: 40px;
      padding: 0 10px;
      color: #3c3c3c;
      text-decoration: none;
    }
  }
  .sidemenu__personal-title {
    width: 100%;
    color: #b9b9b9;
    font-size: 10px;
    text-align: left;
  }
  .sidemenu__personal {
    display: flex;
    align-items: center;
    flex: 1;
    margin-top: 5px;
  }
  .sidemenu__personal-icon {
    padding-right: 10px;
  }
  .sidemenu__personal-text {
    font-size: 12px;
    font-weight: bold;
    text-align: left;
  }
  a.sidemenu__portal-weather,
  a.sidemenu__portal-fortune {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 42px;
    padding: 10px;
    text-align: center;
  }
  .sidemenu__weather-maxtemp {
      color: #ef3743;
  }
  .sidemenu__weather-mintemp {
    color: #0574eb;
  }
  .sidemenu__weather-area {
    margin-top: 3px;
  }
  .fortune__sprite.fortune__sprite--icon04 {
    display: block;
    background-image: url(//simg.auone.jp/emu/dist/img/sprite-fortune.png?cc=1528868102);
    background-position: 0 -53px;
    width: 23px;
    height: 21px;
    background-size: 98px 74px;
    background-repeat: no-repeat;
  }
`;

export const SidemenuContents = (props) => {
    return (<Wrapper>
      <dl>
          <dt className="sidemenu__portal-title">{ props.sidemenuLists[0].title } </dt>
          <dd>
              <ul className="sidemenu__items">
                  <li className="sidemenu__item"><Link route="index"><a className="js-analytics sidemenu__imgportal-top" data-ga-action="SideMenu" data-ga-label="TOP">TOP</a></Link></li>
                  <li className="sidemenu__item"><Link route="settings"><a className="js-analytics sidemenu__portal-setting" data-ga-action="SideMenu" data-ga-label="個人設定">個人設定</a></Link></li>
                  <li className="sidemenu__item"><a href="https://sp-web.search.auone.jp/" className="js-analytics sidemenu__portal-search" data-ga-action="SideMenu" data-ga-label="検索">検索</a></li>
                  <li className="sidemenu__item"><a href="https://touch.eznavi.auone.jp/transfer/" className="js-analytics sidemenu__portal-train" data-ga-action="SideMenu" data-ga-label="乗換・地図">乗換・地図</a></li>
                  <li className="js-weather sidemenu__item"><a href="https://tenki.auone.jp/weather/13101?rf=au_top" className="js-analytics js-weather__link sidemenu__portal-weather" data-ga-action="SideMenu" data-ga-label="天気未設定"><p className="sidemenu__personal-title">今日の天気</p><div className="sidemenu__personal"><p className="js-weather__icon sidemenu__personal-icon"><img src="//kimg.auone.jp/emu/dist/img/weather/202.png" width="30" height="20" className="js-weather__img" /></p><div className="sidemenu__personal-text"><p><span className="js-weather__maxtemp sidemenu__weather-maxtemp">21℃</span>/<span className="js-weather__mintemp sidemenu__weather-mintemp">18℃</span></p><p className="js-weather__area sidemenu__weather-area">千代田区</p></div></div></a></li>
                  <li className="js-fortune sidemenu__item"><a href="https://sp.fortune.auone.jp/astro/ranking" className="js-analytics js-fortune__link sidemenu__portal-fortune" data-ga-action="SideMenu" data-ga-label="占い未設定"><p className="sidemenu__personal-title">今日の運勢</p><div className="sidemenu__personal"><p className="sidemenu__personal-icon"><i className="js-fortune__sprite fortune__sprite fortune__sprite--icon04"></i></p><p className="sidemenu__personal-text"><span className="js-fortune__label sidemenu__fortune-label">かに座</span><span className="js-fortune__rank sidemenu__fortune-rank">1位</span></p></div></a></li>
              </ul>
          </dd>
        </dl>
    </Wrapper>);
};

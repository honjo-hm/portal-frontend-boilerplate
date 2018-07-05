/**
 * 記事詳細 - コンテンツ一覧
 */
import React from "react";
import styled from "styled-components"

const Items = styled.ul`
    border-top: 1px solid #e9e9e9;
    overflow: hidden;
    font-size: 0;
    background-color: #fff;

    .genre__item {
        float: left;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: -webkit-box;
        display: -ms-flexbox;
        display: box;
        width: 100%;
        white-space: nowrap;
        border-bottom: 1px solid #e9e9e9;
    }
    .genre__item a {
        display: block;
        background: #fff;
        padding: 15px 10px;
        font-size: 13px
    }
    .genre__item .genre__name {
        width: 100%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
    .genre__item--classified .genre__name, .genre__item.genre__item--classified .genre__name {
        width: 4em;
        -webkit-box-sizing: content-box;
        box-sizing: content-box
    }
    .genre__item:nth-last-child(2) {
        margin-top: 5px;
        border-top: 1px solid #e9e9e9
    }
    .genre__item.genre__item--small {
        width: 50%;
        border-right: 1px solid #e9e9e9
    }

    .genre__item .sub-genre__items {
        display: -webkit-box;
        display: -ms-flexbox;
        display: box;
        -webkit-box-flex: 1;
        box-flex: 1;
        font-size: 12px;
        padding-left: 5px
    }

    .genre__item .sub-genre__item {
        display: -webkit-box;
        display: -ms-flexbox;
        display: box;
        position: relative
    }

    .genre__item .sub-genre__item a {
        display: -webkit-box;
        display: -ms-flexbox;
        display: box;
        -webkit-box-align: center
    }

    .genre__item .sub-genre__item:not(:last-child)::after {
        position: absolute;
        top: 15px;
        bottom: 15px;
        right: 0;
        width: 1px;
        border-right: 1px solid #e9e9e9;
        content: ''
    }
    .genre__item.genre__item--classified .genre__name::after {
        position: absolute;
        top: 6px;
        bottom: 6px;
        right: 0;
        width: 1px;
        border-right: 1px solid #e9e9e9;
        content: ''
    }
    .genre__item a,.genre__item.genre__item--classified {
        position: relative
    }
`;

export const ContentsListParts = (props) => (
    <Items className="genre__items">
        <li className="genre__item">
            <a href="https://article.auone.jp/flash" className="js-analytics genre__name" data-ga-action="コンテンツ一覧" data-ga-label="速報">速報</a>
        </li>
        <li className="genre__item genre__item--classified">
            <a href="https://article.auone.jp/genre/2" className="js-analytics genre__name" data-ga-action="コンテンツ一覧" data-ga-label="国内">国内</a>
            <ul className="sub-genre__items">
                <li className="sub-genre__item">
                    <a href="https://article.auone.jp/genre/2/sub-genre/2" className="js-analytics" data-ga-action="コンテンツ一覧" data-ga-label="社会">社会</a>
                </li>
                <li className="sub-genre__item">
                    <a href="https://article.auone.jp/genre/2/sub-genre/3" className="js-analytics" data-ga-action="コンテンツ一覧" data-ga-label="政治">政治</a>
                </li>
                <li className="sub-genre__item">
                    <a href="https://article.auone.jp/genre/2/sub-genre/4" className="js-analytics" data-ga-action="コンテンツ一覧" data-ga-label="文化・科学">文化・科学</a>
                </li>
                <li className="sub-genre__item">
                    <a href="https://article.auone.jp/genre/2/sub-genre/5" className="js-analytics" data-ga-action="コンテンツ一覧" data-ga-label="地域">地域</a>
                </li>
            </ul>
        </li>
        <li className="genre__item genre__item--small genre__item--classified">
            <a href="https://article.auone.jp/genre/3" className="js-analytics genre__name" data-ga-action="コンテンツ一覧" data-ga-label="経済・IT">経済・IT</a>
            <ul className="sub-genre__items">
                <li className="sub-genre__item">
                    <a href="https://article.auone.jp/genre/3/sub-genre/6" className="js-analytics" data-ga-action="コンテンツ一覧" data-ga-label="経済">経済</a>
                </li>
                <li className="sub-genre__item">
                    <a href="https://article.auone.jp/genre/3/sub-genre/7" className="js-analytics" data-ga-action="コンテンツ一覧" data-ga-label="IT">IT</a>
                </li>
            </ul>
        </li>
        <li className="genre__item genre__item--small">
            <a href="https://article.auone.jp/genre/4" className="js-analytics genre__name" data-ga-action="コンテンツ一覧" data-ga-label="国際">国際</a>
        </li>
        <li className="genre__item genre__item--classified">
            <a href="https://article.auone.jp/genre/6" className="js-analytics genre__name" data-ga-action="コンテンツ一覧" data-ga-label="スポーツ">スポーツ</a>
            <ul className="sub-genre__items">
                <li className="sub-genre__item">
                    <a href="https://article.auone.jp/genre/6/sub-genre/10" className="js-analytics" data-ga-action="コンテンツ一覧" data-ga-label="野球">野球</a>
                </li>
                <li className="sub-genre__item">
                    <a href="https://article.auone.jp/genre/6/sub-genre/11" className="js-analytics" data-ga-action="コンテンツ一覧" data-ga-label="サッカー">サッカー</a>
                </li>
                <li className="sub-genre__item">
                    <a href="https://article.auone.jp/genre/6/sub-genre/12" className="js-analytics" data-ga-action="コンテンツ一覧" data-ga-label="その他">その他</a>
                </li>
            </ul>
        </li>
        <li className="genre__item genre__item--small">
            <a href="https://article.auone.jp/genre/5" className="js-analytics genre__name" data-ga-action="コンテンツ一覧" data-ga-label="芸能">芸能</a>
        </li>
        <li className="genre__item genre__item--small">
            <a href="https://article.auone.jp/genre/1" className="js-analytics genre__name" data-ga-action="コンテンツ一覧" data-ga-label="コネタ">コネタ</a>
        </li>
        <li className="genre__item">
            <a href="/ranking/0" className="js-analytics genre__name" data-ga-action="コンテンツ一覧" data-ga-label="総合ランキング">総合ランキング</a>
        </li>
        <li className="genre__item">
            <a href="/keyword/genre/0" className="js-analytics genre__name" data-ga-action="コンテンツ一覧" data-ga-label="すべてのキーワード">すべてのキーワード</a>
        </li>
    </Items>
);

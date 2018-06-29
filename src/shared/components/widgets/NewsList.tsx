import React from "react";
import styled from "styled-components";
import { NewsItems } from "../parts/news/NewsItems";

const newsItems = [
    {
        id: "154_841804",
        genre_id: "1",
        sub_genre_id: "1",
        title: "衣装､ツアーの実物セットも！安室奈美恵の軌跡を辿る展覧会",
        credit: "レッツエンジョイ東京",
        publish_start: "2018-06-25 18:00:00",
        publish_end: "2018-08-24 18:00:00",
        deleted_flag: "0",
        updated_date: "2018-06-25 18:45:12",
        code: "82_1_r_20180625_1529918061653085",
        s_thumbnail: "https://stg.portal.st-img.jp/thumb/63d08d1ad6fb2626cecef18c4d4712a6_1529919912_s.jpg",
        s_filler: "https://stg.portal.st-img.jp/filler/1_1_s.jpg",
        m_thumbnail: "https://stg.portal.st-img.jp/thumb/63d08d1ad6fb2626cecef18c4d4712a6_1529919912_m.jpg",
        m_filler: "https://stg.portal.st-img.jp/filler/1_1_m.jpg",
        l_thumbnail: "https://stg.portal.st-img.jp/thumb/63d08d1ad6fb2626cecef18c4d4712a6_1529919912_l.jpg",
        l_filler: "https://stg.portal.st-img.jp/filler/1_1_l.jpg",
        url: "https://stg.article.auone.jp/detail/1/1/1/82_1_r_20180625_1529918061653085",
        keyword_id: "154",
        keyword_name: "安室奈美恵",
        size: "l"
    },
    {
        id: "154_841238",
        genre_id: "5",
        sub_genre_id: "9",
        title: "安室奈美恵の軌跡を辿る、アトラクション型展覧会開催決定",
        credit: "ドワンゴジェイピーnews",
        publish_start: "2018-06-25 12:32:49",
        publish_end: "2018-08-24 12:32:49",
        deleted_flag: "0",
        updated_date: "2018-06-25 12:36:23",
        code: "76_9_r_20180625_1529897783410280",
        s_thumbnail: "https://stg.portal.st-img.jp/thumb/8c1d7c19eda7c30bc203f2ae8d3153dc_1529897783_s.jpg",
        s_filler: "https://stg.portal.st-img.jp/filler/5_9_s.jpg",
        m_thumbnail: "https://stg.portal.st-img.jp/thumb/8c1d7c19eda7c30bc203f2ae8d3153dc_1529897783_m.jpg",
        m_filler: "https://stg.portal.st-img.jp/filler/5_9_m.jpg",
        l_thumbnail: "https://stg.portal.st-img.jp/thumb/8c1d7c19eda7c30bc203f2ae8d3153dc_1529897783_l.jpg",
        l_filler: "https://stg.portal.st-img.jp/filler/5_9_l.jpg",
        url: "https://stg.article.auone.jp/detail/1/5/9/76_9_r_20180625_1529897783410280",
        keyword_id: "154",
        keyword_name: "安室奈美恵",
        size: "col2"
    },
    {
        id: "154_841120",
        genre_id: "5",
        sub_genre_id: "9",
        title: "安室奈美恵　展覧会　アトラクション型の空間も",
        credit: "日刊スポーツ",
        publish_start: "2018-06-25 11:35:09",
        publish_end: "2018-07-05 11:35:09",
        deleted_flag: "0",
        updated_date: "2018-06-26 13:35:23",
        code: "108_9_r_20180625_1529894732062623",
        s_thumbnail: "https://stg.portal.st-img.jp/thumb/620ceed04573395feaabc615e4ebf90f_1529987722_s.jpg",
        s_filler: "https://stg.portal.st-img.jp/filler/5_9_s.jpg",
        m_thumbnail: "https://stg.portal.st-img.jp/thumb/620ceed04573395feaabc615e4ebf90f_1529987722_m.jpg",
        m_filler: "https://stg.portal.st-img.jp/filler/5_9_m.jpg",
        l_thumbnail: "https://stg.portal.st-img.jp/thumb/620ceed04573395feaabc615e4ebf90f_1529987722_l.jpg",
        l_filler: "https://stg.portal.st-img.jp/filler/5_9_l.jpg",
        url: "https://stg.article.auone.jp/detail/1/5/9/108_9_r_20180625_1529894732062623",
        keyword_id: "154",
        keyword_name: "安室奈美恵",
        size: "col2"
    },
    {
        id: "154_839355",
        genre_id: "5",
        sub_genre_id: "9",
        title: "安室奈美恵のラスト唱は沖縄か…伝説のエピローグにふさわしく、残すとこ３カ月弱",
        credit: "デイリースポーツ",
        publish_start: "2018-06-24 11:01:40",
        publish_end: "2018-07-01 11:01:40",
        deleted_flag: "0",
        updated_date: "2018-06-24 12:18:31",
        code: "17_9_r_20180624_1529805892058618",
        s_thumbnail: "https://stg.portal.st-img.jp/thumb/46b8196bc3d3956c3835b820673a1e36_1529810311_s.jpg",
        s_filler: "https://stg.portal.st-img.jp/filler/5_9_s.jpg",
        m_thumbnail: "https://stg.portal.st-img.jp/thumb/46b8196bc3d3956c3835b820673a1e36_1529810311_m.jpg",
        m_filler: "https://stg.portal.st-img.jp/filler/5_9_m.jpg",
        l_thumbnail: "https://stg.portal.st-img.jp/thumb/46b8196bc3d3956c3835b820673a1e36_1529810311_l.jpg",
        l_filler: "https://stg.portal.st-img.jp/filler/5_9_l.jpg",
        url: "https://stg.article.auone.jp/detail/1/5/9/17_9_r_20180624_1529805892058618",
        keyword_id: "154",
        keyword_name: "安室奈美恵",
        size: "m"
    },
    {
        id: "154_836747",
        genre_id: "5",
        sub_genre_id: "9",
        title: "安室奈美恵、「MORE」表紙2タイプでとびきりの笑顔　歴代カバーも掲載",
        credit: "クランクイン",
        publish_start: "2018-06-22 18:30:00",
        publish_end: "2018-08-21 18:30:00",
        deleted_flag: "0",
        updated_date: "2018-06-22 19:11:03",
        code: "36_9_r_20180622_1529662262877333",
        s_thumbnail: "https://stg.portal.st-img.jp/thumb/290788dadcef1f48bf01e7110e97b0ec_1529662262_s.jpg",
        s_filler: "https://stg.portal.st-img.jp/filler/5_9_s.jpg",
        m_thumbnail: "https://stg.portal.st-img.jp/thumb/290788dadcef1f48bf01e7110e97b0ec_1529662262_m.jpg",
        m_filler: "https://stg.portal.st-img.jp/filler/5_9_m.jpg",
        l_thumbnail: "https://stg.portal.st-img.jp/thumb/290788dadcef1f48bf01e7110e97b0ec_1529662262_l.jpg",
        l_filler: "https://stg.portal.st-img.jp/filler/5_9_l.jpg",
        url: "https://stg.article.auone.jp/detail/1/5/9/36_9_r_20180622_1529662262877333",
        keyword_id: "154",
        keyword_name: "安室奈美恵",
        size: "m"
    },
    {
        id: "154_833813",
        genre_id: "5",
        sub_genre_id: "9",
        title: "安室奈美恵、18年目でラストの『MORE』カバーはとびきりのスマイル",
        credit: "ORICON NEWS",
        publish_start: "2018-06-21 12:00:00",
        publish_end: "2018-08-20 12:00:00",
        deleted_flag: "0",
        updated_date: "2018-06-26 13:34:18",
        code: "20_9_r_20180621_1529550112185100",
        s_thumbnail: "https://stg.portal.st-img.jp/thumb/1c450f8bf26ea25049a3052c79fa7aed_1529987658_s.jpg",
        s_filler: "https://stg.portal.st-img.jp/filler/5_9_s.jpg",
        m_thumbnail: "https://stg.portal.st-img.jp/thumb/1c450f8bf26ea25049a3052c79fa7aed_1529987658_m.jpg",
        m_filler: "https://stg.portal.st-img.jp/filler/5_9_m.jpg",
        l_thumbnail: "https://stg.portal.st-img.jp/thumb/1c450f8bf26ea25049a3052c79fa7aed_1529987658_l.jpg",
        l_filler: "https://stg.portal.st-img.jp/filler/5_9_l.jpg",
        url: "https://stg.article.auone.jp/detail/1/5/9/20_9_r_20180621_1529550112185100",
        keyword_id: "154",
        keyword_name: "安室奈美恵",
        size: "m"
    },
    {
        id: "154_833821",
        genre_id: "5",
        sub_genre_id: "9",
        title: "安室奈美恵「MORE」最後の表紙でとびきり笑顔　同誌最長記録を樹立",
        credit: "モデルプレス",
        publish_start: "2018-06-21 12:00:00",
        publish_end: "2018-07-21 12:00:00",
        deleted_flag: "0",
        updated_date: "2018-06-21 12:03:42",
        code: "81_9_r_20180621_1529550222417888",
        s_thumbnail: "https://stg.portal.st-img.jp/thumb/33323cba80c19f3ee3d4bcd58a6341e1_1529550222_s.jpg",
        s_filler: "https://stg.portal.st-img.jp/filler/5_9_s.jpg",
        m_thumbnail: "https://stg.portal.st-img.jp/thumb/33323cba80c19f3ee3d4bcd58a6341e1_1529550222_m.jpg",
        m_filler: "https://stg.portal.st-img.jp/filler/5_9_m.jpg",
        l_thumbnail: "https://stg.portal.st-img.jp/thumb/33323cba80c19f3ee3d4bcd58a6341e1_1529550222_l.jpg",
        l_filler: "https://stg.portal.st-img.jp/filler/5_9_l.jpg",
        url: "https://stg.article.auone.jp/detail/1/5/9/81_9_r_20180621_1529550222417888",
        keyword_id: "154",
        keyword_name: "安室奈美恵",
        size: "m"
    },
    {
        id: "154_830983",
        genre_id: "5",
        sub_genre_id: "9",
        title: "安室奈美恵　コーセー最後のテレビＣＭ、２２日から放送　集大成に",
        credit: "スポニチ",
        publish_start: "2018-06-20 05:33:00",
        publish_end: "2018-07-04 05:33:00",
        deleted_flag: "0",
        updated_date: "2018-06-20 06:15:23",
        code: "8_9_r_20180620_1529440881681287",
        s_thumbnail: "",
        s_filler: "https://stg.portal.st-img.jp/filler/5_9_s.jpg",
        m_thumbnail: "",
        m_filler: "https://stg.portal.st-img.jp/filler/5_9_m.jpg",
        l_thumbnail: "",
        l_filler: "https://stg.portal.st-img.jp/filler/5_9_l.jpg",
        url: "https://stg.article.auone.jp/detail/1/5/9/8_9_r_20180620_1529440881681287",
        keyword_id: "154",
        keyword_name: "安室奈美恵",
        size: "m"
    },
    {
        id: "154_830763",
        genre_id: "1",
        sub_genre_id: "1",
        title: "安室奈美恵、“自分らしさ”を徹底追及! 最後のコーセーCM公開",
        credit: "マイナビニュース",
        publish_start: "2018-06-20 00:01:11",
        publish_end: "2018-08-19 00:01:11",
        deleted_flag: "0",
        updated_date: "2018-06-20 00:01:52",
        code: "37_1_r_20180620_1529420511853368",
        s_thumbnail: "https://stg.portal.st-img.jp/thumb/4e22a29ee42f78cd3c042ea2e632acff_1529420511_s.jpg",
        s_filler: "https://stg.portal.st-img.jp/filler/1_1_s.jpg",
        m_thumbnail: "https://stg.portal.st-img.jp/thumb/4e22a29ee42f78cd3c042ea2e632acff_1529420511_m.jpg",
        m_filler: "https://stg.portal.st-img.jp/filler/1_1_m.jpg",
        l_thumbnail: "https://stg.portal.st-img.jp/thumb/4e22a29ee42f78cd3c042ea2e632acff_1529420511_l.jpg",
        l_filler: "https://stg.portal.st-img.jp/filler/1_1_l.jpg",
        url: "https://stg.article.auone.jp/detail/1/1/1/37_1_r_20180620_1529420511853368",
        keyword_id: "154",
        keyword_name: "安室奈美恵",
        size: "m"
    },
    {
        id: "154_821678",
        genre_id: "1",
        sub_genre_id: "1",
        title: "【ご予約方法のお知らせ】安室奈美恵　8/29発売 LIVE DVD・Blu-rayのTSUTAYAプレミアムご利用者限定特典「クリアシート付きフォトフレーム」が決定！ご予約は7月3日（火）～",
        credit: "T-SITE",
        publish_start: "2018-06-14 12:06:31",
        publish_end: "2018-08-13 12:06:31",
        deleted_flag: "0",
        updated_date: "2018-06-15 10:01:04",
        code: "58_1_r_20180615_1529024464004650",
        s_thumbnail: "https://stg.portal.st-img.jp/thumb/6136df20bfb68de9308d4d7dc46cbf89_1529024464_s.jpg",
        s_filler: "https://stg.portal.st-img.jp/filler/1_1_s.jpg",
        m_thumbnail: "https://stg.portal.st-img.jp/thumb/6136df20bfb68de9308d4d7dc46cbf89_1529024464_m.jpg",
        m_filler: "https://stg.portal.st-img.jp/filler/1_1_m.jpg",
        l_thumbnail: "https://stg.portal.st-img.jp/thumb/6136df20bfb68de9308d4d7dc46cbf89_1529024464_l.jpg",
        l_filler: "https://stg.portal.st-img.jp/filler/1_1_l.jpg",
        url: "https://stg.article.auone.jp/detail/1/1/1/58_1_r_20180615_1529024464004650",
        keyword_id: "154",
        keyword_name: "安室奈美恵",
        size: "s"
    },
    {
        id: "154_818254",
        genre_id: "5",
        sub_genre_id: "9",
        title: "安室奈美恵のファイナル総力特集　“最後のガールズトーク”で今まで振り返る",
        credit: "モデルプレス",
        publish_start: "2018-06-13 16:49:58",
        publish_end: "2018-07-13 16:49:58",
        deleted_flag: "0",
        updated_date: "2018-06-13 17:03:22",
        code: "81_9_r_20180613_1528877001669824",
        s_thumbnail: "https://stg.portal.st-img.jp/thumb/f029cd39498919726de7f087c4069cd7_1528877001_s.jpg",
        s_filler: "https://stg.portal.st-img.jp/filler/5_9_s.jpg",
        m_thumbnail: "https://stg.portal.st-img.jp/thumb/f029cd39498919726de7f087c4069cd7_1528877001_m.jpg",
        m_filler: "https://stg.portal.st-img.jp/filler/5_9_m.jpg",
        l_thumbnail: "https://stg.portal.st-img.jp/thumb/f029cd39498919726de7f087c4069cd7_1528877001_l.jpg",
        l_filler: "https://stg.portal.st-img.jp/filler/5_9_l.jpg",
        url: "https://stg.article.auone.jp/detail/1/5/9/81_9_r_20180613_1528877001669824",
        keyword_id: "154",
        keyword_name: "安室奈美恵",
        size: "s"
    },
    {
        id: "154_817531",
        genre_id: "5",
        sub_genre_id: "9",
        title: "安室奈美恵、涙のファイナルツアー終了！　最高の笑顔で「バイバーイ!!」",
        credit: "週刊女性PRIME",
        publish_start: "2018-06-13 11:00:00",
        publish_end: "2018-07-13 11:00:00",
        deleted_flag: "0",
        updated_date: "2018-06-22 14:37:31",
        code: "100_9_r_20180613_1528855212526711",
        s_thumbnail: "https://stg.portal.st-img.jp/thumb/8260c78c3f82c173c78785974d9e81a5_1529645850_s.jpg",
        s_filler: "https://stg.portal.st-img.jp/filler/5_9_s.jpg",
        m_thumbnail: "https://stg.portal.st-img.jp/thumb/8260c78c3f82c173c78785974d9e81a5_1529645850_m.jpg",
        m_filler: "https://stg.portal.st-img.jp/filler/5_9_m.jpg",
        l_thumbnail: "https://stg.portal.st-img.jp/thumb/8260c78c3f82c173c78785974d9e81a5_1529645850_l.jpg",
        l_filler: "https://stg.portal.st-img.jp/filler/5_9_l.jpg",
        url: "https://stg.article.auone.jp/detail/1/5/9/100_9_r_20180613_1528855212526711",
        keyword_id: "154",
        keyword_name: "安室奈美恵",
        size: "s"
    },
    {
        id: "154_812007",
        genre_id: "5",
        sub_genre_id: "9",
        title: "『イッテQ！』、安室奈美恵への“愛”を語るイモトに大反響「めちゃくちゃ輝いてる！」",
        credit: "日刊大衆",
        publish_start: "2018-06-10 11:30:00",
        publish_end: "2018-08-09 11:30:00",
        deleted_flag: "0",
        updated_date: "2018-06-10 11:31:43",
        code: "77_9_r_20180610_1528597902816742",
        s_thumbnail: "",
        s_filler: "https://stg.portal.st-img.jp/filler/5_9_s.jpg",
        m_thumbnail: "",
        m_filler: "https://stg.portal.st-img.jp/filler/5_9_m.jpg",
        l_thumbnail: "",
        l_filler: "https://stg.portal.st-img.jp/filler/5_9_l.jpg",
        url: "https://stg.article.auone.jp/detail/1/5/9/77_9_r_20180610_1528597902816742",
        keyword_id: "154",
        keyword_name: "安室奈美恵",
        size: "s"
    },
    {
        id: "154_811502",
        genre_id: "5",
        sub_genre_id: "9",
        title: "安室奈美恵の曲を熱唱、沢尻エリカ“アイドル姿”に高まる期待",
        credit: "日刊大衆",
        publish_start: "2018-06-10 01:00:00",
        publish_end: "2018-08-09 01:00:00",
        deleted_flag: "0",
        updated_date: "2018-06-10 01:02:33",
        code: "77_9_r_20180610_1528560152729943",
        s_thumbnail: "",
        s_filler: "https://stg.portal.st-img.jp/filler/5_9_s.jpg",
        m_thumbnail: "",
        m_filler: "https://stg.portal.st-img.jp/filler/5_9_m.jpg",
        l_thumbnail: "",
        l_filler: "https://stg.portal.st-img.jp/filler/5_9_l.jpg",
        url: "https://stg.article.auone.jp/detail/1/5/9/77_9_r_20180610_1528560152729943",
        keyword_id: "154",
        keyword_name: "安室奈美恵",
        size: "s"
    },
    {
        id: "154_809496",
        genre_id: "1",
        sub_genre_id: "1",
        title: "安室奈美恵の引退日までの時間刻む　AbemaTVカウントダウン企画スタート",
        credit: "マイナビニュース",
        publish_start: "2018-06-08 19:24:21",
        publish_end: "2018-08-07 19:24:21",
        deleted_flag: "0",
        updated_date: "2018-06-08 19:25:42",
        code: "37_1_r_20180608_1528453542350103",
        s_thumbnail: "https://stg.portal.st-img.jp/thumb/7797394175035b9f0e0fec583882d3f0_1528453542_s.jpg",
        s_filler: "https://stg.portal.st-img.jp/filler/1_1_s.jpg",
        m_thumbnail: "https://stg.portal.st-img.jp/thumb/7797394175035b9f0e0fec583882d3f0_1528453542_m.jpg",
        m_filler: "https://stg.portal.st-img.jp/filler/1_1_m.jpg",
        l_thumbnail: "https://stg.portal.st-img.jp/thumb/7797394175035b9f0e0fec583882d3f0_1528453542_l.jpg",
        l_filler: "https://stg.portal.st-img.jp/filler/1_1_l.jpg",
        url: "https://stg.article.auone.jp/detail/1/1/1/37_1_r_20180608_1528453542350103",
        keyword_id: "154",
        keyword_name: "安室奈美恵",
        size: "s"
    },
    {
        id: "154_808557",
        genre_id: "5",
        sub_genre_id: "9",
        title: "AbemaTV、安室奈美恵の引退日までのカウントダウンプロジェクト発足",
        credit: "モデルプレス",
        publish_start: "2018-06-08 11:16:24",
        publish_end: "2018-07-08 11:16:24",
        deleted_flag: "0",
        updated_date: "2018-06-08 11:33:22",
        code: "81_9_r_20180608_1528424302487976",
        s_thumbnail: "https://stg.portal.st-img.jp/thumb/8d9ed08b8bed766092c992098f6355a8_1528425201_s.jpg",
        s_filler: "https://stg.portal.st-img.jp/filler/5_9_s.jpg",
        m_thumbnail: "https://stg.portal.st-img.jp/thumb/8d9ed08b8bed766092c992098f6355a8_1528425201_m.jpg",
        m_filler: "https://stg.portal.st-img.jp/filler/5_9_m.jpg",
        l_thumbnail: "https://stg.portal.st-img.jp/thumb/8d9ed08b8bed766092c992098f6355a8_1528425201_l.jpg",
        l_filler: "https://stg.portal.st-img.jp/filler/5_9_l.jpg",
        url: "https://stg.article.auone.jp/detail/1/5/9/81_9_r_20180608_1528424302487976",
        keyword_id: "154",
        keyword_name: "安室奈美恵",
        size: "s"
    },
    {
        id: "154_808405",
        genre_id: "5",
        sub_genre_id: "9",
        title: "AbemaTV、安室奈美恵の引退日までのカウントダウン開始",
        credit: "ORICON NEWS",
        publish_start: "2018-06-08 10:10:55",
        publish_end: "2018-08-07 10:10:55",
        deleted_flag: "0",
        updated_date: "2018-06-09 18:22:38",
        code: "20_9_r_20180608_1528420342498788",
        s_thumbnail: "https://stg.portal.st-img.jp/thumb/fbd40555ce9668294c58e13a8f0ec83f_1528536158_s.jpg",
        s_filler: "https://stg.portal.st-img.jp/filler/5_9_s.jpg",
        m_thumbnail: "https://stg.portal.st-img.jp/thumb/fbd40555ce9668294c58e13a8f0ec83f_1528536158_m.jpg",
        m_filler: "https://stg.portal.st-img.jp/filler/5_9_m.jpg",
        l_thumbnail: "https://stg.portal.st-img.jp/thumb/fbd40555ce9668294c58e13a8f0ec83f_1528536158_l.jpg",
        l_filler: "https://stg.portal.st-img.jp/filler/5_9_l.jpg",
        url: "https://stg.article.auone.jp/detail/1/5/9/20_9_r_20180608_1528420342498788",
        keyword_id: "154",
        keyword_name: "安室奈美恵",
        size: "s"
    },
    {
        id: "154_806680",
        genre_id: "5",
        sub_genre_id: "9",
        title: "木下優樹菜、安室奈美恵ラストツアーで号泣した名シーン明かす「安室ちゃんがいる世代に生まれてよかった」",
        credit: "モデルプレス",
        publish_start: "2018-06-07 13:59:31",
        publish_end: "2018-07-07 13:59:31",
        deleted_flag: "0",
        updated_date: "2018-06-07 14:35:22",
        code: "81_9_r_20180607_1528347872020550",
        s_thumbnail: "https://stg.portal.st-img.jp/thumb/fcc5bf34f4a19e75c6a5c31c5c45ffbb_1528349722_s.jpg",
        s_filler: "https://stg.portal.st-img.jp/filler/5_9_s.jpg",
        m_thumbnail: "https://stg.portal.st-img.jp/thumb/fcc5bf34f4a19e75c6a5c31c5c45ffbb_1528349722_m.jpg",
        m_filler: "https://stg.portal.st-img.jp/filler/5_9_m.jpg",
        l_thumbnail: "https://stg.portal.st-img.jp/thumb/fcc5bf34f4a19e75c6a5c31c5c45ffbb_1528349722_l.jpg",
        l_filler: "https://stg.portal.st-img.jp/filler/5_9_l.jpg",
        url: "https://stg.article.auone.jp/detail/1/5/9/81_9_r_20180607_1528347872020550",
        keyword_id: "154",
        keyword_name: "安室奈美恵",
        size: "s"
    },
    {
        id: "154_805102",
        genre_id: "1",
        sub_genre_id: "1",
        title: "安室奈美恵、「本当の引退ライブツアーがこれから始まる」という噂の根拠！",
        credit: "アサ芸プラス",
        publish_start: "2018-06-06 18:00:17",
        publish_end: "2018-08-05 18:00:17",
        deleted_flag: "0",
        updated_date: "2018-06-06 18:01:43",
        code: "42_1_r_20180606_1528275702792820",
        s_thumbnail: "https://stg.portal.st-img.jp/thumb/a3545928404412336b8e9c28c11fc124_1528275702_s.jpg",
        s_filler: "https://stg.portal.st-img.jp/filler/1_1_s.jpg",
        m_thumbnail: "https://stg.portal.st-img.jp/thumb/a3545928404412336b8e9c28c11fc124_1528275702_m.jpg",
        m_filler: "https://stg.portal.st-img.jp/filler/1_1_m.jpg",
        l_thumbnail: "https://stg.portal.st-img.jp/thumb/a3545928404412336b8e9c28c11fc124_1528275702_l.jpg",
        l_filler: "https://stg.portal.st-img.jp/filler/1_1_l.jpg",
        url: "https://stg.article.auone.jp/detail/1/1/1/42_1_r_20180606_1528275702792820",
        keyword_id: "154",
        keyword_name: "安室奈美恵",
        size: "ss"
    },
    {
        id: "154_804524",
        genre_id: "5",
        sub_genre_id: "9",
        title: "安室奈美恵、ラストツアー公演で「NOドリンク」最後まで貫くストイックな姿勢に大貫亜美も驚く「あんなに歌って踊って…」",
        credit: "モデルプレス",
        publish_start: "2018-06-06 12:06:10",
        publish_end: "2018-07-06 12:06:10",
        deleted_flag: "0",
        updated_date: "2018-06-06 12:19:04",
        code: "81_9_r_20180606_1528255143673084",
        s_thumbnail: "https://stg.portal.st-img.jp/thumb/a0465af5b93fe9acf99816908ef851cc_1528255143_s.jpg",
        s_filler: "https://stg.portal.st-img.jp/filler/5_9_s.jpg",
        m_thumbnail: "https://stg.portal.st-img.jp/thumb/a0465af5b93fe9acf99816908ef851cc_1528255143_m.jpg",
        m_filler: "https://stg.portal.st-img.jp/filler/5_9_m.jpg",
        l_thumbnail: "https://stg.portal.st-img.jp/thumb/a0465af5b93fe9acf99816908ef851cc_1528255143_l.jpg",
        l_filler: "https://stg.portal.st-img.jp/filler/5_9_l.jpg",
        url: "https://stg.article.auone.jp/detail/1/5/9/81_9_r_20180606_1528255143673084",
        keyword_id: "154",
        keyword_name: "安室奈美恵",
        size: "ss"
    },
    {
        id: "154_803389",
        genre_id: "5",
        sub_genre_id: "9",
        title: "沢尻エリカ、安室奈美恵の楽曲を歌って踊る「本当に大変だった」＜猫は抱くもの＞",
        credit: "モデルプレス",
        publish_start: "2018-06-05 20:56:43",
        publish_end: "2018-07-05 20:56:43",
        deleted_flag: "0",
        updated_date: "2018-06-05 22:18:52",
        code: "81_9_r_20180605_1528200342122678",
        s_thumbnail: "https://stg.portal.st-img.jp/thumb/d61387c571b267a3213cd4f01ba08c04_1528204732_s.jpg",
        s_filler: "https://stg.portal.st-img.jp/filler/5_9_s.jpg",
        m_thumbnail: "https://stg.portal.st-img.jp/thumb/d61387c571b267a3213cd4f01ba08c04_1528204732_m.jpg",
        m_filler: "https://stg.portal.st-img.jp/filler/5_9_m.jpg",
        l_thumbnail: "https://stg.portal.st-img.jp/thumb/d61387c571b267a3213cd4f01ba08c04_1528204732_l.jpg",
        l_filler: "https://stg.portal.st-img.jp/filler/5_9_l.jpg",
        url: "https://stg.article.auone.jp/detail/1/5/9/81_9_r_20180605_1528200342122678",
        keyword_id: "154",
        keyword_name: "安室奈美恵",
        size: "ss"
    },
    {
        id: "154_801973",
        genre_id: "5",
        sub_genre_id: "9",
        title: "安室奈美恵、息子への思いを告白　引退後のプランは？",
        credit: "モデルプレス",
        publish_start: "2018-06-05 08:33:19",
        publish_end: "2018-07-05 08:33:19",
        deleted_flag: "0",
        updated_date: "2018-06-15 21:34:17",
        code: "81_9_r_20180605_1528156122244189",
        s_thumbnail: "https://stg.portal.st-img.jp/thumb/471204815fff258985c434cb26696093_1529066057_s.jpg",
        s_filler: "https://stg.portal.st-img.jp/filler/5_9_s.jpg",
        m_thumbnail: "https://stg.portal.st-img.jp/thumb/471204815fff258985c434cb26696093_1529066057_m.jpg",
        m_filler: "https://stg.portal.st-img.jp/filler/5_9_m.jpg",
        l_thumbnail: "https://stg.portal.st-img.jp/thumb/471204815fff258985c434cb26696093_1529066057_l.jpg",
        l_filler: "https://stg.portal.st-img.jp/filler/5_9_l.jpg",
        url: "https://stg.article.auone.jp/detail/1/5/9/81_9_r_20180605_1528156122244189",
        keyword_id: "154",
        keyword_name: "安室奈美恵",
        size: "ss"
    },
    {
        id: "154_801286",
        genre_id: "5",
        sub_genre_id: "9",
        title: "「感謝しかない」　安室奈美恵のツアーファイナルに長谷川京子、ヨンア、木下優樹菜ら芸能界のアムラー大集合！",
        credit: "ねとらぼ",
        publish_start: "2018-06-04 20:13:39",
        publish_end: "2018-09-02 20:13:39",
        deleted_flag: "0",
        updated_date: "2018-06-04 20:18:42",
        code: "88_9_r_20180604_1528111121936780",
        s_thumbnail: "https://stg.portal.st-img.jp/thumb/e550890f9b152905eec05cf8c37b726f_1528111121_s.jpg",
        s_filler: "https://stg.portal.st-img.jp/filler/5_9_s.jpg",
        m_thumbnail: "https://stg.portal.st-img.jp/thumb/e550890f9b152905eec05cf8c37b726f_1528111121_m.jpg",
        m_filler: "https://stg.portal.st-img.jp/filler/5_9_m.jpg",
        l_thumbnail: "https://stg.portal.st-img.jp/thumb/e550890f9b152905eec05cf8c37b726f_1528111121_l.jpg",
        l_filler: "https://stg.portal.st-img.jp/filler/5_9_l.jpg",
        url: "https://stg.article.auone.jp/detail/1/5/9/88_9_r_20180604_1528111121936780",
        keyword_id: "154",
        keyword_name: "安室奈美恵",
        size: "ss"
    },
    {
        id: "154_801080",
        genre_id: "5",
        sub_genre_id: "9",
        title: "安室奈美恵、最後の全国ツアー完走　公演収録のDVDも発売決定",
        credit: "クランクイン",
        hash_timestamp: null,
        publish_start: "2018-06-04 17:30:00",
        publish_end: "2018-08-03 17:30:00",
        deleted_flag: "0",
        updated_date: "2018-06-04 18:17:33",
        code: "36_9_r_20180604_1528103852625863",
        s_thumbnail: "https://stg.portal.st-img.jp/thumb/b7e96f61f61cb41750c598a6cdcf8977_1528103852_s.jpg",
        s_filler: "https://stg.portal.st-img.jp/filler/5_9_s.jpg",
        m_thumbnail: "https://stg.portal.st-img.jp/thumb/b7e96f61f61cb41750c598a6cdcf8977_1528103852_m.jpg",
        m_filler: "https://stg.portal.st-img.jp/filler/5_9_m.jpg",
        l_thumbnail: "https://stg.portal.st-img.jp/thumb/b7e96f61f61cb41750c598a6cdcf8977_1528103852_l.jpg",
        l_filler: "https://stg.portal.st-img.jp/filler/5_9_l.jpg",
        url: "https://stg.article.auone.jp/detail/1/5/9/36_9_r_20180604_1528103852625863",
        keyword_id: "154",
        keyword_name: "安室奈美恵",
        size: "ss"

    }
];

const  NewsItemsFirst = styled.section`
    max-width: 414px;
    margin: 0 auto;
`;

interface NewsListItemState {
    id: string,
    genre_id: string,
    sub_genre_id: string,
    title: string,
    credit: string,
    deleted_flag: string,
    updated_date: string,
    code: string,
    s_thumbnail: string,
    s_filler: string,
    m_thumbnail: string,
    m_filler: string,
    l_thumbnail: string,
    l_filler: string,
    url: string,
    keyword_id: string,
    keyword_name: string,
    size: string,
}

interface NewsListItemsState {
    newsItems: NewsListItemState[];
}

export default class NewsList extends React.Component<{}, NewsListItemsState> {

    constructor(props) {
        super(props);
        this.state = {
            newsItems
        };
    }

    public render(): React.ReactNode {
        return (
            <NewsItemsFirst>
                <NewsItems newsItems={this.state.newsItems} />
            </NewsItemsFirst>
        );
    }
}
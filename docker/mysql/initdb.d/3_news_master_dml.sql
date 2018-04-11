#
# マスタ系のデータ投入用のDML定義ファイル
#
USE `eden` ;

# テーブルのダンプ category
# ------------------------------------------------------------
INSERT INTO `category` (`id`, `name`, `priority`, `deleted_flag`, `created_user_id`, `updated_user_id`)
VALUES
    (1,'主要',10,0,1,1),
    (2,'国内',9,0,1,1),
    (3,'経済・IT',8,0,1,1),
    (4,'国際',7,0,1,1),
    (5,'芸能',6,0,1,1),
    (6,'スポーツ',5,0,1,1),
    (7,'コネタ',4,0,1,1),
    (8,'ライフトピックス',3,1,1,1);


# テーブルのダンプ genre
# ------------------------------------------------------------
INSERT INTO `genre` (`id`, `category_id`, `name`, `priority`, `deleted_flag`, `created_user_id`, `updated_user_id`)
VALUES
    (1,7,'コネタ',5,0,1,1),
    (2,2,'国内',10,0,1,1),
    (3,3,'経済・IT',9,0,1,1),
    (4,4,'国際',8,0,1,1),
    (5,5,'芸能',7,0,1,1),
    (6,6,'スポーツ',6,0,1,1),
    (7,8,'ライフトピックス',4,1,1,1);

# テーブルのダンプ sub_genre
# ------------------------------------------------------------
INSERT INTO `sub_genre` (`id`, `genre_id`, `rss_genre_id`, `name`, `priority`, `deleted_flag`, `created_user_id`, `updated_user_id`)
VALUES
    (1,1,91,'コネタ',10,0,1,1),
    (2,2,101,'社会',10,0,1,1),
    (3,2,102,'政治',9,0,1,1),
    (4,2,103,'文化・科学',8,0,1,1),
    (5,2,104,'地域',7,0,1,1),
    (6,3,201,'経済',10,0,1,1),
    (7,3,202,'IT',9,0,1,1),
    (8,4,301,'国際',10,0,1,1),
    (9,5,401,'芸能',10,0,1,1),
    (10,6,501,'野球',10,0,1,1),
    (11,6,502,'サッカー',9,0,1,1),
    (12,6,503,'その他',8,0,1,1),
    (13,7,601,'ライフトピックス',10,1,1,1);

# テーブルのダンプ user
# ------------------------------------------------------------
INSERT INTO `user` (`id`, `username`, `password`, `mail_address`, `deleted_flag`, `created_user_id`, `updated_user_id`, `created_date`, `updated_date`)
VALUES
    (1,'admin','$2y$13$A9u0j3Dt64n0rZi/9/jYxe3YpEcFbU2UYmQ0nPyqioNsqTneEMtYK','DdFL43T5q36nFyatMaRHm25PSs7WrBX5CWWTTDeO6Dw=',0,1,1,'2016-10-10 00:00:00','2016-10-10 00:00:00'),
    (2,'batch','$2y$13$A9u0j3Dt64n0rZi/9/jYxe3YpEcFbU2UYmQ0nPyqioNsqTneEMtYK','DdFL43T5q36nFyatMaRHm25PSs7WrBX5CWWTTDeO6Dw=',0,1,1,'2016-10-10 00:00:00','2016-10-10 00:00:00');

# テーブルのダンプ auth_assignment
# ------------------------------------------------------------
INSERT INTO `auth_assignment` (`item_name`, `user_id`, `created_at`)
VALUES
    ('admin',1,1);

# テーブルのダンプ auth_item
# ------------------------------------------------------------
INSERT INTO `auth_item` (`name`, `type`, `description`, `rule_name`, `data`, `created_at`, `updated_at`)
VALUES
    ('admin',2,'',NULL,NULL,1,1),
    ('ad_editor',2,'',NULL,NULL,1,1),
    ('article_admin',2,'',NULL,NULL,1,1),
    ('article_editor',2,'',NULL,NULL,1,1);

# テーブルのダンプ auth_item_child
# ------------------------------------------------------------
INSERT INTO `auth_item_child` (`parent`, `child`)
VALUES
    ('admin','ad_editor'),
    ('admin','article_admin'),
    ('article_admin','article_editor');

# テーブルのダンプ article_block
# ------------------------------------------------------------
INSERT INTO `article_block` (`id`, `name`, `code`, `label`)
VALUES
    (1,'本文ブロック','body', '本文'),
    (2,'画像ブロック','image', '画像'),
    (3,'見出しブロック','head', '見出し'),
    (4,'小見出しブロック','time', '小見出し'),
    (5,'サマリーブロック','summary', 'サマリー'),
    (6,'本文引用ブロック','quotation', '本文引用'),
    (7,'検索式関連リンク','search_formula', '検索式'),
    (8,'余白ブロック','partition', '余白'),
    (9,'編集部関連リンク【URL】','link_url', '編集部関連リンク【URL】'),
    (10,'編集部関連リンク【記事ID】','link_article_id', '編集部関連リンク【記事ID】'),
    (11,'編集部関連リンク【タグ埋め込み】','link_html', '編集部関連リンク【タグ埋め込み】');


# テーブルのダンプ cp
# ------------------------------------------------------------
INSERT INTO `cp` (`id`, `code`, `name`, `article_expire`, `rss_url`, `rss_type`, `interval`, `post_start_date`, `widget_use_flag`, `article_create_flag`, `image_name`, `deleted_flag`, `created_user_id`, `updated_user_id`)
VALUES
    (1,"pos","NEWSポストセブン",30,"http://www3.asahi.com/rss/au/postseven/rss.xml",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (2,"ji1","時事通信社",6,"http://www3.asahi.com/rss/au/jiji/rss.xml",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (3,"ji2","時事通信社",6,"http://www3.asahi.com/rss/au/jiji_sports/rss.xml",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (4,"ji3","時事通信社",6,"http://www3.asahi.com/rss/au/jiji_social/rss.xml",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (5,"ji4","時事通信社",6,"http://www3.asahi.com/rss/au/jiji_international/rss.xml",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (6,"to5","東洋経済オンライン",60,"http://www3.asahi.com/rss/au/toyo/rss.xml",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (7,"spo","スポニチ",14,"http://www3.asahi.com/rss/au/sponichi/rss.xml",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (8,"sa1","産経新聞",14,"http://www3.asahi.com/rss/au/sankei/rssaffairs.xml",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (9,"sa2","産経新聞",14,"http://www3.asahi.com/rss/au/sankei/rsspolitics.xml",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (10,"sa3","産経新聞",14,"http://www3.asahi.com/rss/au/sankei/rsseconomy.xml",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (11,"sa4","産経新聞",14,"http://www3.asahi.com/rss/au/sankei/rssworld.xml",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (12,"sa5","産経新聞",14,"http://www3.asahi.com/rss/au/sankei/rsslife.xml",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (13,"sa6","産経新聞",14,"http://www3.asahi.com/rss/au/sankei/rsswest.xml",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (14,"sa7","産経新聞",14,"http://www3.asahi.com/rss/au/sankei/rsspremium.xml",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (15,"asa","朝日新聞",7,"http://www3.asahi.com/rss/au/asahi/rss.rdf",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (16,"dai","デイリースポーツ",7,"http://www3.asahi.com/rss/au/dailysports/rss.xml",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (17,"res","レスキューナウ",7,"http://www3.asahi.com/rss/au/rescue/rss.xml",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (18,"ben","弁護士ドットコム",60,"https://www.bengo4.com/api/topics/feed/aukoneta",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (19,"ori","ORICON NEWS",60,"http://news.oricon.co.jp/feed/au/news_web_portal_oriconnews.xml",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (20,"sti","Sportiva",60,"https://sportiva.shueisha.co.jp/rss_au_v2.xml",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (21,"wpb","週刊プレイボーイ",60,"http://wpb.shueisha.co.jp/information/feeds/au.xml",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (22,"yak","野球太郎",60,"http://yakyutaro.jp/new_au.php",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (23,"sck","サッカーキング",60,"https://www.soccer-king.jp/rss/au2.xml",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (24,"bbk","ベースボールキング",60,"https://baseballking.jp/rss/au2.xml",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (25,"bkk","バスケットボールキング",60,"https://basketballking.jp/rss/au2.xml",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (26,"al1","All About(人気記事)",30,"http://s3-ap-northeast-1.amazonaws.com/feed.allabout.co.jp/xml/au/au_news.xml",2,30,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (27,"al2","All About(金融記事)",30,"http://s3-ap-northeast-1.amazonaws.com/feed.allabout.co.jp/xml/au/au_finance.xml",2,30,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (28,"int","インターネットコム",60,"https://internetcom.jp/web/xml/au_koneta2.rss",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (29,"log","logmi(ログミー)",30,"http://logmi.jp/feed/au-webportal.xml",2,30,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (30,"cli","clicccar",60,"http://clicccar.com/feed/?type=au",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (31,"php","PHPビジネスオンライン衆知",60,"http://shuchi.php.co.jp/au/rss",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (32,"giz","GIZMODO",60,"http://www.gizmodo.jp/au_feed2.xml",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (33,"lif","Lifehacker",60,"http://www.lifehacker.jp/au_feed2.xml",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (34,"rmi","roomie",60,"http://www.roomie.jp/_au/rss_au_index2.php",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (35,"okm","OKMusic",60,"http://okmusic.jp/news_api/au_koneta.xml",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (36,"crk","クランクイン",60,"http://www-org.crank-in.net/rss/aunews/data.xml",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (37,"myn","マイナビニュース",60,"http://pub.news.mynavi.jp/feeds/aunews2/index.xml",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (38,"myw","マイナビウーマン",60,"http://woman.mynavi.jp/wp-content/uploads/xml/au.xml",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (39,"mys","マイナビスチューデント",60,"http://student.mynavi.jp/xml/au.php",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (40,"eip","エイ出版",60,"https://www.ei-publishing.co.jp/?feed=aukoneta",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (41,"cat","cataso",60,"http://cataso.jp/rss_kddi/",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (42,"spa","日刊SPA！",30,"http://nikkan-spa.jp/new_au_smartpass_feed_xml",1,30,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (43,"asg","アサ芸プラス",60,"http://www.asagei.com/feed?site=au",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (44,"asj","アサジョ",60,"http://asajo.jp/feed?site=au",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (45,"gnw","ガジェット通信",60,"http://getnews.jp/feed/ext/auone",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (46,"bec","Beauty & Co.",60,"http://www.beauty-co.jp/news/feed/rss_for_au_news.rss",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (47,"cam","camily",60,"http://deliver.camily.jp/feeds/au_koneta/rss2.xml",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (48,"dom","Doctors Me",60,"https://doctors-me.com/rss/column_au_news.xml",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (49,"gig","GIGAZINE",60,"http://gigazine.net/news/rss_atom_au_7awtgdxd/",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (50,"hmt","Hot Mama Town",60,"http://sakuramama.jp/feed?type=au",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (51,"ccj","CanCam.jp",60,"https://cancam.jp/feed?type=auweb",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (52,"bir","美レンジャー",60,"http://www.biranger.jp/feed?type=au",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (53,"ign","IGNITE",60,"http://ignite.jp/feed/?type=au",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (54,"itm","IT Mama",60,"http://itmama.jp/feed/?type=au",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (55,"wmy","Woman Money",60,"http://mmmedia.jp/feed?type=au",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (56,"lme","シェアしたくなる法律相談所",60,"http://lmedia.jp/feed?type=au",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (57,"moc","Mocosuku",60,"http://mocosuku.com/rss/suppliers/au/my_rss.php?t=1",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (58,"nap","nanapi",60,"http://nanapi.jp/distributions/feed/style:auone",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (59,"ozm","ozmall",60,"http://wss.ozmall.co.jp/newsfeed/20141217/WSOzForAu.svc/",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (60,"tst","T-SITE",60,"http://top.tsite.jp/rss?type=au",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (61,"ani","アニメイトタイムズ",60,"http://www.animate.tv/rss/rss_au_news.xml",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (62,"ixl","イクシル",60,"http://ixil.info/dist/auone",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (63,"pia","ウレぴあ総研",60,"http://ure.pia.co.jp/list/feed/rss4aukoneta",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (64,"ckp","クックパッド",30,"http://cookpad-news.jp/feeds/au.rss",1,30,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (65,"suu","SUUMOジャーナル",60,"http://r-feed.jp/sites/7/feed/12.xml",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (66,"tab","TABROOM NEWS",60,"http://r-feed.jp/sites/3/feed/12.xml",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (67,"jal","じゃらんnews",60,"http://r-feed.jp/sites/1/feed/12.xml",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (68,"sap","受験サプリ",60,"http://r-feed.jp/sites/12/feed/12.xml",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (69,"zex","セキララゼクシィ",60,"http://r-feed.jp/sites/8/feed/12.xml",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (70,"zek","ゼクシイキッチン",60,"http://r-feed.jp/sites/11/feed/12.xml",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (71,"mes","メシ通",60,"http://r-feed.jp/sites/5/feed/12.xml",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (72,"nex","リクナビNEXT ジャーナル",60,"http://r-feed.jp/sites/16/feed/12.xml",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (73,"shi","リクナビ進学 ジャーナル",60,"http://r-feed.jp/sites/13/feed/12.xml",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (74,"aka","赤すぐnet みんなの体験記",60,"http://r-feed.jp/sites/5/feed/12.xml",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (75,"car","日刊カーセンサー",60,"http://r-feed.jp/sites/10/feed/12.xml",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (76,"tow","タウンワークマガジン",60,"http://r-feed.jp/sites/2/feed/12.xml",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (77,"ddn","ダ・ヴィンチ電子ナビ",60,"http://news.ddnavi.com/au/data.xml",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (78,"dwn","ドワンゴジェイピーnews",60,"http://news.dwango.jp/feed/?source=au",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (79,"thu","日刊大衆",60,"http://taishu.jp/rss/rss_au.php",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (80,"ski","スキンケア大学",60,"http://www.skincare-univ.com/rss/feed/au_smartpass.xml",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (81,"hea","ヘルスケア大学",60,"http://www.skincare-univ.com/rss/feed/au_smartpass_healthcare.xml",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (82,"men","メンズスキンケア大学",60,"http://www.skincare-univ.com/rss/feed/au_smartpass_mens.xml",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (83,"mdp","モデルプレス",30,"http://feed.mdpr.jp/rss/export/au-one.rss",1,30,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (84,"enj","レッツエンジョイ東京 おでかけスタイル",60,"http://www.enjoytokyo.jp/rss/report/lets_rss_report_005_005.xml",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (85,"vip","日本タレント名鑑",60,"http://www.vip-times.co.jp/?feed=cpif",1,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (86,"tpg","THE PAGE(フル）",60,"https://thepage.jp/partner/auPortal/list.rss",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (87,"jbp","Jbpress",60,"http://jbpress.ismedia.jp/list/feed/rss4au",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (88,"te1","tenki.jp",60,"http://az416740.vo.msecnd.net/component/static_api/rss/forecaster_diary/recent_entries_au.xml",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (89,"te2","tenki.jp サプリ",60,"http://tenkijp.blob.core.windows.net/component/static_api/rss/suppl/recent_entries_au.xml",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (90,"nla","ねとらぼ",60,"http://cgi.itmedia.co.jp/au_portal_feed/nl.xml",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (91,"joi","中央日報",7,"http://japanese.joins.com/etc/article_list_au.php",2,7,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (92,"tra","乗りものニュース",60,"https://trafficnews.jp/auwebportal-feed/",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (93,"oto","オトナンサー",60,"https://otonanswer.jp/auwebportal-feed/",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (94,"fcj","Full-Count",60,"https://full-count.jp/auwebportal-feed/",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (95,"ans","THE ANSWER",60,"https://the-ans.jp/auwebportal-feed/",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (96,"fzw","Football ZONE web",60,"http://www.football-zone.net/au",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (97,"fbc","フットボールチャンネル",60,"https://www.footballchannel.jp/auwebportal-feed/",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (98,"bbc","ベースボールチャンネル",60,"https://www.baseballchannel.jp/auwebportal-feed/",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (99,"nbn","高校野球ドットコム",60,"http://www.hb-nippon.com/rss/auone/",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1),
    (100,"wct","WEB CARTOP",60,"https://www.webcartop.jp/?feed=au&_mmm=23789cfbf97dd8d1a9ef12461315d577",2,60,"2017-01-01 00:00:00",1,0,NULL,0,1,1);

# CPとジャンルを紐付ける cp_genre_middle
# ----------------------------------------------------------
INSERT INTO cp_genre_middle (cp_id, genre_id)
SELECT cp.id as cp_id, g.id as genre_id FROM cp INNER JOIN genre g ORDER BY cp_id , genre_id;

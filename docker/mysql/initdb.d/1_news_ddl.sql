-- MySQL Script generated by MySQL Workbench
-- Tue Mar  7 16:59:53 2017
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema eden
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `eden` ;

-- -----------------------------------------------------
-- Schema eden
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `eden` DEFAULT CHARACTER SET utf8 ;
USE `eden` ;

-- -----------------------------------------------------
-- Table `eden`.`cp`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eden`.`cp` ;

CREATE TABLE IF NOT EXISTS `eden`.`cp` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `code` VARCHAR(16) NOT NULL COMMENT 'CODE',
  `name` VARCHAR(64) NOT NULL COMMENT 'CP名',
  `article_expire` INT UNSIGNED NOT NULL DEFAULT 30 COMMENT '記事有効期限(日)',
  `rss_url` VARCHAR(128) NULL COMMENT 'RSS URL',
  `rss_type` TINYINT UNSIGNED NOT NULL DEFAULT 2 COMMENT '1:旧コネタ,2:mediba RSS',
  `interval` INT UNSIGNED NOT NULL DEFAULT 60 COMMENT '取込間隔(秒)',
  `post_start_date` DATETIME NULL COMMENT '配信開始日',
  `widget_use_flag` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'ウィジェット利用フラグ',
  `article_create_flag` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '記事作成フラグ',
  `image_name` VARCHAR(128) NULL COMMENT 'サムネイル名',
  `deleted_flag` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '削除フラグ',
  `created_user_id` INT UNSIGNED NOT NULL COMMENT '登録者ID',
  `updated_user_id` INT UNSIGNED NOT NULL COMMENT '更新者ID',
  `created_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '作成日',
  `updated_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日',
  PRIMARY KEY (`id`),
  UNIQUE INDEX `code_UNIQUE` (`code` ASC),
  INDEX `post_start_date_INDEX` (`post_start_date` ASC, `article_create_flag` ASC, `deleted_flag` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COMMENT = 'CPマスタ'
PACK_KEYS = Default;


-- -----------------------------------------------------
-- Table `eden`.`category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eden`.`category` ;

CREATE TABLE IF NOT EXISTS `eden`.`category` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(16) NOT NULL COMMENT 'カテゴリ名',
  `priority` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '優先度',
  `deleted_flag` TINYINT NOT NULL DEFAULT 0 COMMENT '削除フラグ',
  `created_user_id` INT UNSIGNED NOT NULL COMMENT '登録者ID',
  `updated_user_id` INT UNSIGNED NOT NULL COMMENT '更新者ID',
  `created_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '作成日',
  `updated_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COMMENT = 'カテゴリマスタ'
PACK_KEYS = Default;


-- -----------------------------------------------------
-- Table `eden`.`genre`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eden`.`genre` ;

CREATE TABLE IF NOT EXISTS `eden`.`genre` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `category_id` INT UNSIGNED NOT NULL COMMENT 'カテゴリID',
  `name` VARCHAR(24) NOT NULL COMMENT 'ジャンル名',
  `priority` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '優先度',
  `deleted_flag` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '削除フラグ',
  `created_user_id` INT UNSIGNED NOT NULL COMMENT '登録者ID',
  `updated_user_id` INT UNSIGNED NOT NULL COMMENT '更新者ID',
  `created_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '作成日',
  `updated_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日',
  PRIMARY KEY (`id`),
  INDEX `fk_category_id` (`category_id` ASC),
  CONSTRAINT `fk_category_id_idx`
    FOREIGN KEY (`category_id`)
    REFERENCES `eden`.`category` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COMMENT = 'ジャンルマスタ'
PACK_KEYS = Default;


-- -----------------------------------------------------
-- Table `eden`.`sub_genre`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eden`.`sub_genre` ;

CREATE TABLE IF NOT EXISTS `eden`.`sub_genre` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `genre_id` INT UNSIGNED NOT NULL,
  `rss_genre_id` INT UNSIGNED NOT NULL COMMENT 'RSS取込時のジャンルID',
  `name` VARCHAR(24) NOT NULL COMMENT 'サブジャンル名',
  `priority` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '優先度',
  `deleted_flag` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '削除フラグ',
  `created_user_id` INT UNSIGNED NOT NULL COMMENT '登録者ID',
  `updated_user_id` INT UNSIGNED NOT NULL COMMENT '更新者ID',
  `created_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '作成日',
  `updated_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日',
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_sub_genre_genre`
    FOREIGN KEY (`genre_id`)
    REFERENCES `eden`.`genre` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COMMENT = 'サブジャンルマスタ'
PACK_KEYS = Default;


-- -----------------------------------------------------
-- Table `eden`.`article_content`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eden`.`article_content` ;

CREATE TABLE IF NOT EXISTS `eden`.`article_content` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `code` VARCHAR(128) NOT NULL COMMENT 'CPID_記事ID',
  `cp_id` INT UNSIGNED NOT NULL COMMENT 'CPID',
  `cp_genre_id` INT UNSIGNED NOT NULL COMMENT 'CPジャンル',
  `cp_sub_genre_id` INT UNSIGNED NOT NULL COMMENT 'CPサブジャンルID',
  `genre_id` INT UNSIGNED NOT NULL COMMENT 'ジャンルID',
  `sub_genre_id` INT UNSIGNED NOT NULL COMMENT 'サブジャンルID',
  `url` VARCHAR(255) NULL COMMENT '取込で使用するURL。記事の場合は適当なURLを入れる',
  `uid` VARCHAR(255) NOT NULL COMMENT 'URLか記事のユニークなIDを入れる',
  `hash_timestamp` VARCHAR(128) NULL COMMENT 'URLハッシュ_タイムスタンプ',
  `title` VARCHAR(255) NOT NULL COMMENT '長文見出し',
  `short_title` VARCHAR(32) NULL COMMENT '省略見出し',
  `body` TEXT NULL COMMENT '記事本文',
  `article_type` TINYINT NOT NULL DEFAULT 1 COMMENT '記事タイプ(1:取込,2:特集)',
  `post_start_date` DATETIME NOT NULL COMMENT '掲載開始日時',
  `post_end_date` DATETIME NOT NULL COMMENT '掲載終了日時',
  `modified_date` DATETIME NULL COMMENT '記事修正日',
  `first_composition_date_main` DATETIME NULL DEFAULT NULL COMMENT '主要カテゴリへの初回編成日時',
  `first_composition_date_other` DATETIME NULL DEFAULT NULL COMMENT 'その他カテゴリへの初回編成日時',
  `category_composition_date` DATETIME NULL DEFAULT NULL COMMENT '主要カテゴリ編成日時（計算用）',
  `category_integration_time` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT '主要カテゴリ積算時間（計算用）',
  `relation_title_1` VARCHAR(255) NULL COMMENT 'CP関連タイトル1',
  `relation_url_1` VARCHAR(255) CHARACTER SET 'utf8' NULL COMMENT 'CP関連URL1',
  `relation_title_2` VARCHAR(255) NULL COMMENT 'CP関連タイトル2',
  `relation_url_2` VARCHAR(255) NULL COMMENT 'CP関連URL2',
  `relation_title_3` VARCHAR(255) NULL COMMENT 'CP関連タイトル3',
  `relation_url_3` VARCHAR(255) NULL COMMENT 'CP関連URL3',
  `relation_title_4` VARCHAR(255) NULL COMMENT 'CP関連タイトル4',
  `relation_url_4` VARCHAR(255) NULL COMMENT 'CP関連URL4',
  `relation_title_5` VARCHAR(255) NULL COMMENT 'CP関連タイトル5',
  `relation_url_5` VARCHAR(255) NULL COMMENT 'CP関連URL5',
  `deleted_flag` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '削除フラグ(公開ステータス)',
  `import_deleted_flag` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '取込削除フラグ',
  `created_user_id` INT UNSIGNED NOT NULL COMMENT '作成者ID',
  `updated_user_id` INT UNSIGNED NOT NULL COMMENT '更新者ID',
  `created_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '作成日時',
  `updated_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日時',
  PRIMARY KEY (`id`),
  INDEX `fk_news_cp_idx` (`cp_id` ASC),
  INDEX `fk_article_contents_genre_idx` (`genre_id` ASC),
  UNIQUE INDEX `code_UNIQUE` (`code` ASC),
  INDEX `fk_article_content_sub_genre1_idx` (`sub_genre_id` ASC),
  UNIQUE INDEX `cp_id_uid_UNIQUE` (`uid` ASC, `cp_id` ASC),
  CONSTRAINT `fk_article_contents_cp`
    FOREIGN KEY (`cp_id`)
    REFERENCES `eden`.`cp` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_article_contents_genre`
    FOREIGN KEY (`genre_id`)
    REFERENCES `eden`.`genre` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_article_content_sub_genre`
    FOREIGN KEY (`sub_genre_id`)
    REFERENCES `eden`.`sub_genre` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci
COMMENT = '記事テーブル。webから参照される\n※全文検索用ではありません'
PACK_KEYS = Default;


-- -----------------------------------------------------
-- Table `eden`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eden`.`user` ;

CREATE TABLE IF NOT EXISTS `eden`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(64) NOT NULL COMMENT 'ユーザー名',
  `password` VARCHAR(128) NOT NULL COMMENT 'パスワード',
  `mail_address` VARCHAR(128) NOT NULL COMMENT 'メールアドレス',
  `deleted_flag` TINYINT(1) NOT NULL DEFAULT 0 COMMENT '削除フラグ',
  `created_user_id` INT UNSIGNED NOT NULL COMMENT '登録者ID',
  `updated_user_id` INT UNSIGNED NOT NULL COMMENT '更新者ID',
  `created_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '作成日時',
  `updated_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日時',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COMMENT = 'ユーザー'
PACK_KEYS = Default;


-- -----------------------------------------------------
-- Table `eden`.`auth_assignment`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eden`.`auth_assignment` ;

CREATE TABLE IF NOT EXISTS `eden`.`auth_assignment` (
  `item_name` VARCHAR(64) NOT NULL COMMENT 'アイテム名',
  `user_id` INT(11) NOT NULL COMMENT 'ユーザー名',
  `created_at` INT(11) NULL COMMENT '登録日',
  PRIMARY KEY (`item_name`, `user_id`),
  INDEX `fk_auth_assignment_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_auth_assignment_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `eden`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
PACK_KEYS = Default;


-- -----------------------------------------------------
-- Table `eden`.`auth_item`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eden`.`auth_item` ;

CREATE TABLE IF NOT EXISTS `eden`.`auth_item` (
  `name` VARCHAR(64) NOT NULL,
  `type` INT(11) NOT NULL,
  `description` TEXT NULL,
  `rule_name` VARCHAR(64) NULL,
  `data` TEXT NULL,
  `created_at` INT(11) NULL COMMENT '作成日時',
  `updated_at` INT(11) NULL COMMENT '更新日時',
  PRIMARY KEY (`name`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
PACK_KEYS = Default;


-- -----------------------------------------------------
-- Table `eden`.`auth_item_child`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eden`.`auth_item_child` ;

CREATE TABLE IF NOT EXISTS `eden`.`auth_item_child` (
  `parent` VARCHAR(64) NOT NULL,
  `child` VARCHAR(64) NOT NULL COMMENT 'ユーザー名',
  PRIMARY KEY (`parent`, `child`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
PACK_KEYS = Default;


-- -----------------------------------------------------
-- Table `eden`.`auth_rule`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eden`.`auth_rule` ;

CREATE TABLE IF NOT EXISTS `eden`.`auth_rule` (
  `name` VARCHAR(64) NOT NULL COMMENT 'アイテム名',
  `data` TEXT NULL COMMENT 'データ',
  `created_at` INT(11) NULL COMMENT '作成日時',
  `updated_at` INT(11) NULL COMMENT '更新日時',
  PRIMARY KEY (`name`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
PACK_KEYS = Default;


-- -----------------------------------------------------
-- Table `eden`.`article_composition`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eden`.`article_composition` ;

CREATE TABLE IF NOT EXISTS `eden`.`article_composition` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `article_content_id` BIGINT UNSIGNED NOT NULL COMMENT '記事ID',
  `category_id` INT UNSIGNED NOT NULL COMMENT 'カテゴリID',
  `mark_type` TINYINT UNSIGNED NOT NULL DEFAULT 1 COMMENT 'マーク(1:N自動, 2:Nあり, 3:Lあり, 4:なし)',
  `image_size_type` TINYINT UNSIGNED NOT NULL DEFAULT 1 COMMENT '画像サイズ（1:小, 2:中, 3:大）',
  `priority` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '優先度',
  `created_user_id` INT UNSIGNED NOT NULL COMMENT '作成者ID',
  `updated_user_id` INT UNSIGNED NOT NULL COMMENT '更新者ID',
  `created_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '作成日時',
  `updated_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日時',
  PRIMARY KEY (`id`),
  UNIQUE INDEX `fk_article_composition_uq` (`category_id` ASC, `article_content_id` ASC),
  INDEX `fk_main_composition_article_content_idx` (`article_content_id` ASC),
  INDEX `fk_article_composition_category1_idx` (`category_id` ASC),
  CONSTRAINT `fk_main_composition_article_content`
    FOREIGN KEY (`article_content_id`)
    REFERENCES `eden`.`article_content` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_article_composition_category`
    FOREIGN KEY (`category_id`)
    REFERENCES `eden`.`category` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COMMENT = 'ニュース編成'
PACK_KEYS = Default;


-- -----------------------------------------------------
-- Table `eden`.`cp_genre_middle`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eden`.`cp_genre_middle` ;

CREATE TABLE IF NOT EXISTS `eden`.`cp_genre_middle` (
  `cp_id` INT UNSIGNED NOT NULL COMMENT 'cp',
  `genre_id` INT UNSIGNED NOT NULL COMMENT 'ジャンルID',
  PRIMARY KEY (`cp_id`, `genre_id`),
  INDEX `fk_cp_genre_middle_genre_idx` (`genre_id` ASC),
  CONSTRAINT `fk_cp_genre_middle_genre`
    FOREIGN KEY (`genre_id`)
    REFERENCES `eden`.`genre` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_cp_genre_middle_cp`
    FOREIGN KEY (`cp_id`)
    REFERENCES `eden`.`cp` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COMMENT = 'CPに紐づくジャンル管理(中間テーブル)'
PACK_KEYS = Default;


-- -----------------------------------------------------
-- Table `eden`.`article_block`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eden`.`article_block` ;

CREATE TABLE IF NOT EXISTS `eden`.`article_block` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(48) NOT NULL COMMENT 'ブロック名',
  `code` VARCHAR(16) NOT NULL COMMENT 'ブロックコード',
  `label` VARCHAR(48) NOT NULL COMMENT 'ラベル',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci
COMMENT = '記事ブロックマスタ'
PACK_KEYS = Default;


-- -----------------------------------------------------
-- Table `eden`.`article_feature_block`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eden`.`article_feature_block` ;

CREATE TABLE IF NOT EXISTS `eden`.`article_feature_block` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `article_content_id` BIGINT UNSIGNED NOT NULL COMMENT '記事ID',
  `block_id` INT UNSIGNED NOT NULL COMMENT 'ブロックID',
  `search_formula_id` INT UNSIGNED NULL COMMENT '検索式ID',
  `relation_article_content_code` VARCHAR(128) NULL COMMENT '関連記事コード',
  `title` VARCHAR(255) NULL COMMENT '単一行入力項目',
  `body` TEXT NULL COMMENT '複数行入力項目',
  `image_hash` VARCHAR(128) NULL COMMENT '画像のハッシュ値',
  `credit` VARCHAR(64) NULL COMMENT 'クレジット',
  `url` VARCHAR(255) NULL COMMENT 'URL',
  `tag` TEXT NULL COMMENT 'HTMLタグ',
  `caption` VARCHAR(255) NULL COMMENT '説明文',
  `priority` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '優先度',
  PRIMARY KEY (`id`),
  INDEX `fk_article_feature_block_article_block_idx` (`block_id` ASC),
  INDEX `fk_article_feature_block_article_content_idx` (`article_content_id` ASC),
  INDEX `article_content_id_prioriy_INDEX` (`article_content_id` ASC, `priority` ASC)  COMMENT 'ブロック取得で使用',
  CONSTRAINT `fk_article_feature_block_article_block`
    FOREIGN KEY (`block_id`)
    REFERENCES `eden`.`article_block` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_article_feature_block_article_content`
    FOREIGN KEY (`article_content_id`)
    REFERENCES `eden`.`article_content` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci
COMMENT = '記事ブロックテーブル'
PACK_KEYS = Default;


-- -----------------------------------------------------
-- Table `eden`.`main_candidate`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eden`.`main_candidate` ;

CREATE TABLE IF NOT EXISTS `eden`.`main_candidate` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `article_content_id` BIGINT UNSIGNED NOT NULL,
  `created_user_id` INT UNSIGNED NOT NULL COMMENT '作成者ID',
  `updated_user_id` INT UNSIGNED NOT NULL COMMENT '更新者ID',
  `created_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '作成日時',
  `updated_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日時',
  INDEX `fk_main_category_candidate_article_article_content_idx` (`article_content_id` ASC),
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_main_candidate_article_article_content`
    FOREIGN KEY (`article_content_id`)
    REFERENCES `eden`.`article_content` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
COMMENT = '主要カテゴリ候補';


-- -----------------------------------------------------
-- Table `eden`.`article_composition_history`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eden`.`article_composition_history` ;

CREATE TABLE IF NOT EXISTS `eden`.`article_composition_history` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `category_id` INT UNSIGNED NOT NULL COMMENT 'カテゴリID',
  `article_content_id_1` BIGINT UNSIGNED NULL COMMENT '記事ID１',
  `short_title_1` VARCHAR(32) NULL COMMENT '省略見出し_1',
  `article_content_id_2` BIGINT UNSIGNED NULL COMMENT '記事ID２',
  `short_title_2` VARCHAR(32) NULL COMMENT '省略見出し_2',
  `article_content_id_3` BIGINT UNSIGNED NULL COMMENT '記事ID３',
  `short_title_3` VARCHAR(32) NULL COMMENT '省略見出し_3',
  `article_content_id_4` BIGINT UNSIGNED NULL COMMENT '記事ID４',
  `short_title_4` VARCHAR(32) NULL COMMENT '省略見出し_4',
  `article_content_id_5` BIGINT UNSIGNED NULL COMMENT '記事ID５',
  `short_title_5` VARCHAR(32) NULL COMMENT '省略見出し_5',
  `article_content_id_6` BIGINT UNSIGNED NULL COMMENT '記事ID６',
  `short_title_6` VARCHAR(32) NULL COMMENT '省略見出し_6',
  `article_content_id_7` BIGINT UNSIGNED NULL COMMENT '記事ID７',
  `short_title_7` VARCHAR(32) NULL COMMENT '省略見出し_7',
  `article_content_id_8` BIGINT UNSIGNED NULL COMMENT '記事ID８',
  `short_title_8` VARCHAR(32) NULL COMMENT '省略見出し_8',
  `article_content_id_9` BIGINT UNSIGNED NULL COMMENT '記事ID９（予備枠１）',
  `short_title_9` VARCHAR(32) NULL COMMENT '省略見出し_9',
  `article_content_id_10` BIGINT UNSIGNED NULL COMMENT '記事ID１０（予備枠２）',
  `short_title_10` VARCHAR(32) NULL COMMENT '省略見出し_10',
  `created_user_id` INT UNSIGNED NOT NULL COMMENT '作成者ID',
  `updated_user_id` INT UNSIGNED NOT NULL COMMENT '更新者ID',
  `created_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '作成日時',
  `updated_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日時',
  PRIMARY KEY (`id`),
  INDEX `fk_article_composition_history_category_idx` (`category_id` ASC),
  INDEX `cateogry_search_INDEX` (`category_id` ASC, `created_date` ASC)  COMMENT '編成履歴で使用',
  CONSTRAINT `fk_article_composition_history_category`
    FOREIGN KEY (`category_id`)
    REFERENCES `eden`.`category` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
COMMENT = 'ニュース編成履歴';


-- -----------------------------------------------------
-- Table `eden`.`cp_last_queue`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eden`.`cp_last_queue` ;

CREATE TABLE IF NOT EXISTS `eden`.`cp_last_queue` (
  `cp_id` INT UNSIGNED NOT NULL COMMENT 'cp',
  `last_queued_date` DATETIME NOT NULL COMMENT 'キュー実行日',
  PRIMARY KEY (`cp_id`),
  CONSTRAINT `fk_cp_cp_last_cue`
    FOREIGN KEY (`cp_id`)
    REFERENCES `eden`.`cp` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COMMENT = 'CP記事取込のキュー管理'
PACK_KEYS = Default;


-- -----------------------------------------------------
-- Table `eden`.`search_formula`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eden`.`search_formula` ;

CREATE TABLE IF NOT EXISTS `eden`.`search_formula` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `name` VARCHAR(48) NOT NULL COMMENT '名称',
  `label` VARCHAR(48) NOT NULL COMMENT '表示名',
  `category` TINYINT UNSIGNED NOT NULL COMMENT '種別(1:キーワード 2:記事関連リンク)',
  `number` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT '表示件数',
  `formula` VARCHAR(255) NOT NULL COMMENT '検索式',
  `deleted_flag` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '削除フラグ(公開ステータス)',
  `created_user_id` INT UNSIGNED NOT NULL COMMENT '作成者ID',
  `updated_user_id` INT UNSIGNED NOT NULL COMMENT '更新者ID',
  `created_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '作成日時',
  `updated_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日時',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
COMMENT = '検索式';


-- -----------------------------------------------------
-- Table `eden`.`ad_tab`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eden`.`ad_tab` ;

CREATE TABLE IF NOT EXISTS `eden`.`ad_tab` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `campaign_name` VARCHAR(48) NOT NULL COMMENT 'キャンペーン名',
  `tab_name` VARCHAR(48) NOT NULL COMMENT 'タブ名',
  `post_start_date` DATETIME NOT NULL COMMENT '掲載開始日時',
  `post_end_date` DATETIME NOT NULL COMMENT '掲載終了日時',
  `color_code` VARCHAR(16) NULL COMMENT 'カラーコード',
  `deleted_flag` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '削除フラグ(公開ステータス)',
  `created_user_id` INT UNSIGNED NOT NULL COMMENT '作成者ID',
  `updated_user_id` INT UNSIGNED NOT NULL COMMENT '更新者ID',
  `created_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '作成日時',
  `updated_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日時',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
COMMENT = '広告タブ管理';


-- -----------------------------------------------------
-- Table `eden`.`auto_censor_word`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eden`.`auto_censor_word` ;

CREATE TABLE IF NOT EXISTS `eden`.`auto_censor_word` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `sub_genre_id` INT UNSIGNED NOT NULL COMMENT 'サブジャンルID',
  `keyword` TEXT NOT NULL COMMENT 'キーワード',
  `deleted_flag` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '削除フラグ(公開ステータス)',
  `created_user_id` INT UNSIGNED NOT NULL COMMENT '作成者ID',
  `updated_user_id` INT UNSIGNED NOT NULL COMMENT '更新者ID',
  `created_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '作成日時',
  `updated_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日時',
  PRIMARY KEY (`id`),
  UNIQUE INDEX `sub_genre_id_UNIQUE` (`sub_genre_id` ASC),
  CONSTRAINT `fk_auto_censor_word_sub_genre`
    FOREIGN KEY (`sub_genre_id`)
    REFERENCES `eden`.`sub_genre` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
COMMENT = '自動検閲ワード';


-- -----------------------------------------------------
-- Table `eden`.`article_content_search`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eden`.`article_content_search` ;

CREATE TABLE IF NOT EXISTS `eden`.`article_content_search` (
  `id` BIGINT UNSIGNED NOT NULL,
  `code` VARCHAR(128) NOT NULL COMMENT 'CPID_記事ID',
  `cp_id` INT UNSIGNED NOT NULL COMMENT 'CP_ID',
  `cp_name` VARCHAR(64) NOT NULL COMMENT 'CP名',
  `genre_id` INT UNSIGNED NOT NULL COMMENT 'ジャンルID',
  `category_id` INT UNSIGNED NOT NULL COMMENT 'カテゴリID',
  `genre_name` VARCHAR(24) NOT NULL COMMENT 'ジャンル名',
  `sub_genre_id` INT UNSIGNED NOT NULL COMMENT 'サブジャンルID',
  `sub_genre_name` VARCHAR(24) NOT NULL COMMENT 'サブジャンル名',
  `hash_timestamp` VARCHAR(128) NULL COMMENT 'URLハッシュ_タイムスタンプ',
  `title` VARCHAR(255) NOT NULL COMMENT '長文見出し',
  `short_title` VARCHAR(32) NULL COMMENT '省略見出し',
  `body` TEXT NULL COMMENT '記事本文',
  `article_type` TINYINT NOT NULL DEFAULT 1 COMMENT '記事タイプ(1:取込,2:特集)',
  `post_start_date` DATETIME NOT NULL COMMENT '掲載開始日時',
  `unix_time_post_start_date` INT NOT NULL COMMENT '掲載開始日時(UNIXタイムスタンプ)',
  `post_end_date` DATETIME NOT NULL COMMENT '掲載終了日時',
  `unix_time_post_end_date` INT NOT NULL COMMENT '掲載終了日時(UNIXタイムスタンプ)',
  `category_composition_date` DATETIME NULL DEFAULT NULL COMMENT '主要カテゴリ編成日時（計算用）',
  `category_integration_time` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT '主要カテゴリ積算時間（計算用）',
  `deleted_flag` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '削除フラグ(公開ステータス)',
  `created_date` DATETIME NOT NULL COMMENT '作成日時',
  `updated_date` DATETIME NOT NULL COMMENT '更新日時',
  `unix_time_updated_date` INT NOT NULL COMMENT '更新日時(UNIXタイムスタンプ)',
  PRIMARY KEY (`id`),
  INDEX `search_post_start_date_INDEX` (`unix_time_post_start_date` ASC, `deleted_flag` ASC)  COMMENT '記事一覧で使用。\n検索条件が日付のみの場合使用',
  INDEX `search_code_INDEX` (`code` ASC, `unix_time_post_start_date` ASC, `deleted_flag` ASC)  COMMENT '記事検索→記事ID検索時に使用',
  INDEX `search_genre_id_sub_genre_id_INDEX` (`genre_id` ASC, `sub_genre_id` ASC, `unix_time_post_start_date` ASC, `deleted_flag` ASC)  COMMENT '記事一覧のカテゴリを選択時に使用。\nサブジャンル選択時にも使用させる',
  INDEX `search_cp_name_INDEX` (`cp_name` ASC, `unix_time_post_start_date` ASC, `deleted_flag` ASC)  COMMENT '記事検索→クレジット(CP名)検索で使用',
  INDEX `search_genre_list_INDEX` (`sub_genre_id` ASC, `unix_time_post_start_date` ASC, `unix_time_post_end_date` ASC, `deleted_flag` ASC)  COMMENT '速報記事(バッチ)で使用',
  INDEX `search_unix_time_updated_INDEX` (`unix_time_updated_date` ASC)  COMMENT 'logstashの取込、\nsupership連携バッチで使用\n',
  INDEX `search_category_INDEX` (`category_id` ASC, `deleted_flag` ASC, `unix_time_updated_date` ASC)  COMMENT 'タブ候補で使用')
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci
COMMENT = '記事検索用テーブル'
PACK_KEYS = Default;


-- -----------------------------------------------------
-- Table `eden`.`cache`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eden`.`cache` ;

CREATE TABLE IF NOT EXISTS `eden`.`cache` (
  `id` CHAR(128) NOT NULL COMMENT 'ID',
  `expire` INT NULL COMMENT '有効期限',
  `data` MEDIUMBLOB NULL COMMENT 'データ',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
COMMENT = 'Yii2で使用するキャッシュテーブル';

USE `eden`;

DELIMITER $$

USE `eden`$$
DROP TRIGGER IF EXISTS `eden`.`article_content_AFTER_INSERT` $$
USE `eden`$$
CREATE DEFINER = CURRENT_USER TRIGGER `eden`.`article_content_AFTER_INSERT` AFTER INSERT ON `article_content` FOR EACH ROW
BEGIN
	CALL insert_article_search(
		NEW.id,
		NEW.code,
		NEW.cp_id,
		NEW.genre_id,
		NEW.sub_genre_id,
		NEW.hash_timestamp,
		NEW.title,
		NEW.short_title,
		NEW.body,
		NEW.article_type,
		NEW.post_start_date,
		NEW.post_end_date,
		NEW.category_composition_date,
		NEW.category_integration_time,
		NEW.deleted_flag,
		NEW.created_date,
		NEW.updated_date
	);
END$$


USE `eden`$$
DROP TRIGGER IF EXISTS `eden`.`article_content_AFTER_UPDATE` $$
USE `eden`$$
CREATE DEFINER = CURRENT_USER TRIGGER `eden`.`article_content_AFTER_UPDATE` AFTER UPDATE ON `article_content` FOR EACH ROW
BEGIN
	CALL update_article_search(
		OLD.id,
		NEW.code,
		NEW.cp_id,
		NEW.genre_id,
		NEW.sub_genre_id,
		NEW.hash_timestamp,
		NEW.title,
		NEW.short_title,
		NEW.body,
		NEW.article_type,
		NEW.post_start_date,
		NEW.post_end_date,
		NEW.category_composition_date,
		NEW.category_integration_time,
		NEW.deleted_flag,
		NEW.created_date,
		NEW.updated_date
	);
END$$


USE `eden`$$
DROP TRIGGER IF EXISTS `eden`.`article_content_AFTER_DELETE` $$
USE `eden`$$
CREATE DEFINER = CURRENT_USER TRIGGER `eden`.`article_content_AFTER_DELETE` AFTER DELETE ON `article_content` FOR EACH ROW
BEGIN
	CALL delete_article_search(OLD.id);
END$$


DELIMITER ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

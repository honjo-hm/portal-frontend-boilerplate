/**
 * routes
 * d.tsが存在しなかったので、中身はJS
 * 
 * @package Routes
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */
const Routes = require("nextjs-dynamic-routes");

const router = new Routes();

// TOPページ
router
.add({
    name: "index",
    pattern: "/",
    page: "/IndexPage"
})
// 個人設定ページ
.add({
    name: "settingServices",
    pattern: "/setting/services",
    page: "/setting/ServicesPage"
})
// 設定ページ(天気-地域)
.add({
    name: "settingWeatherRegion",
    pattern: "/setting/weather",
    page: "/setting/WeatherRegionPage"
})
// 設定ページ(天気-都道府県)
.add({
    name: "settingWeatherPrefecture",
    pattern: "/setting/weather/regionCode/:regionCode",
    page: "/setting/WeatherPrefecturePage"
})
// 設定ページ(天気-市区町村)
.add({
    name: "settingWeatherCity",
    pattern: "/setting/weather/regionCode/:regionCode/prefCode/:prefCode",
    page: "/setting/WeatherCityPage"
})
// 記事詳細ページ
.add({
    name: "detail",
    pattern: "/detail/:articleType/:genreId/:subgenreId/:articleId",
    page: "ArticleDetailPage"
})
// 汎用エラーはnextjs側でpage作る
// https://github.com/zeit/next.js#custom-configuration

module.exports = router;
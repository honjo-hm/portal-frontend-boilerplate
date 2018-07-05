/**
 * Index Page
 *
 * @package Page
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */
import "./bootstrap";
import IndexSpTemplate from "../shared/components/templates/IndexSpTemplate";

/**
 * 以下ちゃんとlibraryとして切り出す
 *
import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient("https://local.api.universal.auone.jp/graphql", {
    mode: "cors"
});

const query = `{
    getArticles(limit: 10) {
        id,
        code,
        cp_id,
        cp_name,
        genre_id,
        title,
        body
    }
    getUtils {
        currentTimestamp
    }
}`

client.request(query).then((data) => {
    console.log(data);
});
*/

export default () => <IndexSpTemplate />;


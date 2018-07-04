/**
 * Index Page
 *
 * @package Page
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */
import "./bootstrap";
import styled from "styled-components";

//@ts-ignore
import { Link } from "../shared/routes/index";
import IndexTemplate from "../shared/components/templates/IndexTemplate";
import Dailytool from "../shared/components/widgets/Dailytool";


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

export default () => (
    <div>
    <IndexTemplate />
        <ul>
            <li>
                <Link route="settingServices"><a>settings</a></Link>
            </li>
            <li>
                <Link route="detail"><a>detail</a></Link>
            </li>
        </ul>
        <div>
            <Dailytool />
        </div>
    </div>
)

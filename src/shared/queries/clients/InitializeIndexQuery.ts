/**
 * InitializeIndexQuery class file
 *
 * @package Query
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */
import AbstractQuery from "./AbstractQuery";

/**
 * InitializeIndexQuery
 * TOPの1st Viewにまつわる情報を一括で取得する
 *
 * @author hoge(hoge@mediba.jp)
 */
export default class InitializeIndexQuery extends AbstractQuery {

    /**
     * query
     *
     * @returns string
     */
    public query(): string {

        const limit: number = this.args.get("limit") as number || 8;

        return `{
            getArticles(limit: ${limit}) {
                id,
                code,
                cp_id,
                cp_name,
                genre_id,
                sub_genre_id,
                title
            }
            getUtils {
                currentTimestamp
            }
        }`;
    }
}

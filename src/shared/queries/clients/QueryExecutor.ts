/**
 * QueryExecutor class file
 *
 * @package Query
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */
import { GraphQLClient } from "graphql-request";
import AbstractQuery from "./AbstractQuery";

/**
 * QueryExecutorVariables
 * timeoutしかなくて良いや・・・
 */
export interface QueryExecutorVariables {
    timeout: number;
}

/**
 * QueryExecutor
 *
 * TODO: テスト容易性を鑑みる＆ロギング
 */
export default class QueryExecutor {

    /**
     * (private)@property GraphQLClient
     */
    private static _client: GraphQLClient;

    /**
     * (private)@property QueryExecutorVariables
     */
    private static _variables: QueryExecutorVariables;

    /**
     * 初期化
     *
     * @param GraphQLClient client
     *
     * @returns void
     */
    public static init(client: GraphQLClient, variables?: QueryExecutorVariables): void {
        this._client = client;
        this._variables = variables || { timeout: 1 };
    }

    /**
     * 実行する
     *
     * @param AbstractQuery query
     *
     * @returns Promise
     */
    public static async execute<T extends AbstractQuery>(query: T): Promise<any> {
        return this._client.request(query.query(), this._variables);
    }
}

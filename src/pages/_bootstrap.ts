/**
 * initial setting
 *
 * @copyright mediba inc.
 * @since 2018.XX.XX
 */
import { GraphQLClient } from "graphql-request";
import QueryExecutor from "../shared/queries/clients/QueryExecutor";

// graphQL
QueryExecutor.init(new GraphQLClient("https://local.api.universal.auone.jp/graphql", {
    mode: "cors",
}));

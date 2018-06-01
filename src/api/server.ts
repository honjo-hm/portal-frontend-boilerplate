/**
 * graphql server
 *
 * @copyright mediba inc.
 * @since 2018.XX.XX
 */
import "reflect-metadata";
import { GraphQLServer, Options } from "graphql-yoga";
import { buildSchema } from "type-graphql";
import { ArticleResolver } from "./resolver/ArticleResolver";

/**
 * server
 */
async function bootstrap() {

    // build TypeGraphQL executable schema
    const schema = await buildSchema({
        resolvers: [ArticleResolver],
    });

    // Create GraphQL server
    const server = new GraphQLServer({ schema });

    // Configure server options
    const serverOptions: Options = {
        port: 4000,
        endpoint: "/graphql",
        playground: "/playground",
    };

    // Start the server
    server.start(serverOptions, ({ port, playground }) => {
        console.log(
            `Server is running, GraphQL Playground available at http://localhost:${port}${playground}`,
        );
    });
}

  bootstrap();

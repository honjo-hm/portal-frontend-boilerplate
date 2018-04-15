/**
 * Index Template
 * Container Component
 * 
 * @package Components
 * 
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */
import "reflect-metadata";
import * as React from "react";
import {IndexProps} from "../../props/IndexProps";
import {ListEntity} from "../../entities/ListEntity";
import {getConnectionManager, ConnectionManager, Connection, getManager} from "typeorm";

/**
 * IndexTemplate（Anonymus）
 * 
 * @author hoge(hoge@mediba.jp)
 */
export default class extends React.Component<IndexProps, any> {

    /**
     * 初期状態のpropsを返す（nextjs規約）
     * 
     * @returns Promise<IndexProps>
     */
    public static async getInitialProps(): Promise<IndexProps> {
        const connectionManager: ConnectionManager = getConnectionManager();

        const connection: Connection = connectionManager.create({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "portal_user",
            password: "portal_password",
            database: "portal",
            entities: [__dirname + "../../entities/*"]
        });
        connection.connect(); // performs connection
        
        const entityManager = getManager();
        const entity = await entityManager.findOneById(ListEntity, 1);

        let name: string = "fuga";
        if (entity instanceof ListEntity) {
            name = entity.name;
        }
        console.log(entity);
        return { name: name } as IndexProps;
    }

    /**
     * renderする
     * 
     * @returns React.ReactNode
     */
    public render(): React.ReactNode {
        return (
            <div>
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}

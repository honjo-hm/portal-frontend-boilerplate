/**
 * Connector class file.
 * 
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */
import "reflect-metadata";
import {ConnectionOptions, createConnection, Connection} from "typeorm";

/**
 * Connector
 * DB接続
 * 
 * @author hoge(hoge@mediba.jp)
 */
export default class Connector {

    /**
     * @var Connection _connnected 接続済コネクタ
     */
    private static _connnected: Connection;

    /**
     * 接続する
     * TODO: configを外から差し込めるようにする
     * TODO: 永続接続もmysql側timeoutを考慮しないといけない
     * 
     * @param Function[] entities entity配列
     * 
     * @returns Connection
     */
    public static async connect(entities: Function[]): Promise<Connection> {

        if (Connector._connnected instanceof Connection) {
            return Connector._connnected;
        }

        const options: ConnectionOptions = {
            "name": "mysql",
            "type": "mysql",
            "host": "localhost",
            "port": 3306,
            "username": "portal_user",
            "password": "portal_password",
            "database": "portal",
            logging: ["query", "error"],
            synchronize: true,
            entities: entities
        };

        Connector._connnected = await createConnection(options);
        return Connector._connnected;
    }

    /**
     * 切断する
     * 
     * @returns void
     */
    public static disconnect(): void {

    }
}
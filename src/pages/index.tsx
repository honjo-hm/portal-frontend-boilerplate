import "reflect-metadata";
import {Connection} from "typeorm";
import {ListEntity} from "../shared/entities/ListEntity";
import Connector from "../shared/entities/Connector";

Connector.connect([ListEntity]).then((connect: Connection) => {
    const res = connect.getRepository(ListEntity).findOneById(1);
    console.log(res);
})


export default () => (
    <h1>hoge</h1>
);


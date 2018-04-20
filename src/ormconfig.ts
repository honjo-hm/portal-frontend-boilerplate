import {ListEntity} from "./shared/entities/ListEntity";
import {ConnectionOptions} from "typeorm"; 

const config: ConnectionOptions = {
   type: "mysql",
   host: "mysql",
   port: 3306,
   username: "portal_user",
   password: "portal_password",
   database: "portal",
   synchronize: false,
   logging: false,
   entities: [
        ListEntity
   ]
}

export default config

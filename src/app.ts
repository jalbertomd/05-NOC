import { envs } from "./config/plugins/env.plugin";
import { LogModel, MongoDatabase } from "./data/mongo";
import { Server } from "./presentation/server";

(async () => {
    main();
})();

async function main() {

    // await MongoDatabase.connect({
    //     mongoUrl: envs.MONGO_URL,
    //     dbName: envs.MONGO_DB_NAME,
    // });

    Server.start();
    //console.log(envs);

    // Crear una coleccion = tables, documento = registro
    /*const newLog = await LogModel.create({
        message: 'Test message desde Mongo',
        origin: 'App.ts',
        level: 'low'
    });

    await newLog.save();
    console.log(newLog);*/

}
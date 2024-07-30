import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";

export class Server {

    public static start() {

        console.log('Server started...');

        CronService.createJob(
            '*/10 * * * * *',
            () => {
              const url = 'https://google.com';
              new CheckService(
                () => console.table( `${ url } is ok` ),
                ( error ) => console.table( error ),
              ).execute( url );
              // new CheckService().execute( 'http://localhost:3000' );
              
            }
          );
    }
}


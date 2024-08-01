import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from './email/email.service';

const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource(),
);

const emailService = new EmailService();

export class Server {

  public static start() {

    console.log('Server started...');

    //todo: Mandar email
    /*new SendEmailLogs(
      emailService,
      fileSystemLogRepository,
    ).execute(
      ['j.alberto.martinez.d@gmail.com', 'jay_eym@hotmail.com']
    )
    /*emailService.sendEmailWithFileSystemLogs(
      ['j.alberto.martinez.d@gmail.com', 'jay_eym@hotmail.com']
    );
    //*/

    //CronService.createJob(
    //'*/10 * * * * *',
    //() => {
    //const url = 'http://localhost:3000';
    //new CheckService(
    //fileSystemLogRepository,
    //  () => console.table(`${url} is ok`),
    //    (error) => console.table(error),
    //    ).execute(url);
    //      // new CheckService().execute( 'http://localhost:3000' );
    //
    //  }
    //);
  }
}


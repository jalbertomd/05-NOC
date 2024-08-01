import { CheckService } from "../domain/use-cases/checks/check-service";
import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDatasource } from "../infrastructure/datasources/mongo-log.datasource";
import { PostgresLogDatasource } from "../infrastructure/datasources/postgres-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from './email/email.service';

const LogRepository = new LogRepositoryImpl(
  //new FileSystemDatasource(),
  //new MongoLogDatasource(),
  new PostgresLogDatasource(),
);

const fsLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource(),
);
const mongoLogRepository = new LogRepositoryImpl(
  new MongoLogDatasource(),
);
const postgresLogRepository = new LogRepositoryImpl(
  new PostgresLogDatasource(),
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

    // CronService.createJob(
    //   '*/10 * * * * *',
    //   () => {
    //     const url = 'https://www.google.com';
    //     new CheckServiceMultiple(
    //       [LogRepository, mongoLogRepository, postgresLogRepository],
    //       () => console.table(`${url} is ok`),
    //       (error) => console.table(error),
    //     ).execute(url);
    //   }
    // );
  }
}


import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
/*... api Module import ...*/
import { UserModule } from './api/user/user.module';
import { MasterDataModule } from './api/masterdata/master-data.module';
import { DbService } from './db/db.service';
import { UtilityService } from './utility/utility.service';
import { MulterModule } from '@nestjs/platform-express';
import { ConstantParameterModule } from './api/constant-parameter/constant-parameter.module';
import { join } from 'path';
@Module({
  imports: [
    MulterModule.register({
      dest: './uploads', // Define your file upload destination
    }),
    ConfigModule.forRoot({
      envFilePath: [`.env.stage.${process.env.STAGE}`]
      
    }),
    UserModule,
    MasterDataModule,
    ConstantParameterModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    DbService,
    UtilityService,
  ],
})
export class AppModule {}

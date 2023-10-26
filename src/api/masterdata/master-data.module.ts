import { UtilityService } from 'src/utility/utility.service';
import { Module } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { MasterDataController } from './master-data.controller';
import { MasterDataService } from './master-data.service';
import { ConfigModule } from '@nestjs/config';

@Module({

  imports: [ConfigModule.forRoot(
    {
      envFilePath: [`.env.stage.${process.env.STAGE}`]
    }
  )
  ],
  controllers: [MasterDataController],
  providers: [
    MasterDataService,
    DbService,
    UtilityService
  ]
})
export class MasterDataModule { }

import { Module } from '@nestjs/common';
import { ConstantParameterController } from './constant-parameter.controller';
import { ConstantParameterService } from './constant-parameter.service';
import { ConfigModule } from '@nestjs/config';

@Module({

  imports: [ConfigModule.forRoot(
    {
      envFilePath: [`.env.stage.${process.env.STAGE}`]
    }
  )
  ],
  controllers: [ConstantParameterController],
  providers: [
    ConstantParameterService,
  ]
})
export class ConstantParameterModule { }

import { Test, TestingModule } from '@nestjs/testing';
import { ConstantParamterController } from './constant-parameter/constant-parameter.controller';

describe('ConstantParamterController', () => {
  let controller: ConstantParamterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConstantParamterController],
    }).compile();

    controller = module.get<ConstantParamterController>(ConstantParamterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

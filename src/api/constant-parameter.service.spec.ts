import { Test, TestingModule } from '@nestjs/testing';
import { ConstantParameterService } from './constant-parameter/constant-parameter.service';

describe('ConstantParameterService', () => {
  let service: ConstantParameterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConstantParameterService],
    }).compile();

    service = module.get<ConstantParameterService>(ConstantParameterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

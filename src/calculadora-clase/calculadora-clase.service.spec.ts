import { Test, TestingModule } from '@nestjs/testing';
import { CalculadoraClaseService } from './calculadora-clase.service';

describe('CalculadoraClaseService', () => {
  let service: CalculadoraClaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalculadoraClaseService],
    }).compile();

    service = module.get<CalculadoraClaseService>(CalculadoraClaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

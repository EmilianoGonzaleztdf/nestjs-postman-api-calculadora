import { Test, TestingModule } from '@nestjs/testing';
import { CalculadoraClaseController } from './calculadora-clase.controller';

describe('CalculadoraClaseController', () => {
  let controller: CalculadoraClaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalculadoraClaseController],
    }).compile();

    controller = module.get<CalculadoraClaseController>(CalculadoraClaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Controller, Get, Param } from '@nestjs/common';
import { CalculadoraClaseService } from './calculadora-clase.service';

@Controller('calculadora-clase')
export class CalculadoraClaseController {
  constructor(private readonly calculadoraClaseService: CalculadoraClaseService){}

  @Get(':numero1/:numero2/:operacion')
  public calcular(@Param('numero1') n1 , @Param('numero2') n2 , @Param('operacion') op){
    return this.calculadoraClaseService.calcular(n1, n2, op);
  }
}

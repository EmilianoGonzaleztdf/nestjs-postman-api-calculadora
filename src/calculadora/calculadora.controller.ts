import { Controller, Get, Param } from '@nestjs/common';
import { CalculadoraService } from './calculadora.service';

@Controller('miCalculadora')
export class CalculadoraController {
  
  constructor(private calculadoraService: CalculadoraService){}

  @Get('sumar/:a/:b')
  public getSumar(@Param('a') a, @Param('b') b):number{
    return this.calculadoraService.getSumar(a,b);
  } 
  @Get('multiplicar/:a/:b')
  public getMultiplicar(@Param('a') a, @Param('b') b):number{
    return this.calculadoraService.getMultiplicar(a, b);
  } 
}


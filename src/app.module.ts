import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalculadoraController } from './calculadora/calculadora.controller';
import { CalculadoraService } from './calculadora/calculadora.service';
import { CalculadoraClaseController } from './calculadora-clase/calculadora-clase.controller';
import { CalculadoraClaseService } from './calculadora-clase/calculadora-clase.service';


@Module({
  imports: [],
  controllers: [AppController, CalculadoraController, CalculadoraClaseController],
  providers: [AppService, CalculadoraService, CalculadoraClaseService],
})
export class AppModule {}

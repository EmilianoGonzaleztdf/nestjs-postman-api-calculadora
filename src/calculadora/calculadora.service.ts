import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculadoraService {
  
  public getSumar(a,b){
    let resultado = parseInt(a) + parseInt(b)
    return resultado;
  }
  public getMultiplicar(a,b){
    let resultado = parseInt(a) * parseInt(b)
    return resultado;
  }
  
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculadoraClaseService {
  calcular(a:string,b:string,op:string){
    let resultado = null;
    let n1 = parseInt(a);
    let n2 = parseInt(b);

    switch(op){
      case 'sumar':
        resultado = {"resultado": `${n1+n2}`};
        break;
      case 'restar':
        resultado = {"resultado":`${n1-n2}`};
        break;
      case 'multiplicar':
        resultado = {"resultado": `${n1*n2}`};
        break;
      case 'dividir':{
        if (n2 == 0){
          resultado = {"resultado": "no se puede realizar division por 0"}
        }else {
            resultado = {"resultado": `${n1/n2}`};
          }
          break;
      }
      default : 
      resultado = {"resultado":"operacion invalida"};
      };  
      return resultado;
    }
  } 
  


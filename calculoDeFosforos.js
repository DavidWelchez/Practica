exports.calcularMetodo = (numero) => {
    let n = 6;
    let sum = 1;
    console.log(numero);
    if (numero>1) {
       for(i = 1; i<=numero; i++){
        sum += n;
        sum --;
       }
       return sum; 
    } else if(numero==1){
        let n = 6;
        sum= n;
        return sum;
    } else if(numero=0){
        let n = 0 ;
        return sum;
    }
    else{
        let sum = "No se aceptan negativos"
        return sum;
    }
    
  };
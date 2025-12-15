const prompt = require("prompt-sync")();
const name = prompt("Emmanuel Perez");

//let numero2;
console.log("Opcion 1: Elegir el numero de Lineas que se generaran");
console.log("Opcion 2: Seleccionar el numero que quieres ver");
let numero2 = +prompt("Selecciona una opcion:");

if(numero2==1){
let numero = +prompt("Ingresa un numero: ");



for (let I = 1; I <=  numero; I++) {
  if(I%3==0 && I%5==0 && I%7==0){
    console.log("FizzBuzzWoof");
  }
    else if(I%3==0 && I%7==0){
    console.log("FizzWoof");
  }
     else if(I%5==0 && I%7==0){
    console.log("BuzzWoof");
  }
  
  
  else if(I%3==0 && I%5==0){
    console.log("FizzBuzz");
  }
  
  else if (I%3==0){
    console.log("Fizz");
    
  }  
  else if (I%5==0) {
    {console.log("Buzz");}
    
    
}
else if (I%7==0) {
    {console.log("Woof");}
    
    
}
else{console.log(I);
}

}}
else if(numero2 ==2){
  let I = +prompt("Que numero quieres ver? ");
  //for (let I = 1; I <=  105; I++) 
    
  if(I%3==0 && I%5==0 && I%7==0){
    console.log=("FizzBuzzWoof");
  }
    else if(I%3==0 && I%7==0){
    console.log("FizzWoof");
  }
     else if(I%5==0 && I%7==0){
    console.log("BuzzWoof");
  }
  
  
  else if(I%3==0 && I%5==0){
    console.log("FizzBuzz");
  }
  
  else if (I%3==0){
    console.log("Fizz");
    
  }  
  else if (I%5==0) {
    {console.log("Buzz");}
    
    
}
else if (I%7==0) {
    {console.log("Woof");}
    
    
}
else{console.log(I);
}
//console.log(numero);

}

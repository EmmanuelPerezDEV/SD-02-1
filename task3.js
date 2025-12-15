const prompt = require("prompt-sync")();
const name = prompt("Emmanuel Perez");

for (let I = 1; I <=  105; I++) {
  //if(I%3==0 && I%5==0 && I%7==0){
   // console.log("FizzBuzzWoof");
 // }
  //   if(I%3==0 && I%7==0){
  //   console.log("FizzWoof");
  // }
  //    else if(I%5==0 && I%7==0){
  //   console.log("BuzzWoof");
  // }
  
  
   if(I%3==0 && I%5==0){
    console.log("FizzBuzz");
  }
  
  else if (I%3==0){
    console.log("Fizz");
    
  }  
  else if (I%5==0) {
    {console.log("Buzz");}
    
    
}
// else if (I%7==0) {
//     {console.log("Woof");}
    
    
// }
else{console.log(I);
}

}
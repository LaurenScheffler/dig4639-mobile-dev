function Sum (a, b) {
  let result = undefined
 if(typeof a == "number" && typeof b == "number") {
  result = a + b
 }
  return result;
}

 function AddList(Arr) {
  let result = undefined;
  if(Array.isArray(Arr) && Arr.length > 0){
    result = 0;
    for(var elem of Arr){
      if(typeof elem != "number"){
        result = undefined;
        break;
      }
      result = result + elem;
   }
  }
    return result;
  }

 function DivideBy(a, b) {
  let result = undefined
  if(typeof a == "number" && typeof b == "number" == "zero") {
    result = a / b;
  }
  return result;
 }

 function ContainsString(string) {
   
 }

 function ReSortedNumbers(Array) {
  if(typeof Array == "parameter"){
    return ;
  }
 }

 function Adder() {

 }
export { Sum, AddList };
  return a + b
}

console.log(Sum(2,3));

export { Sum };

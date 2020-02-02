import Adder from "./Adder.js";
var input = {
    a:10,
    b:5,
};
var adderInstance = new Adder(input);


console.log(adderInstance.render());
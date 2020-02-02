var Adder = require("./Adder.js");
var input = {
    a:7,
    b:6,
};
var adderInstance = new Adder(input);


console.log(adderInstance.render());
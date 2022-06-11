//the first code of TS
console.log("My First TS code");
//Data types in TS
var myNumber = 10;
console.log("call the number: " + myNumber);
console.log(typeof (myNumber));
// define string
var nameref = "Hello my name tarining";
console.log(typeof (nameref));
console.log("call here name--is -" + nameref);
// any data type 
var test = "any string";
console.log(typeof (test));
console.log("call the data type" + test);
// Declare the array in TS code 
var myArr = ["amit", "Raymond", "yan", "mitul"];
console.log((typeof (myArr)));
console.log(myArr);
// define the Array of any type
var myArr1 = ["vinay", 1, 2.45, "test"];
console.log(typeof (myArr1));
console.log(myArr1);
// type of methods in TS 
// basic mathod 
function addValue(value1, value2) {
    console.log('addition of the values from this Fuction');
    return value1 + value2;
}
console.log(addValue(23, 43));
function details(id, name, mail_id) {
    console.log("ID:", id);
    console.log("Name", name);
    if (mail_id != undefined)
        console.log("Email Id", mail_id);
}
details(123, "amit");
details(111, "training", "training@cgi.com");
// method with defulat param impl 
function discount(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var discount = price * rate;
    console.log("Discount Amount: ", discount);
}
discount(1000); //one param
discount(1000, 0.30); // two param
// enum declaration
var myConstants;
(function (myConstants) {
    myConstants[myConstants["pi"] = 3.14] = "pi";
    myConstants[myConstants["e"] = 2.73] = "e";
    myConstants[myConstants["log2"] = 0.3] = "log2";
    myConstants[myConstants["log5"] = 0.7] = "log5";
})(myConstants || (myConstants = {}));
console.log('finding enum');
console.log(2 * myConstants.pi);

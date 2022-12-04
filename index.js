const { myInformations } = require("./information");

var cowsay = require("cowsay");

console.log(cowsay.say({
    text :  "Hello, i'm " + myInformations.firstname + " from " + myInformations.campus,
}));
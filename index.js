const { myInformations } = require("./information");

const cowsay = require("cowsay");

console.log(cowsay.say({
    text :  "Hello, i'm " + myInformations.firstname + " from " + myInformations.campus,
}));

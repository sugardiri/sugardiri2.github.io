// require the function from your utils.js file, here is documentation: https://nodejs.org/api/modules.html
// create an array of strings
// call your function and pass in your array
// Remember to use the terminal to run your application

const utils = require ('./utils.js')
console.log(utils)

let name = ['Slim Shady', 'Finn','Lumpy Space Princess', 'Bubblegum Princess']

utils.person(name)
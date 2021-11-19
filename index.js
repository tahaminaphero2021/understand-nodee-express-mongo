const os = require('os');
// console.log('os version', os.version());
// console.log('os',os.arch());
const fs = require('fs');
// fs.writeFileSync('hello.txt', "I am writing node ");
//fs.appendFileSync('hello.txt', "\nMore text more text ");

//read want(BUFFER)
const content = fs.readFileSync('hello.txt');
console.log(content.toString())

console.log('running node');
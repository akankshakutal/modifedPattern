const assert = require('assert');
const { repeateCharacter } = require('./lib.js');

const testLib = function(character,times,expectedOutput) { 
  actualOutput = repeateCharacter(character,times);
  assert.deepEqual(actualOutput,expectedOutput);
  console.log("actualOutput : ",actualOutput);
  console.log("expectedOutput : ",expectedOutput );
  console.log("-------------------------------");
}

testLib("*",0,"");

testLib("-",5,"-----");

testLib("#",4,"####");

testLib("*",2,"**");

testLib("*",5,"*****");


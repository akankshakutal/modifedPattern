const repeateCharacter = function (character,times) {
  let line= "";
  for(let column=0; column<times; column++) {
    line = line + character;
  }
  return line;
}

exports.repeateCharacter =repeateCharacter;

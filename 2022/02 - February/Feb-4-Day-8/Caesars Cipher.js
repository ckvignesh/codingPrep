const lookup_table = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
};

function rot13(str) {
  let decodedStr = "";
  for (let i = 0; i < str.length; i++) {
    // check if character is a letter and then decode
    if ([/A-Z/].test(str[i])) {
      //decode letter
      decodedStr += lookup_table[str[i]];
      //add decoded letter
    } else {
      // else
      decodedStr += str[i];
    }
  }
  return decodedStr;
}

console.log(rot13("SERR PBQR PNZC"));

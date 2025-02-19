const titleCase = (str) => {
  let newText = str.split(" ");
  let resultText = [];
  for (let w in newText) {
    resultText[w] =
      newText[w][0].toUpperCase() + newText[w].slice(1).toLowerCase();
  }
  return resultText.join(" ");
};
console.log(titleCase("I'm a little tea pot"));

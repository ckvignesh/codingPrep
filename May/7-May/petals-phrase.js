function howMuchILoveYou(nbPetals) {
  if (nbPetals < 6) {
    var def = nbPetals;
  } else {
    var def = nbPetals % 6;
  }
  switch (def) {
    case 1:
      console.log("I love you");
      break;
    case 2:
      console.log("a little");
      break;
    case 3:
      console.log("a lot");
      break;
    case 4:
      console.log("passionately");
      break;
    case 5:
      console.log("madly");
      break;
    case 6:
      console.log("not at all");
      break;
  }
}

howMuchILoveYou(7);

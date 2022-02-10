// find the area of an n-interesting polygon,
// where (n=1, A=1, n=2, A=5, n=3, A=13, n=4, A=25, and so on).

const polygon = (n) => {
  if (n > 0 && typeof n == "number") {
    let area = Math.pow(n, 2) + Math.pow(n - 1, 2);
    console.log(area);
  } else {
    console.log("enter a number that is greater than 0");
  }
};

polygon(1); // return 1
polygon(2); // return 4
polygon(3); // return 13
polygon(4); // return 25
polygon(5); // return ?
polygon("abc");
polygon(null);
polygon(undefined);

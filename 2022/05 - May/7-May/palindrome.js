function isPalindrome(x) {
  let og = x.toLowerCase();
  let op = x.split("");
  let ab = op.reverse().join("");
  let pal = ab.toLowerCase();
  return pal == og ? true : false;
}

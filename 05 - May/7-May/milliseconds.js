function past(h, m, s) {
  let hour = h * 60 * 60;
  let min = m * 60;
  return 1000 * (hour + min + s);
}

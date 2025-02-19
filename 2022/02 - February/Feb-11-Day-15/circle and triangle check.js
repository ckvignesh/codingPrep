const circle = (r) => {
  let area = Math.PI * r * r;
  let circumference = 2 * Math.PI * r;
  return `The Area is ${area} and the circumference is ${circumference}`;
};

console.log(circle(20));

const righttriangle = (a, b, h) => {
  if (a * a + b * b == h * h) {
    return "Yes";
  }
  return "No";
};
console.log(righttriangle(20, 10, 40));

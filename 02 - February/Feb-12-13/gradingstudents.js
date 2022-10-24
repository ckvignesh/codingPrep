function gradingStudents(grades) {
  // if less than 30 - fail
  if (grades < 38) {
    return grades;
  } else if (grades >= 38 && grades % 5 <= 3) {
    return grades + 5 - (grades % 5);
  } else {
    return grades;
  }
  // if margin is less than 3 from the next multiple of 5
}
console.log(gradingStudents(38));

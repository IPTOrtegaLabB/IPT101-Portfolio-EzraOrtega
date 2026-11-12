let studentName = 'Ortega, Ezra R.';
let ID = 6689;
let YearLevel = 'II';
let Program = 'Bachelor of Science in Information Technology';

const courses = [
  { name: 'IPT', grade: 80, units: 3 },
  { name: 'App Dev', grade: 88, units: 3 },
  { name: 'Pathfit 4', grade: 87, units: 2 },
  { name: 'Networking 1', grade: 89, units: 3 },
  { name: 'Event Driven Programming', grade: 92, units: 3 },
  { name: 'Arts Appreciation', grade: 80, units: 3 },
  { name: 'STS', grade: 85, units: 3 },
  { name: 'Work Education', grade: 93, units: 0 },
  { name: 'Colloqium', grade: 90, units: 0 }
];

let totalGrade = 
courses[0].grade * courses[0].units +
courses[1].grade * courses[1].units +
courses[2].grade * courses[2].units +
courses[3].grade * courses[3].units +
courses[4].grade * courses[4].units +
courses[5].grade * courses[5].units +
courses[6].grade * courses[6].units +
courses[7].grade * courses[7].units +
courses[8].grade * courses[8].units;

let totalUnits = 
courses[0].units +
courses[1].units +
courses[2].units +
courses[3].units +
courses[4].units +
courses[5].units +
courses[6].units +
courses[7].units +
courses[8].units;

let gwa = totalGrade / totalUnits;
let letter;

if (gwa >= 98) {
    letter = 'A';
} else if (gwa >= 94) {
    letter = 'A-';
} else if (gwa >= 90) {
    letter = 'B+';
} else if (gwa >= 87) {
    letter = 'B';
} else if (gwa >= 83) {
    letter = 'B-';
} else if (gwa >= 80) {
    letter = 'C+';
} else if (gwa >= 77) {
    letter = 'C';
} else if (gwa >= 75) {
    letter = 'D';
} else {
    letter = 'F';
}

console.log("Student name: " + studentName);
console.log("ID Number: " + ID);
console.log("Year Level: " + YearLevel);
console.log("Program: " + Program);
console.log("\n=== Courses Enrolled ===\n");
console.log(courses[0].name + " | Grade: " + courses[0].grade + " | units: " + courses[0].units);
console.log(courses[1].name + " | Grade: " + courses[1].grade + " | units: " + courses[1].units);
console.log(courses[2].name + " | Grade: " + courses[2].grade + " | units: " + courses[2].units);
console.log(courses[3].name + " | Grade: " + courses[3].grade + " | units: " + courses[3].units);
console.log(courses[4].name + " | Grade: " + courses[4].grade + " | units: " + courses[4].units);
console.log(courses[5].name + " | Grade: " + courses[5].grade + " | units: " + courses[5].units);
console.log(courses[6].name + " | Grade: " + courses[6].grade + " | units: " + courses[6].units);
console.log(courses[7].name + " | Grade: " + courses[7].grade + " | units: " + courses[7].units);
console.log(courses[8].name + " | Grade: " + courses[8].grade + " | units: " + courses[8].units);
console.log("GWA: " + gwa);
console.log("Letter Grade: " + letter);




    
const personalInfo = {
    studentName: 'Ortega, Ezra R.',
    Number: 6689,
    Program: 'Bachelor of Science in Information Technology',
    yearLevel: 'II',

    enrolledCourses: {
        course1: { courseTitle: 'IPT', units: 3, finalGrade: 80 },
        course2: { courseTitle: 'App Dev', units: 3, finalGrade: 88 },
        course3: { courseTitle: 'Pathfit 4', units: 2, finalGrade: 87 },
        course4: { courseTitle: 'Networking 1', units: 3, finalGrade: 89 },
        course5: { courseTitle: 'Event Driven Programming', units: 3, finalGrade: 92 },
        course6: { courseTitle: 'Arts Appreciation', units: 3, finalGrade: 80 },
        course7: { courseTitle: 'STS', units: 3, finalGrade: 85 },
        course8: { courseTitle: 'Work Education', units: 0, finalGrade: 93 },
        course9: { courseTitle: 'Colloqium', units: 0, finalGrade: 90 }
    }
};

const c1 = personalInfo.enrolledCourses.course1;
const c2 = personalInfo.enrolledCourses.course2;
const c3 = personalInfo.enrolledCourses.course3;
const c4 = personalInfo.enrolledCourses.course4;
const c5 = personalInfo.enrolledCourses.course5;
const c6 = personalInfo.enrolledCourses.course6;
const c7 = personalInfo.enrolledCourses.course7;
const c8 = personalInfo.enrolledCourses.course8;
const c9 = personalInfo.enrolledCourses.course9;

const totalUnits = c1.units + c2.units + c3.units + c4.units + c5.units +
    c6.units + c7.units + c8.units + c9.units;

const totalWeightedGrade = (c1.finalGrade * c1.units) +
    (c2.finalGrade * c2.units) +
    (c3.finalGrade * c3.units) +
    (c4.finalGrade * c4.units) +
    (c5.finalGrade * c5.units) +
    (c6.finalGrade * c6.units) +
    (c7.finalGrade * c7.units) +
    (c8.finalGrade * c8.units) +
    (c9.finalGrade * c9.units);

const computedGWA = (totalWeightedGrade / totalUnits).toFixed(2);

let computedLetterGrade = 'F (Failed)';

if (computedGWA >= 98 && computedGWA <= 100) {
    computedLetterGrade = 'A';
} else if (computedGWA >= 94 && computedGWA < 98) {
    computedLetterGrade = 'A-';
} else if (computedGWA >= 90 && computedGWA < 94) {
    computedLetterGrade = 'B+';
} else if (computedGWA >= 87 && computedGWA < 90) {
    computedLetterGrade = 'B';
} else if (computedGWA >= 83 && computedGWA < 87) {
    computedLetterGrade = 'B-';
} else if (computedGWA >= 80 && computedGWA < 83) {
    computedLetterGrade = 'C+';
} else if (computedGWA >= 77 && computedGWA < 80) {
    computedLetterGrade = 'C';
} else if (computedGWA >= 75 && computedGWA < 77) {
    computedLetterGrade = 'D';
}

personalInfo.gwa = computedGWA;
personalInfo.letterGrade = computedLetterGrade;

console.log(`Name: ${personalInfo.studentName}`);
console.log(`General Weighted Average: ${personalInfo.gwa}`);
console.log(`Letter Grade: ${personalInfo.letterGrade}`);
let bsit_students = {
    Student1: {
        studentName: 'Ezra Ortega',
        studentID: '2026-6689',
        YearLevel: 2,
        Program: 'Bachelor of Science in Information Technology',
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
    },

    Student2: {
        studentName: 'Benz Andrie Balbin',
        studentID: '2026-6719',
        YearLevel: 2,
        Program: 'Bachelor of Science in Information Technology',
        enrolledCourses: {
            course1: { courseTitle: 'IPT', units: 3, finalGrade: 85 },
            course2: { courseTitle: 'App Dev', units: 3, finalGrade: 90 },
            course3: { courseTitle: 'Pathfit 4', units: 2, finalGrade: 88 },
            course4: { courseTitle: 'Networking 1', units: 3, finalGrade: 90 },
            course5: { courseTitle: 'Event Driven Programming', units: 3, finalGrade: 93 },
            course6: { courseTitle: 'Arts Appreciation', units: 3, finalGrade: 88 },
            course7: { courseTitle: 'STS', units: 3, finalGrade: 89 },
            course8: { courseTitle: 'Work Education', units: 0, finalGrade: 96 },
            course9: { courseTitle: 'Colloqium', units: 0, finalGrade: 90 }
        }
    },

    Student3: {
        studentName: 'Josue Camenade Jr.',
        studentID: '2026-6720',
        YearLevel: 2,
        Program: 'Bachelor of Science in Information Technology',
        enrolledCourses: {
            course1: { courseTitle: 'IPT', units: 3, finalGrade: 90 },
            course2: { courseTitle: 'App Dev', units: 3, finalGrade: 96 },
            course3: { courseTitle: 'Pathfit 4', units: 2, finalGrade: 90 },
            course4: { courseTitle: 'Networking 1', units: 3, finalGrade: 91 },
            course5: { courseTitle: 'Event Driven Programming', units: 3, finalGrade: 94 },
            course6: { courseTitle: 'Arts Appreciation', units: 3, finalGrade: 85 },
            course7: { courseTitle: 'STS', units: 3, finalGrade: 88 },
            course8: { courseTitle: 'Work Education', units: 0, finalGrade: 90 },
            course9: { courseTitle: 'Colloqium', units: 0, finalGrade: 88 }
        }
    },

    Student4: {
        studentName: 'Mark Angelo Javier',
        studentID: '2026-6969',
        YearLevel: 2,
        Program: 'Bachelor of Science in Information Technology',
        enrolledCourses: {
            course1: { courseTitle: 'IPT', units: 3, finalGrade: 82 },
            course2: { courseTitle: 'App Dev', units: 3, finalGrade: 86 },
            course3: { courseTitle: 'Pathfit 4', units: 2, finalGrade: 84 },
            course4: { courseTitle: 'Networking 1', units: 3, finalGrade: 88 },
            course5: { courseTitle: 'Event Driven Programming', units: 3, finalGrade: 90 },
            course6: { courseTitle: 'Arts Appreciation', units: 3, finalGrade: 83 },
            course7: { courseTitle: 'STS', units: 3, finalGrade: 85 },
            course8: { courseTitle: 'Work Education', units: 0, finalGrade: 91 },
            course9: { courseTitle: 'Colloqium', units: 0, finalGrade: 89 }
        }
    }
};

// Student1
const s1 = bsit_students.Student1;
const s1c1 = s1.enrolledCourses.course1;
const s1c2 = s1.enrolledCourses.course2;
const s1c3 = s1.enrolledCourses.course3;
const s1c4 = s1.enrolledCourses.course4;
const s1c5 = s1.enrolledCourses.course5;
const s1c6 = s1.enrolledCourses.course6;
const s1c7 = s1.enrolledCourses.course7;
const s1c8 = s1.enrolledCourses.course8;
const s1c9 = s1.enrolledCourses.course9;
const s1TotalUnits = s1c1.units + s1c2.units + s1c3.units + s1c4.units + s1c5.units + s1c6.units + s1c7.units + s1c8.units + s1c9.units;
const s1TotalWeightedGrade = (s1c1.finalGrade * s1c1.units) + (s1c2.finalGrade * s1c2.units) + (s1c3.finalGrade * s1c3.units) + (s1c4.finalGrade * s1c4.units) + (s1c5.finalGrade * s1c5.units) + (s1c6.finalGrade * s1c6.units) + (s1c7.finalGrade * s1c7.units) + (s1c8.finalGrade * s1c8.units) + (s1c9.finalGrade * s1c9.units);
const s1GWA = s1TotalWeightedGrade / s1TotalUnits;
let s1Letter = 'F (Failed)';

if (s1GWA >= 98 && s1GWA <= 100) {
    s1Letter = 'A';
} else if (s1GWA >= 94 && s1GWA < 98) {
    s1Letter = 'A-';
} else if (s1GWA >= 90 && s1GWA < 94) {
    s1Letter = 'B+';
} else if (s1GWA >= 87 && s1GWA < 90) {
    s1Letter = 'B';
} else if (s1GWA >= 83 && s1GWA < 87) {
    s1Letter = 'B-';
} else if (s1GWA >= 80 && s1GWA < 83) {
    s1Letter = 'C+';
} else if (s1GWA >= 77 && s1GWA < 80) {
    s1Letter = 'C';
} else if (s1GWA >= 75 && s1GWA < 77) {
    s1Letter = 'D';
}

s1.gwa = s1GWA;
s1.letterGrade = s1Letter;

// Student2
const s2 = bsit_students.Student2;
const s2c1 = s2.enrolledCourses.course1;
const s2c2 = s2.enrolledCourses.course2;
const s2c3 = s2.enrolledCourses.course3;
const s2c4 = s2.enrolledCourses.course4;
const s2c5 = s2.enrolledCourses.course5;
const s2c6 = s2.enrolledCourses.course6;
const s2c7 = s2.enrolledCourses.course7;
const s2c8 = s2.enrolledCourses.course8;
const s2c9 = s2.enrolledCourses.course9;
const s2TotalUnits = s2c1.units + s2c2.units + s2c3.units + s2c4.units + s2c5.units + s2c6.units + s2c7.units + s2c8.units + s2c9.units;
const s2TotalWeightedGrade = (s2c1.finalGrade * s2c1.units) + (s2c2.finalGrade * s2c2.units) + (s2c3.finalGrade * s2c3.units) + (s2c4.finalGrade * s2c4.units) + (s2c5.finalGrade * s2c5.units) + (s2c6.finalGrade * s2c6.units) + (s2c7.finalGrade * s2c7.units) + (s2c8.finalGrade * s2c8.units) + (s2c9.finalGrade * s2c9.units);
const s2GWA = s2TotalWeightedGrade / s2TotalUnits;
let s2Letter = 'F (Failed)';

if (s2GWA >= 98 && s2GWA <= 100) {
    s2Letter = 'A';
} else if (s2GWA >= 94 && s2GWA < 98) {
    s2Letter = 'A-';
} else if (s2GWA >= 90 && s2GWA < 94) {
    s2Letter = 'B+';
} else if (s2GWA >= 87 && s2GWA < 90) {
    s2Letter = 'B';
} else if (s2GWA >= 83 && s2GWA < 87) {
    s2Letter = 'B-';
} else if (s2GWA >= 80 && s2GWA < 83) {
    s2Letter = 'C+';
} else if (s2GWA >= 77 && s2GWA < 80) {
    s2Letter = 'C';
} else if (s2GWA >= 75 && s2GWA < 77) {
    s2Letter = 'D';
}

s2.gwa = s2GWA;
s2.letterGrade = s2Letter;

// Student3
const s3 = bsit_students.Student3;
const s3c1 = s3.enrolledCourses.course1;
const s3c2 = s3.enrolledCourses.course2;
const s3c3 = s3.enrolledCourses.course3;
const s3c4 = s3.enrolledCourses.course4;
const s3c5 = s3.enrolledCourses.course5;
const s3c6 = s3.enrolledCourses.course6;
const s3c7 = s3.enrolledCourses.course7;
const s3c8 = s3.enrolledCourses.course8;
const s3c9 = s3.enrolledCourses.course9;
const s3TotalUnits = s3c1.units + s3c2.units + s3c3.units + s3c4.units + s3c5.units + s3c6.units + s3c7.units + s3c8.units + s3c9.units;
const s3TotalWeightedGrade = (s3c1.finalGrade * s3c1.units) + (s3c2.finalGrade * s3c2.units) + (s3c3.finalGrade * s3c3.units) + (s3c4.finalGrade * s3c4.units) + (s3c5.finalGrade * s3c5.units) + (s3c6.finalGrade * s3c6.units) + (s3c7.finalGrade * s3c7.units) + (s3c8.finalGrade * s3c8.units) + (s3c9.finalGrade * s3c9.units);
const s3GWA = s3TotalWeightedGrade / s3TotalUnits;
let s3Letter = 'F (Failed)';

if (s3GWA >= 98 && s3GWA <= 100) {
    s3Letter = 'A';
} else if (s3GWA >= 94 && s3GWA < 98) {
    s3Letter = 'A-';
} else if (s3GWA >= 90 && s3GWA < 94) {
    s3Letter = 'B+';
} else if (s3GWA >= 87 && s3GWA < 90) {
    s3Letter = 'B';
} else if (s3GWA >= 83 && s3GWA < 87) {
    s3Letter = 'B-';
} else if (s3GWA >= 80 && s3GWA < 83) {
    s3Letter = 'C+';
} else if (s3GWA >= 77 && s3GWA < 80) {
    s3Letter = 'C';
} else if (s3GWA >= 75 && s3GWA < 77) {
    s3Letter = 'D';
}

s3.gwa = s3GWA;
s3.letterGrade = s3Letter;

// Student4
const s4 = bsit_students.Student4;
const s4c1 = s4.enrolledCourses.course1;
const s4c2 = s4.enrolledCourses.course2;
const s4c3 = s4.enrolledCourses.course3;
const s4c4 = s4.enrolledCourses.course4;
const s4c5 = s4.enrolledCourses.course5;
const s4c6 = s4.enrolledCourses.course6;
const s4c7 = s4.enrolledCourses.course7;
const s4c8 = s4.enrolledCourses.course8;
const s4c9 = s4.enrolledCourses.course9;
const s4TotalUnits = s4c1.units + s4c2.units + s4c3.units + s4c4.units + s4c5.units + s4c6.units + s4c7.units + s4c8.units + s4c9.units;
const s4TotalWeightedGrade = (s4c1.finalGrade * s4c1.units) + (s4c2.finalGrade * s4c2.units) + (s4c3.finalGrade * s4c3.units) + (s4c4.finalGrade * s4c4.units) + (s4c5.finalGrade * s4c5.units) + (s4c6.finalGrade * s4c6.units) + (s4c7.finalGrade * s4c7.units) + (s4c8.finalGrade * s4c8.units) + (s4c9.finalGrade * s4c9.units);
const s4GWA = s4TotalWeightedGrade / s4TotalUnits;
let s4Letter = 'F (Failed)';

if (s4GWA >= 98 && s4GWA <= 100) {
    s4Letter = 'A';
} else if (s4GWA >= 94 && s4GWA < 98) {
    s4Letter = 'A-';
} else if (s4GWA >= 90 && s4GWA < 94) {
    s4Letter = 'B+';
} else if (s4GWA >= 87 && s4GWA < 90) {
    s4Letter = 'B';
} else if (s4GWA >= 83 && s4GWA < 87) {
    s4Letter = 'B-';
} else if (s4GWA >= 80 && s4GWA < 83) {
    s4Letter = 'C+';
} else if (s4GWA >= 77 && s4GWA < 80) {
    s4Letter = 'C';
} else if (s4GWA >= 75 && s4GWA < 77) {
    s4Letter = 'D';
}

s4.gwa = s4GWA;
s4.letterGrade = s4Letter;

console.log("-----------------------------")
console.log("==== ---BSIT Students--- ====")
console.log("-----------------------------")

console.log("===== Student 1 =====");
console.log(`Name: ${s1.studentName}`);
console.log(`ID Number: ${s1.studentID}`);
console.log(`Year Level: ${s1.YearLevel}`);
console.log(`Program: ${s1.Program}`);
console.log(`General Weighted Average: ${s1.gwa}`);
console.log(`Letter Grade: ${s1.letterGrade}`);
console.log("");

console.log("===== Student 2 =====");
console.log(`Name: ${s2.studentName}`);
console.log(`ID Number: ${s2.studentID}`);
console.log(`Year Level: ${s2.YearLevel}`);
console.log(`Program: ${s2.Program}`);
console.log(`General Weighted Average: ${s2.gwa}`);
console.log(`Letter Grade: ${s2.letterGrade}`);
console.log("");

console.log("===== Student 3 =====");
console.log(`Name: ${s3.studentName}`);
console.log(`ID Number: ${s3.studentID}`);
console.log(`Year Level: ${s3.YearLevel}`);
console.log(`Program: ${s3.Program}`);
console.log(`General Weighted Average: ${s3.gwa}`);
console.log(`Letter Grade: ${s3.letterGrade}`);
console.log("");

console.log("===== Student 4 =====");
console.log(`Name: ${s4.studentName}`);
console.log(`ID Number: ${s4.studentID}`);
console.log(`Year Level: ${s4.YearLevel}`);
console.log(`Program: ${s4.Program}`);
console.log(`General Weighted Average: ${s4.gwa}`);
console.log(`Letter Grade: ${s4.letterGrade}`);
console.log("");
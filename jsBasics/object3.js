const course = {
    courseName: 'Learn JavaScript',
    price: 100,
    courseInstructor: 'Jatin'
}

console.log(course.courseInstructor); // Jatin


// Destructuring


const {courseInstructor} = course;
// const courseInstructor = course.courseInstructor;
console.log(courseInstructor); // Jatin

const {courseInstructor: instructor} = course;
// const instructor = course.courseInstructor;
console.log(instructor); // Jatin




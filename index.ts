#! usr/bin/env node
import inquirer from "inquirer";

class student {
  id: string;
  name: string;
  courseEnrolled: string[];
  feesAmount: number;

  constructor(
    id: string,
    name: string,
    courseEnrolled: string[],
    feesAmount: number
  ) {
    this.id = id;
    this.name = name;
    this.courseEnrolled = courseEnrolled;
    this.feesAmount = feesAmount;
  }
}

let basedId = 12416;
let studentId: string = "";
let continueEnrolled = true;
let students: student[] = [];

do {
  let action = await inquirer.prompt({
    type: "list",
    name: "ans",
    message: "please select an option: \n",
    choices: ["Enroll a student", "show student status"],
  });

  if (action.ans == "Enroll a student") {
    let studentName = await inquirer.prompt({
      type: "input",
      name: "ans",
      message: "please enter your name:",
    });

    let trimmedStudentName = studentName.ans.trim().toLowerCase();
    let studentNameCheck = students.map((obj) => obj.name);

    if (studentNameCheck.includes(trimmedStudentName) === false) {
      if (trimmedStudentName !== "") {
        basedId++;
        studentId = "STID" + basedId;

        console.log("\n\tyour account has been created");
        console.log(`welcome, ${trimmedStudentName}!`);

        let course = await inquirer.prompt({
          type: "list",
          name: "ans",
          message: "please select a course",
          choices: ["IT", "English", "Cooking"],
        });

        let courseFees = 0;
        switch (course.ans) {
          case "IT":
            courseFees = 5000;
            break;

          case "English":
            courseFees = 500;
            break;



          case "cooking":
            courseFees = 200;
            break;
        }

        let courseConfirm = await inquirer.prompt({
            type: "confirm",
            name: "ans",
            message: "Do you want to enroll in this course"
        })

        if(courseConfirm.ans === true){
            let Student = new student(studentId, trimmedStudentName, [course.ans], courseFees)
            students.push(Student)
            console.log("you have enrolled i this course");
            
        }
      }else{
        console.log("invalid name ");
        
      }
    }else{
        console.log("this name is already exists");
        
    }
  }
  else if(action.ans === "show student status"){
        if(students.length !== 0){
            let studentNameCheck = students.map(e => e.name)

            let selectedStudent = await inquirer.prompt({
                type: "list",
                name: "ans",
                message: "please select name",
                choices: studentNameCheck

            })

            let foundStudent = students.find(Student => Student.name === selectedStudent.ans)

            console.log("student information ");
            console.log(foundStudent);
            console.log("\n");
        
            
        }else{
            console.log("Record is empty");
        }
  }
  let userConfirm = await inquirer.prompt({
    type: "confirm",
    name: "ans",
    message: "Do you want to continue?"
  })

  if(userConfirm.ans === false){
    continueEnrolled = false
  }
} while (continueEnrolled);

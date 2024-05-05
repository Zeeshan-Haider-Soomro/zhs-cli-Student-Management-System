import inquirer from "inquirer"

class student{
    id: string;
    name: string;
    courseEnrolled: string[];
    feesAmount: number;

    constructor(id: string, name: string, courseEnrolled: string[], feesAmount: number){
        this.id = id
        this.name = name
        this.courseEnrolled = courseEnrolled
        this.feesAmount = feesAmount
    }
}

let basedId = 12416
let studentId: string = "";
let continueEnrolled = true;
let students: student[] = []

do{
    let action = await inquirer.prompt({
        type: "list",
        name: "ans",
        message: "please select an option: \n",
        choices: ["Enroll a student", "show student status"]
    })

    if(action.ans == "Enroll a student"){
        
    }
}









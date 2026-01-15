let age = 0, confirm = false, time = 0, score = 0, roleChoise = "", rulesResponse = "";
const fullName = "";
role = [coder, tutor, visitor];
let a = user();
function AgeValidation(age) {
    if (age >= 18) {
        return true
    }
    return false
}

function RoleValidation(role, roleChoise) {
    for (let index = 0; index < role; index++) {
        if (roleChoise == role[index]) {
            confirm = true;
            return confirm
        }
        else {
            confirm = false
        }
    }
    return confirm
}

function ScoreCalculation(score,age,roleChoise,time) {
    
}

function main() {
    flag = true
    while (flag == true) {
        fullName = prompt("Enter your full name:");
        if (fullName === "" || fullName === null) {
            alert("The name cannot be a empty space")
            continue
        }
        age = Number(prompt("Sign your age:"))
        if (isNaN(age) || age <= 0) {
            alert("Error: The age must be a valid number");
            continue
        }
        AgeValidation(age);
        if (AgeValidation == false) {
            alert("You're not an adult so you have to leave")
        }
        roleChoise = prompt("Enter your role (coder/tutor/visitor):").toLowerCase();
        if (roleChoise === "" || roleChoise === null) {
            alert("The role cannot be a empty space");
            continue
        }
        RoleValidation(role, roleChoise);
        if (RoleValidation == false) {
            alert("You enter a invalid role");
            continue
        }
        rulesResponse = prompt("Do you accept the the lab's rules? (yes/no):").toLowerCase();
        if (rulesResponse === "" || rulesResponse === null || rulesResponse == "no") {
            alert("You don't accept the lab's rules so you have to leave");
            continue
        }
        time = Number(prompt("Enter your hours available for today:"))
        if (isNaN(time) || time <= 0 || time > 13) {
            alert("Error: The time available must be valid");
            continue
        }
    }
}
main();
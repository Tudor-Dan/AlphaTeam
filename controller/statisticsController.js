const display = require("../view/display");
const dataManager = require("../model/dataManager");

const getAvg = () => {
    let studentsTable = dataManager.readData("data.json")
    let allGrades = []
    let avgGradesStudents = []
    studentsTable.forEach(element => {
        allGrades.push([element['subject1Mark'], element['subject2Mark'], element['subject3Mark'], element['subject4Mark']])
    });
    for (let i in allGrades) {
        let sum = 0;
        for (let j in allGrades[i]) {
            sum += allGrades[i][j]
        }
        avgGradesStudents.push(sum)
        avgGradesStudents[i] = avgGradesStudents[i] / 4
    }
    console.log(avgGradesStudents)
    
}

const choose = () => {
    const userOption = display.getInput("Please enter a number: ")
    if (userOption === '1') {
        getAvg()
    } else if (userOption === '0') {
        return false;
    } else {
        display.printMessage("There is no such option.", true);
    }
    return true;
}

const handleSubmenu = () => {
    const optionsArray = ["Exit submenu", "Show average of averages for all subjects"];
    display.printMenu("Statistics Submenu", optionsArray);
}

const submenu = () => {
    let isRunning = true;
    while (isRunning) {
        handleSubmenu();
        try {
            isRunning = choose();
        } catch (error) {
            display.printMessage(error, true);
        }
    }
}

module.exports = {submenu};
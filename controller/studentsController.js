const display = require("../view/display");
const dataManager = require("../model/dataManager");

const getAllStudents = () => {
    const students = dataManager.readData("data.json");
    display.printData(students, "Students Table:");
}

const hasChosen = () => {
    const userOption = display.getInput("Please enter a number: ");
    if (userOption === "1") {
        getAllStudents();
    } else if (userOption === "2") {
        display.printMessage("'Add student' not implemented yet.", true);
    } else if (userOption === "3") {
        display.printMessage("'Update student' not implemented yet.", true);
    } else if (userOption === "4") {
        display.printMessage("'Delete student' not implemented yet.", true);
    } else if (userOption === "5") {
        display.printMessage(`'Display the number of school classes' ${numOfSchoolClasses()}`, true);
    } else if (userOption === "6") {
        display.printMessage(`'Present the general average for each student' ${genAverageOfEachStudent()}`, true);
    } else if (userOption === "0") {
        return false;
    } else {
        display.printMessage("There is no such option.", true);
    }
    return true;
}

const handleSubmenu = () => {
    const optionsArray = ["Exit submenu", "List students", "Add a new student", "Update student", "Delete student",
        "Display the number of school classes", "Present the general average for each student"];
    display.printMenu("Student Classes Submenu", optionsArray);
}

const submenu = () => {
    let isRunning = true;
    while (isRunning) {
        handleSubmenu();
        try {
            isRunning = hasChosen();
        } catch (error) {
            display.printMessage(error, true);
        }
    }
}

//ID: 2 Display the number of school classes
const numOfSchoolClasses = () => {
    const data = dataManager.readData("data.json");
    let classes = [];
    data.forEach(item => {
        classes.push(item.class);
    })
    let uniqueClasses = [...new Set(classes)];
    // console.log(uniqueClasses);
    // display.printData(students, "Students Table:");
    display.printMessage(uniqueClasses.length);
}
numOfSchoolClasses();

//ID: 4 Present the general average for each student
const genAverageOfEachStudent = () => {
    const data = dataManager.readData("data.json");
    const subNum = [1, 2, 3, 4];
    let subjectMark = `subject${subNum}Mark`;
    data.forEach(item => {
        console.log(item[0].subject2Mark);
    })
}

module.exports = {submenu};
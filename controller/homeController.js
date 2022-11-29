const display = require("../view/display");
const studentsController = require("./studentsController");
const statisticsController = require("./statisticsController")

const choose = () => {
    const userOption = display.getInput("Please enter a number: ");
    if (userOption === "1") {
        studentsController.submenu();
    } else if (userOption === "2") {
        statisticsController.submenu()
    } else if (userOption === "0") {
        display.printMessage("Bueno, hasta la vista, companeros!");
        process.exit();
    } else {
        display.printMessage("There is no such option.", true);
    }
}

const handleMenu = () => {
    display.printMessage("Welcome to 'Universidad Técnica de Buenas Maneras y Pistoleros!'");
    const mainMenuOptions = ["Exit program", "School Students", "Statistics"];
    display.printMenu("Main Menu", mainMenuOptions);
}

const mainMenu = () => {
    while (true) {
        handleMenu();
        try {
            choose();
        } catch (error) {
            display.printMessage(error, true);
        }
    }
}

module.exports = {mainMenu};
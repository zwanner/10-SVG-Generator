
// Import the inquirer package
const inquirer = require("inquirer");
// Import the fs package
const fs = require("fs");

const { Triangle, Square, Circle } = require("./lib/shapes.js");

let shape;

// Prompt the user to enter up to three characters
inquirer
  .prompt([
    {
      type: "input",
      message: "Enter up to three characters:",
      name: "characters",
    },
    {
      type: "input",
      message: "Enter a text color:",
      name: "textColor",
    },
    {
      type: "list",
      message: "Choose a shape:",
      choices: ["Circle", "Triangle", "Square"],
      name: "shape",
    },
    {
      type: "input",
      message: "Enter a shape color:",
      name: "shapeColor",
    },
  ])
  .then((response) => {
    // Create a new shape based on the user's choice
    if (response.shape === "Circle") {
      shape = new Circle(50, response.shapeColor, response.textColor, response.characters);
    } else if (response.shape === "Triangle") {
      shape = new Triangle(50, 50, response.shapeColor, response.textColor, response.characters);
    } else {
      shape = new Square(50, response.shapeColor, response.textColor, response.characters);
    }
    fs.writeFileSync("logo.svg", shape.render());
    console.log("Generated logo.svg");
  }
  );
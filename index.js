
const inquirer = require('inquirer');
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes.js");



// Prompt the user to enter up to three characters
let prompts = [
    {
      type: "input",
      message: "Enter up to three characters:",
      name: "characters",
      validate: function (value) {
        if (value.length <= 3) {
            return true;
        } else {
            return 'Please enter up to three characters.';
        }
    }
    },
    {
      type: "list",
      message: "Enter a text color:",
      choices: ["red", "green", "blue"],
      name: "textColor",
    },
    {
      type: "list",
      message: "Choose a shape:",
      choices: ["Circle", "Triangle", "Square"],
      name: "shape",
    },
    {
      type: "list",
      message: "Enter a shape color:",
      choices: ["red", "green", "blue"],
      name: "shapeColor",
    }
  ];
  
  inquirer.prompt(prompts).then(response => {
    let shape;
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
var queen = {
  position: {
    row: 0,
    column: 0,
  },
  direction: "S",
};

var condition = "yes";
while (condition != "no") {
  var direction = window.prompt("Enter the direction");
  var steps = window.prompt("Enter the number of steps");

  steps = parseInt(steps);
  move(direction, steps);
  condition = window.prompt("Do you want to have a turn?");
}

function move(direction, steps) {
  let temp;
  let temp1;
  switch (direction) {
    case "S":
      temp = queen.position.row + steps;
      if (temp > 8 || temp < 0) {
        console.log("Out of boundary");
      } else {
        queen.position.row = queen.position.row + steps;
      }

      break;
    case "N":
      temp = queen.position.row - steps;
      if (temp > 8 || temp < 0) {
        console.log("Out of boundary");
      } else {
        queen.position.row = queen.position.row - steps;
      }
      break;
    case "E":
      temp = queen.position.column + steps;
      if (temp > 8 || temp < 0) {
        console.log("Out of boundary");
      } else {
        queen.position.column = queen.position.column + steps;
      }
      break;
    case "W":
      temp = queen.position.column - steps;
      if (temp > 8 || temp < 0) {
        console.log("Out of boundary");
      } else {
        queen.position.column = queen.position.column - steps;
      }
      break;

    case "SE":
      temp = queen.position.row + steps;
      temp1 = queen.position.column + steps;
      if ((temp > 8 || temp < 0) && (temp1 > 8 || temp1 < 0)) {
        console.log("Out of boundary");
      } else {
        queen.position.row = queen.position.row + steps;
        queen.position.column = queen.position.column + steps;
      }
      break;
    case "NW":
      temp = queen.position.row - steps;
      temp1 = queen.position.column - steps;
      if ((temp > 8 || temp < 0) && (temp1 > 8 || temp1 < 0)) {
        console.log("Out of boundary");
      } else {
        queen.position.row = queen.position.row - steps;
        queen.position.column = queen.position.column - steps;
      }
      break;
    case "SW":
      temp = queen.position.row + steps;
      temp1 = queen.position.column - steps;
      if ((temp > 8 || temp < 0) && (temp1 > 8 || temp1 < 0)) {
        console.log("Out of boundary");
      } else {
        queen.position.row = queen.position.row + steps;
        queen.position.column = queen.position.column - steps;
      }
      break;
    case "NE":
      temp = queen.position.row - steps;
      temp1 = queen.position.column + steps;
      if ((temp > 8 || temp < 0) && (temp1 > 8 || temp1 < 0)) {
        console.log("Out of boundary");
      } else {
        queen.position.row = queen.position.row - steps;
        queen.position.column = queen.position.column + steps;
      }
      break;

    default:
      console.log("Invalid Input");
  }
  console.log(queen.position);
}

var myRover = {
  position: [0,0],
  direction: 'N'
};

function createArray(a,b) {

  var xMax = a;
  var yMax = b;
  var playground = [];

  for (x=0; x<xMax; x++) {
    playground[x]= [];
      for (y=0; y<yMax; y++) {
        playground[x][y]=0;
      }
  }
  return playground;
}

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      if (rover.position[0] === 9) {
        rover.position[0] = 0;
      } else {rover.position[0]++;}
      break;
    case 'E':
      if (rover.position[1] === 9) {
        rover.position[1] = 0;
      } else {rover.position[1]++;}
      break;
    case 'S':
      if (rover.position[0] === 0) {
        rover.position[0] = 9;
      } else {rover.position[0]--;}
      break;
    case 'W':
      if (rover.position[1] === 0) {
        rover.position[1] = 9;
      } else {rover.position[1]--;}
      break;
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function goBack(rover) {
  switch(rover.direction) {
    case 'N':
      if (rover.position[0] === 0) {
        rover.position[0] = 9;
      } else {rover.position[0]--;}
      break;
    case 'E':
      if (rover.position[1] === 0) {
        rover.position[1] = 9;
      } else {rover.position[1]--;}
      break;
    case 'S':
      if (rover.position[0] === 9) {
        rover.position[0] = 0;
      } else {rover.position[0]++;}
      break;
    case 'W':
      if (rover.position[1] === 9) {
        rover.position[1] = 0;
      } else {rover.position[1]++;}
      break;
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function goLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'W'
      break;
    case 'E':
      rover.direction = 'N'
      break;
    case 'S':
      rover.direction = 'E'
      break;
    case 'W':
      rover.direction = 'S'
      break;
  };
  console.log('New Rover Direction: ' + rover.direction);
}

function goRight(rover) {
    switch(rover.direction) {
      case 'N':
        rover.direction = 'E'
        break;
      case 'E':
        rover.direction = 'S'
        break;
      case 'S':
        rover.direction = 'W'
        break;
      case 'W':
        rover.direction = 'N'
        break;
    };
    console.log('New Rover Direction: ' + rover.direction);
}

function allMovements(rover,array) {
  for(i = 0; i < array.length; i++) {
    switch(array[i]) {
      case 'f':
        goForward(rover)
        break;
      case 'b':
        goBack(rover)
        break;
      case 'l':
        goLeft(rover)
        break;
      case 'r':
        goRight(rover)
        break;
    }
  }
  console.log('Rover final position is: ' + rover.position + ', and final direction is: ' + rover.direction);
}

var grid = createArray(10,10);
var moves = ['f','f','l','f','f','f','r','b','b','l'];
allMovements(myRover,moves);

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
  console.log(rover.position);
}

var moves = [f,b,r,r,l,f,f,b,b];

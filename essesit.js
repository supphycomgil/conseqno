function createBoard(direction) {
  const size = 4;
  let board = new Array(size).fill(null).map(() => new Array(size).fill(0));
  
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      switch (direction) {
        case 'down':
          board[i][j] = i * size + j + 1;
          break;
        case 'up':
          board[i][j] = (size - i - 1) * size + (size - j - 1) + 1;
          break;
        case 'left':
          board[i][j] = j * size + i + 1;
          break;
        case 'right':
          board[i][j] = (size - j - 1) * size + i + 1;
          break;
        case 'clockwise':
          board[i][j] = (size - j - 1) * size + i + 1;
          break;
        case 'counterClockwise':
          board[i][j] = j * size + i + 1;
          break;
      }
    }
  }
  return board;
}

// Example usage:
const boardDown = createBoard('down');
const boardUp = createBoard('up');
const boardLeft = createBoard('left');
const boardRight = createBoard('right');
const boardClockwise = createBoard('clockwise');
const boardCounterClockwise = createBoard('counterClockwise');

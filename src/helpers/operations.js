import {DIRECTION_DOWN, DIRECTION_LEFT, DIRECTION_RIGHT} from './constants';

export function rotate(matrix) {
  const matrixTranslated = [];
  for (let a = 0; a < matrix.length; a += 1) {
    const newRow = [];
    for (let b = 0; b < matrix[a].length; b += 1) {
      newRow.push(matrix[b][a]);
    }
    matrixTranslated.push(newRow);
  }
  return matrixTranslated;
}

export function checkCollision(matrixPosition) {
  return false;
}

// startMatrix contains coordinates for row / column position
// contains at least 4 coordinates.
// row || column  [] [] [] []

function isOwnCoordinate(row, column, startMatrix) {
  for (let zz = 0; zz < startMatrix.length; zz += 1) {
    const rowStart = startMatrix[zz][0];
    const columnStart = startMatrix[zz][1];
    console.log(`rowStart ${rowStart} - columnStart ${columnStart}`);
    console.log(`rowInput ${row} - columnInput ${column}`);
    if (row === rowStart && column === columnStart) {
      console.log(`is my own ${row} - ${column}`);
      return true;
    }
  }
  console.log(`is not ${row} - ${column}`);
  return false;
}

export function translate(
  startMatrix,
  currentMatrix,
  type,
  direction = DIRECTION_DOWN,
) {
  let nabrak = false;

  if (startMatrix && currentMatrix.length) {
    let parentMatrix = currentMatrix;

    for (let c = 0; c < startMatrix.length; c += 1) {
      const coordinates = startMatrix[c];
      let row = coordinates[0];
      let column = coordinates[1];

      if (direction === DIRECTION_DOWN && row < 20) {
        // karena ini ke bawah jadi +1 coordinatenya

        row = coordinates[0] + 1;
      } else if (direction === DIRECTION_LEFT && column > 0) {
        column = column - 1;
      } else if (direction === DIRECTION_RIGHT && column < 9) {
        column = column + 1;
      } else if (direction === DIRECTION_DOWN && row >= 20) {
        console.log('is going down and stop end of row');
        nabrak = true;
        return {matrix: parentMatrix, nabrak};
      }

      console.log(`Row : ${row} Column : ${column}`);
      const targetMatrix = currentMatrix[row][column];
      console.log('targetMatrix: ', targetMatrix);

      if (isOwnCoordinate(row, column, startMatrix)) {
        parentMatrix[startMatrix[c][0]][startMatrix[c][1]] = 0; // isi kosong karena pindah
        parentMatrix[row][column] = type; //
        console.log('is ownCoordinate !');
      } else {
        console.log('NOT own coordinate');
        if (targetMatrix > 0) {
          console.log('udah mentok sbnrnya cuy');
          nabrak = true;
          return {nabrak, matrix: currentMatrix};
        }

        if (direction === DIRECTION_DOWN) {
          console.log(
            'is here direction_down_and not isOwnCoordinate',
            parentMatrix[row][column],
          );
          parentMatrix[startMatrix[c][0]][startMatrix[c][1]] = 0; // isi kosong karena pindah

          parentMatrix[row][column] = type; //
          nabrak = false;
          //return {matrix: parentMatrix, nabrak};
        }

        // return {matrix: currentMatrix, nabrak};
      }
    } // for loop
    console.log('yup, nothing stopped me', nabrak);
    return {matrix: parentMatrix, nabrak};
  }

  return {matrix: currentMatrix, nabrak};
}

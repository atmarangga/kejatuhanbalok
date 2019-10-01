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

export function translateDown(startMatrix, currentMatrix) {
  if (startMatrix && currentMatrix.length) {
    
  }

  return parentMatrix;
}

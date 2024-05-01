//author: Hae Rin Hong

var tileArray = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", null],
];

var blankTileRow = 2;
var blankTileCol = 2;

function getRightTile() {
  if (blankTileCol < 2) {
    return tileArray[blankTileRow][blankTileCol + 1];
  } else {
    return null;
  }
}

function getLeftTile() {
  if (blankTileCol > 0) {
    return tileArray[blankTileRow][blankTileCol - 1];
  } else {
    return null;
  }
}

function getTopTile() {
  if (blankTileRow > 0) {
    return tileArray[blankTileRow - 1][blankTileCol];
  } else {
    return null;
  }
}

function getBottomTile() {
  if (blankTileRow < 2) {
    return tileArray[blankTileRow + 1][blankTileCol];
  } else {
    return null;
  }
}

function doMove(direction) {
  $("#" + tileArray[blankTileRow][blankTileCol]).finish();
  if (getLeftTile() != null && direction == "d") {
    $("#" + getLeftTile()).animate({ left: "+=200px" }, 2000);
    tileArray[blankTileRow][blankTileCol] = getLeftTile();
    blankTileCol -= 1;
    tileArray[blankTileRow][blankTileCol] = null;
  } else if (getRightTile() != null && direction == "a") {
    $("#" + getRightTile()).animate({ left: "-=200px" }, 2000);
    tileArray[blankTileRow][blankTileCol] = getRightTile();
    blankTileCol += 1;
    tileArray[blankTileRow][blankTileCol] = null;
  } else if (getTopTile() != null && direction == "s") {
    $("#" + getTopTile()).animate({ top: "+=200px" }, 2000);
    tileArray[blankTileRow][blankTileCol] = getTopTile();
    blankTileRow -= 1;
    tileArray[blankTileRow][blankTileCol] = null;
  } else if (getBottomTile() != null && direction == "w") {
    $("#" + getBottomTile()).animate({ top: "-=200px" }, 2000);
    tileArray[blankTileRow][blankTileCol] = getBottomTile();
    blankTileRow += 1;
    tileArray[blankTileRow][blankTileCol] = null;
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // ES6 destructuring assignment to swap elements
  }
}

function updateTilePositions() {
  tileArray.forEach((row, rowIndex) => {
    row.forEach((tileId, colIndex) => {
      if (tileId) {
        // Calculate new positions based on the array indices
        $("#" + tileId).css({
          top: rowIndex * 200 + "px",
          left: colIndex * 200 + "px",
        });
      } else {
        // Update the blank tile position
        blankTileRow = rowIndex;
        blankTileCol = colIndex;
      }
    });
  });
}

function scrambleTiles() {
  // Flatten the array, shuffle it, then reform it into a 3x3 matrix
  let flatArray = tileArray.flat();
  shuffleArray(flatArray);
  for (let i = 0; i < tileArray.length; i++) {
    for (let j = 0; j < tileArray[i].length; j++) {
      tileArray[i][j] = flatArray[i * 3 + j];
    }
  }

  // Update the positions of the tiles on the board
  updateTilePositions();
}

$(document).ready(function () {
  $("#scrambleButton").click(scrambleTiles);
});

$(document).on("keyup", function (evt) {
  switch (evt.key) {
    case "d":
    case "ArrowRight":
      doMove("d");
      break;
    case "a":
    case "ArrowLeft":
      doMove("a");
      break;
    case "s":
    case "ArrowDown":
      doMove("s");
      break;
    case "w":
    case "ArrowUp":
      doMove("w");
      break;
  }
});

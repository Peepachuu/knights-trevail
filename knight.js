const square = function(x, y) {
    let xCoordinate = x;
    let yCoordinate = y;
    let parent;
    return {
        xCoordinate,
        yCoordinate,
        parent
    }
}

function applyMove(startPos, moveToApply) {
    let endPos = square(startPos.xCoordinate + moveToApply.xCoordinate, startPos.yCoordinate + moveToApply.yCoordinate);
    endPos.parent = startPos;

    return endPos;
}

function isInGameboard(pos) {
    return (0 <= pos.xCoordinate && pos.xCoordinate <= 7 && 0 <= pos.yCoordinate && pos.yCoordinate <= 7);
}

let pos1 = square(-1, 8);
console.log(isInGameboard(pos1))
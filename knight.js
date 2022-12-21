import {queue} from "./queue";

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

const moves = [
    [1, 2], [1, -2], [2, 1], [2, -1],
    [-1, 2], [-1, -2], [-2, 1], [-2, -1]
];

function possibleMoves(startPos) {
    let possiblePositions = [];
    for (const move of moves) {
        let pos = applyMove(startPos, move);
        if (isInGameboard(pos))
            possiblePositions.push(pos);
    }
    return possiblePositions;
}
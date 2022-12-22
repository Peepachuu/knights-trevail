const queue = require("./queue.js");

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

function sameCoordinates(a, b) {
    return (a.xCoordinate == b.xCoordinate && a.yCoordinate == b.yCoordinate);
}

const moves = [
    square(1, 2), square(1, -2), square(2, 1), square(2, -1),
    square(-1, 2), square(-1, -2), square(-2, 1), square(-2, -1)
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

function knightMoves(startPos, endPos) {
    let currentPos = startPos;
    let target;
    let flag = true;

    let q = queue();
    q.push(currentPos);
    while (flag) {
        let childrenPositions = possibleMoves(q.head());
        for (const pos of childrenPositions) {
            if (pos.xCoordinate == endPos.xCoordinate && pos.yCoordinate == endPos.yCoordinate) {
                target = pos;
                flag = false;
                break;
            }
            q.push(pos);
        }
        q.pop();
    }

    let path = [target];
    while (!sameCoordinates(path[path.length - 1], startPos)) {
        path.push(path[path.length - 1].parent);
    }
    path.reverse();
    const cordPath = path.map(point => [point.xCoordinate, point.yCoordinate]);
    console.log(cordPath);
}

let sPos = square(3, 3);
let ePos = square(4, 3);
knightMoves(sPos, ePos);
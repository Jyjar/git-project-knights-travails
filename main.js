function knightMoves(start, end) {
    const knightMoves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ]

    let queue = [[start]];

    let visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0) {
        let path = queue.shift();

        let currentPos = path[path.length - 1];

        if(currentPos[0] === end[0] && currentPos[1] === end[1]) {
            console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
            path.forEach(pos => console.log(pos));
            return path;
        }

        for(let move of knightMoves) {
            let newPos = [currentPos[0] + move[0], currentPos[1] + move[1]];

            if (isValid(newPos) && !visited.has(newPos.toString())) {
                visited.add(newPos.toString());

                let newPath = [...path, newPos];
                queue.push(newPath);
            }
        }
    }
}

function isValid(position) {
    let [x, y] = position;
    return x >= 0 && x < 8 && y >= 0 && y < 8;
}

knightMoves([3,3],[4,3])
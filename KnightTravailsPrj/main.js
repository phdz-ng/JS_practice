const moves = [
    [2,1],
    [2,-1],
    [-2,1],
    [-2,-1],
    [1,2],
    [1,-2],
    [-1,2],
    [-1,-2]
]

function getKnightMoves(position) {
    const [x,y] = position
    return moves
    .map (([dx, dy]) => [x + dx, y + dy])
    .filter(([newX, newY]) => 
    newX >=0 &&
    newX < 8 &&
    newY >= 0 &&
    newY < 8
)
}

function KnightMoves(start, end) {
    const queue = [ {
        position: start,
        path: [[start]]
    }
    ]
    const visited = new Set()
    visited.add(start.toString())

    while (queue.length > 0) {
        current = queue.shift()
        if (current[0] === end[0] &&
            current[1] === end[0]
        ) {
            console.log(`You made it in ${current.path.length -1}`)
            current.path.forEach(coordinate => console.log(coordinate))
            return current.path
        }

        const possibleMoves = getKnightMoves(current)

        for (const move in possibleMoves) {
            const key = move.toString()
            if (!visited.has(key)) {
                visited.add(key)
                queue.push({
                    position: move,
                    path: [...curent.path, move]
                })
            }
        }

     
    }
}


const board = document.querySelector('.board')
const reset = document.querySelector('.reset')

//Coordinates for chess board
let blocks = [];
for (var i = 0; i < 8; i++) {
    blocks.push([0, 0, 0, 0, 0, 0, 0, 0]);
}

for (let i = 0; i < 8; i++) {
    for (let x = 0; x < 8; x++) {
        const box = document.createElement('button')
        box.classList.add('box')
        const coor = `${i}${x}`
        box.setAttribute('id', coor)
        board.appendChild(box)
    }
}


const boxs = document.querySelectorAll('.box')

boxs.forEach(box => {
    box.addEventListener('click', () => {
        boxs.forEach(box => {
            box.setAttribute('style', 'background:#f0f0f0')
        })
        const id = box.getAttribute('id')
        const valid = findKnightPositions(parseInt(id[0]), parseInt(id[1]))
        setColors(valid)
    })
});

reset.addEventListener('click', () => {
    boxs.forEach(box => {
        box.setAttribute('style', 'background:#f0f0f0')
    })
})

function setColors(data) {
    data.forEach(coor => {
        const id = coor.join('')
        const box = document.getElementById(id)
        box.setAttribute('style', 'background: red;');
    });
}

//check if position is valid
function isValid(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
}

function findKnightPositions(x, y) {

    // all possible moves for a knigh
    const moves = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]];

    const positions = [];

    // check if move is valid
    moves.forEach(move => {
        const newX = x + move[0];
        const newY = y + move[1];

        if (isValid(newX, newY)) {
            positions.push([newX, newY]);
        }
    });

    return positions;
}

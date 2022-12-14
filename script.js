
const board = document.querySelector('.board')

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

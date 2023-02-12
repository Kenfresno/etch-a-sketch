function populateBoard(size) {
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    let amount = size * size;
    for (i = 0; i < amount; i++) {
        let box = document.createElement("div");
        box.addEventListener("mouseover", changeColor);
        box.style.backgroundColor = "coral";
        board.insertAdjacentElement("beforeend", box);
    }
}
populateBoard(16);

function changeSize(value){
    populateBoard(value);
}

function changeColor(){
    this.style.backgroundColor = "black";
}
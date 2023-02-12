let color = "black";
function populateBoard(size) {
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    let amount = size * size;
    for (i = 0; i < amount; i++) {
        let box = document.createElement("div");
        box.addEventListener("mouseover", colorBox);
        box.style.backgroundColor = "coral";
        board.insertAdjacentElement("beforeend", box);
    }
}
populateBoard(16);

function changeSize(value){
    populateBoard(value);
}
function changeColor(value){
    color = value;

}
function colorBox(){
    this.style.backgroundColor = color;
}

function Reset(){
    let board = document.querySelector(".board")
    let box = board.querySelectorAll("div");
    box.forEach(div => div.style.backgroundColor = "coral");
}
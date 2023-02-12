function populateBoard(size) {
        let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    for (i = 0; i < 256; i++) {
        let box = document.createElement("div");
        box.style.backgroundColor = "coral";
        board.insertAdjacentElement("beforeend", box);
    }
}
populateBoard(3);
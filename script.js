const body = document.querySelector("body");
const container = document.createElement("div");
container.classList.add("container")


for (let i = 1; i <= 16; i++){
    const div = document.createElement("div");
    div.classList.add("box");
    div.id = i;
    div.textContent = i;
    container.appendChild(div);
    for (let j = 1; j <= 16; j++) {
        const childDiv = document.createElement("div");
        childDiv.classList.add("boxTwo");
        childDiv.id = j;
        childDiv.textContent = j;
        div.appendChild(childDiv);
    }
}
body.appendChild(container);

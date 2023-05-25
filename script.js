//your JS code here. If required.
const container = document.getElementsByClassName("container")[0];
const button = document.getElementById("start-stop");
function show() {
    container.innerHTML = '';
    const div = document.createElement("div")
    div.id = "line";
    container.append(div);
}
function start() {
    const line = document.getElementById("line");
    if (line.className) {
        line.className = "";
        button.innerText = "Start";
    }
    else {
        line.className = "line";
        button.innerText = "stop";
    }
}
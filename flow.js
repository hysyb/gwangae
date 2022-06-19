const addButton = document.getElementById("addButton");
addButton.addEventListener("click", addNozzle);
function addNozzle(){
    let nozzles = document.getElementById("nozzles");
    let nozzleType = document.createElement("select");
    nozzles.appendChild(nozzleType);
}

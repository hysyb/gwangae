document.getElementById("addButton").addEventListener('click',addNozzle());
addNozzle(){
    let nozzles = document.getElementById("nozzles");
    let nozzleType = document.createElement("select");
    nozzles.appendChild(nozzleType);
}

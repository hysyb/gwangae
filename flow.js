const addButton = document.getElementById("addButton");
const nozzles = document.getElementById("nozzles");
addButton.addEventListener("click", addNozzle);

function addNozzle(){

    let nozzleType = document.createElement("select");
    let rainbird = document.createElement('option');

    rainbird.text = "Rainbird";
    let toro = document.createElement('option')
    toro.text = "Toro";    
    nozzleType.add(rainbird);
    nozzleType.add(toro);
 
    nozzles.appendChild(nozzleType);
}

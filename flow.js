const addButton = document.getElementById("addButton");
const nozzles = document.getElementById("nozzles");
addButton.addEventListener("click", addNozzle);

function addNozzle(){
    let rowContainer = document.createElement('div');
    nozzles.appendChild(rowContainer);
    let nozzleType = document.createElement("select");
    let rainbird = document.createElement('option');

    rainbird.text = "Rainbird";
    let toro = document.createElement('option')
    toro.text = "Toro";    
    nozzleType.add(rainbird);
    nozzleType.add(toro);

    nozzleType.addEventListener('change', () => {
        let text = nozzleType.options[nozzleType.selectedIndex].text;
        console.log(text);
        }
    )
 
    rowContainer.appendChild(nozzleType);
}

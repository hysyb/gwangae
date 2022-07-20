const addButton = document.getElementById("addButton");
const nozzles = document.getElementById("nozzles");
addButton.addEventListener("click", addNozzle);


function addNozzle(){
    let rowContainer = document.createElement('div');
    nozzles.appendChild(rowContainer);
    let nozzleBrand = document.createElement("select");

    let defaultBrand = document.createElement('option');
    defaultBrand.text = "Select A Brand";
    nozzleBrand.add(defaultBrand);

    
    let rainbird = document.createElement('option');
    rainbird.text = "Rainbird";
    nozzleBrand.add(rainbird);

    let toro = document.createElement('option')
    toro.text = "Toro";    
    nozzleBrand.add(toro);

    rowContainer.appendChild(nozzleBrand);

    nozzleBrand.addEventListener('change', () => {
        let text = nozzleBrand.options[nozzleBrand.selectedIndex].text;
       
       // Adds too many options on double select
        // if (text == "Rainbird") {
      //      while (nozzleBrand.hasChildNodes()) {
     //           nozzleBrand.removeChild(nozzleBrand.lastChild);
      //      }
            let nozzleType = document.createElement('select');
            
            let defaultType = document.createElement('option');
             defaultType.text = "Select a Nozzle Type";
             nozzleType.add(defaultType);
           
            let quarter5 = document.createElement('option');
             quarter5.text = "5Q";
             nozzleType.add(quarter5);
             let half5 = document.createElement('option');
             half5.text = "5H";
             nozzleType.add(half5);
             rowContainer.appendChild(nozzleType);

        })
}


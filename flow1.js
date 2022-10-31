
//CONSTANT declarations
const NOZZLE_BRAND = ['RainBird', 'Toro'];
const NOZZLE_DISTANCE = ['5','8','10','12','15'];
const NOZZLE_PATTERN = ['Q','H','F','EST','SST','LCS','RCS'];

//DOM 
let addButton  = document.getElementById('addButton');
let content = document.getElementById('nozzles');
let totalSpan = document.getElementById('totalSpan');

//eventlisteners
addButton.addEventListener('click', addNozzleRow);


function addNozzleRow(){
    //make the row
    let nozzleRow = document.createElement('div');
    nozzleRow.classList.add('nozzleRow');
    nozzleRow.innerHTML = `
        <select name="brand" class = 'nozzleBrand' ><option value="Brand">Select Brand</option></select>
        <select name="pattern" class="pattern"><option value="patternOption">Select Pattern</option></select>
        <select name="distance" class="distance"><option value="distanceOption">Select Distance</option></select>
        <input type="number" class = 'quanity' placeholder="Quanity">
    `
    setOptions(nozzleRow);
    content.appendChild(nozzleRow);
}
function setOptions(nozzleRow){
    /*
//set brand options by array
    for (i=0;i<NOZZLE_BRAND.length;i++){
        let brandSelection = nozzleRow.getElementsByClassName('nozzleBrand')[0];
        let nozzleBrand = document.createElement('option');
        nozzleBrand.text = NOZZLE_BRAND[i];
        brandSelection.add(nozzleBrand);

    }
//set pattern options
    for (i=0;i<NOZZLE_PATTERN.length;i++){
        let patternSelection = nozzleRow.getElementsByClassName('pattern')[0];
        let nozzlePattern = document.createElement('option');
        nozzlePattern.text = NOZZLE_PATTERN[i];
        patternSelection.add(nozzlePattern);

    }
//set distance options
for (i=0;i<NOZZLE_DISTANCE.length;i++){
    let distanceSelection = nozzleRow.getElementsByClassName('distance')[0];
    let nozzleDistance = document.createElement('option');
    nozzleDistance.text = NOZZLE_DISTANCE[i];
    distanceSelection.add(nozzleDistance);


*/
optionLoop(nozzleRow, NOZZLE_BRAND,'nozzleBrand');
optionLoop(nozzleRow, NOZZLE_PATTERN,'pattern');
optionLoop(nozzleRow, NOZZLE_DISTANCE,'distance');

}
function optionLoop(nozzleRow, constant, selection){
    for (i=0;i<constant.length;i++){
        let Selection = nozzleRow.getElementsByClassName(selection)[0];
        let Option = document.createElement('option');
        Option.text = constant[i];
        Selection.add(Option);
    
    }
}




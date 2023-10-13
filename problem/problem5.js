let inventory = require('../inventory');
let carYear = require('../problem/problem4');

function olderCars(){
    let olderArray=[];
    var cars_years = carYear(inventory)

    for(i=0 ; i < cars_years.length ; i++){
        if (cars_years[i] < 2000){
            olderArray[olderArray.length] = cars_years[i]
        }
    }
    return olderArray
}

module.exports = olderCars;
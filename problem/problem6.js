let inventory = require('../inventory');

function AudiandBmw(inventory){
 
    let arr=[];
    for(i=0; i<inventory.length; i++){
        if(inventory[i].car_make == "BMW" || inventory[i].car_make == "Audi" ){
            arr[arr.length] = inventory[i]
        }
    }
    return arr;
}

module.exports = AudiandBmw;
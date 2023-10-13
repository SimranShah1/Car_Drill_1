
function lastCar(inventory){
    for(var i=0; i<inventory.length; i++){
       
        if(inventory[i].id === inventory.length){
             return inventory[i];
        }
    }
}

module.exports = lastCar;
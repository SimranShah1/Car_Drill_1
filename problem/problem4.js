function carYear(inventory){
    var arr=[];
    for(var i=0; i<inventory.length; i++){
        arr.push(inventory[i].car_year);
    }
    return arr;
}

module.exports = carYear;
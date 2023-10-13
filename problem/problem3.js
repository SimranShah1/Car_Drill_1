function sortCarModel(inventory){
    inventory.sort((a,b)=>{
        const A=a.car_model;
        const B=b.car_model;
        if(A<B){
            return -1;
        }
        else{
            return 1;
        }
    })
    return inventory;
}

module.exports = sortCarModel;
//to fectch 
function findCarById(inventory, id){
    for(let i=0; i < inventory.length; i++){
        if(inventory[i].id === id){
            return inventory[i];
        }
    }
}
module.exports = findCarById;
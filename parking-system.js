var ParkingSystem = function(big, medium, small) {
    this.parking=[big, medium, small];
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    let current= carType-1;
        if(this.parking[current] >0){
            this.parking[current] = this.parking[current] -1;
            return true;
        }else{
            return false
        }
};

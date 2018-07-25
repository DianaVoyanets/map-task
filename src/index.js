function City(name, latitude, longitude) {
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
}

City.prototype.getCode = function () {
    var splited = this.name.split(',');
    
    if (splited < 1) {
        throw new Error('Сity name is not contain the city code');
    }

    var code = splited[1].trim(); 
    return code;
}

function Map(cities) {
    if (!Array.isArray(cities)) {
        throw new Error('Cities is not an array');
    }

    if (!cities.every(city => city instanceof City)) {
        throw new Error('Cities is not an array of cities');
    }

    this.cities = cities;
}

Map.prototype.getNorthernmostCity = function () {

} 

Map.prototype.getEasternmostCity = function () {

}

Map.prototype.getSouthernmostCity = function () {
    
}

Map.prototype.getWesternmostCity = function () {

}

Map.prototype.getCityCodes = function () {
    var cityCodes = this.cities.map(city => city.getCode()).toString();
    return cityCodes;
}

exports.City = City;
exports.Map = Map;
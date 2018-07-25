function City(name, latitude, longitude) {
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
}

City.prototype.getCode = function () {
    var splited = this.name.split(',');
    
    if (splited < 1) {
        throw new Error('Сity name is not contain the code');
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

function distanceBetweenGeocodes(lat1, lon1, lat2, lon2) {

    function toRadians(value) { 
        return value * Math.PI / 180; 
    }
    
    var rad1 = toRadians(lat1) 
        rad2 = toRadians(lat2), 
        sigma = toRadians(lon2 - lon1), 
        R = 6371e3;

    var distance = Math.acos(Math.sin(rad1) * Math.sin(rad2) + Math.cos(rad1) * Math.cos(rad2) * Math.cos(sigma)) * R;

    return distance;
}

Map.prototype.closestCityToLocation = function (longitude, latitude) {

    var citiesDistances = this.cities
        .map((city) => {
            return {
                city: city, 
                distance: distanceBetweenGeocodes(longitude, latitude, city.latitude, city.longitude)
            }
        });

    var citiesDistances = citiesDistances.reduce((prev, curr) => prev.distance < curr.distance ? prev : curr);
    return citiesDistances.city;
}

Map.prototype.getCityCodes = function () {
    var cityCodes = this.cities.map(city => city.getCode()).toString();
    return cityCodes;
}

exports.City = City;
exports.Map = Map;
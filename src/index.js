function City(name, latitude, longitude) {
    if (typeof name !== 'string') {
        throw new Error('Name is string');
    }

    if (!isNumber(latitude)) {
        throw new Error('Latitude is number');
    }

    if (!isNumber(longitude)) {
        throw new Error('Longitude is number');
    }

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
    return this.cities.reduce((prev, curr) => prev.latitude > curr.latitude ? prev : curr);
} 

Map.prototype.getEasternmostCity = function () {
    return this.cities.reduce((prev, curr) => prev.longitude > curr.longitude ? prev : curr);
}

Map.prototype.getSouthernmostCity = function () {
    return this.cities.reduce((prev, curr) => prev.latitude < curr.latitude ? prev : curr);
}

Map.prototype.getWesternmostCity = function () {
    return this.cities.reduce((prev, curr) => prev.longitude < curr.longitude ? prev : curr);
}

Map.prototype.closestCityToLocation = function (longitude, latitude) {
    if (!isNumber(latitude)) {
        throw new Error('Latitude is number');
    }

    if (!isNumber(longitude)) {
        throw new Error('Longitude is number');
    }

    var citiesDistances = this.cities
        .map((city) => {
            return {
                city: city, 
                distance: distanceBetweenGeocodes(latitude, longitude, city.latitude, city.longitude)
            }
        });

    var citiesDistances = citiesDistances.reduce((prev, curr) => prev.distance < curr.distance ? prev : curr);
    return citiesDistances.city;
}

Map.prototype.getCityCodes = function () {
    var cityCodes = this.cities.map(city => city.getCode()).toString();
    return cityCodes;
}

function isNumber(value) {
    return typeof value === 'number' && Number.isFinite(value);
}

function distanceBetweenGeocodes(lat1, lon1, lat2, lon2) {

    function toRadians(value) { 
        return value * Math.PI / 180; 
    }
    
    var rad1 = toRadians(lat1) 
        rad2 = toRadians(lat2), 
        delta = toRadians(lon2 - lon1), 
        R = 6371e3;

    var distance = Math.acos(Math.sin(rad1) * Math.sin(rad2) + Math.cos(rad1) * Math.cos(rad2) * Math.cos(delta)) * R;
    return distance;
}

exports.City = City;
exports.Map = Map;
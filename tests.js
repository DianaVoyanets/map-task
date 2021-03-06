const assert = require('assert');
const { City, Map } = require('./src/index.js');

describe('Map', function() {
    it('getCityCodes', function() {
        const map = new Map([
            new City('Nashville, TN', 36.17, -86.78),
            new City('New York, NY', 40.71, -74.00),
            new City('Atlanta, GA', 33.75, -84.39),
            new City('Denver, CO', 39.74, -104.98),
            new City('Seattle, WA', 47.61, -122.33),
            new City('Los Angeles, CA', 34.05, -118.24),
            new City('Memphis, TN', 35.15, -90.05)
        ]);

        const cityCodes = map.getCityCodes();

        assert.deepEqual(cityCodes, 'TN,NY,GA,CO,WA,CA,TN');
    });

    it('closestCityToLocation', function () {
        const city = new City('Los Angeles, CA', 34.05, -118.24);
        
        const map = new Map([
            new City('Nashville, TN', 36.17, -86.78),
            new City('New York, NY', 40.71, -74.00),
            new City('Atlanta, GA', 33.75, -84.39),
            new City('Denver, CO', 39.74, -104.98),
            new City('Seattle, WA', 47.61, -122.33),
            new City('Memphis, TN', 35.15, -90.05),
            city
        ]);

        const closestCity = map.closestCityToLocation(city.longitude - 2, city.latitude - 2);

        assert.deepEqual(closestCity, city);
    });

    it('getNorthernmostCity', function () {
        const city = new City('Seattle, WA', 47.61, -122.33);

        const map = new Map([
            new City('Nashville, TN', 36.17, -86.78),
            new City('New York, NY', 40.71, -74.00),
            new City('Atlanta, GA', 33.75, -84.39),
            new City('Denver, CO', 39.74, -104.98),
            new City('Memphis, TN', 35.15, -90.05),
            new City('Los Angeles, CA', 34.05, -118.24),
            city
        ]);

        const northernmostCity = map.getNorthernmostCity();

        assert.deepEqual(northernmostCity, city);
    });

    it('getSouthernmostCity', function () {
        const city = new City('Atlanta, GA', 33.75, -84.39);

        const map = new Map([
            new City('Nashville, TN', 36.17, -86.78),
            new City('New York, NY', 40.71, -74.00),
            new City('Denver, CO', 39.74, -104.98),
            new City('Seattle, WA', 47.61, -122.33),
            new City('Los Angeles, CA', 34.05, -118.24),
            new City('Memphis, TN', 35.15, -90.05),
            city
        ]);

        const southernmostCity = map.getSouthernmostCity();

        assert.deepEqual(southernmostCity, city);
    });

    it('getWesternmostCity', function () {
        const city = new City('Seattle, WA', 47.61, -122.33);

        const map = new Map([
            new City('Nashville, TN', 36.17, -86.78),
            new City('New York, NY', 40.71, -74.00),
            new City('Atlanta, GA', 33.75, -84.39),
            new City('Denver, CO', 39.74, -104.98),
            new City('Los Angeles, CA', 34.05, -118.24),
            new City('Memphis, TN', 35.15, -90.05),
            city
        ]);

        const westernmostCity = map.getWesternmostCity();

        assert.deepEqual(westernmostCity, city);
    });

    it('getEasternmostCity', function() {
        const city = new City('New York, NY', 40.71, -74.00);

        const map = new Map([
            new City('Nashville, TN', 36.17, -86.78),
            new City('Atlanta, GA', 33.75, -84.39),
            new City('Denver, CO', 39.74, -104.98),
            new City('Los Angeles, CA', 34.05, -118.24),
            new City('Memphis, TN', 35.15, -90.05),
            new City('Seattle, WA', 47.61, -122.33),
            city
        ]);

        const easternmostCity = map.getEasternmostCity();

        assert.deepEqual(easternmostCity, city);
    });
});
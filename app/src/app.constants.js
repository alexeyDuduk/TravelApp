(function () {
    'use strict';

    angular
        .module('app')
        .constant('SearchCategory', {
            FLIGHTS: {
                title: 'Flights',
                stateName: 'travel-app.flights',
                type: 'flights'
            },
            HOTELS: {
                title: 'Hotels',
                stateName: 'travel-app.hotels',
                type: 'hotels'
            },
            CARS: {
                title: 'Cars',
                stateName: 'travel-app.cars',
                type: 'cars'
            }
        })
        .constant('Amenities', {
            ANY: {
                title: 'Any'
            },
            ONE_STAR: {
                title: '1 star'
            },
            THREE_STARS: {
                title: '3 star'
            },
            FIVE_STARS: {
                title: '5 star'
            }
        })
        .constant('CarType', {
            ANY: {
                title: 'Any'
            },
            ECONOMY: {
                title: 'Economy',
                type: 'economy'
            },
            BUSINESS: {
                title: 'Business',
                type: 'business'
            },
            SPORT: {
                title: 'Sport',
                type: 'sport'
            }
        });
})();

(function () {
    'use strict';

    angular
        .module('app')
        .constant('SearchCategory', {
            FLIGHTS: {
                title: 'Flights',
                stateName: 'travel-app.flights',
                type: 'flights',
                previousSearchTemplatePath: 'src/components/flights/views/previous-search.html',
                icon: 'glyphicon-plane'
            },
            HOTELS: {
                title: 'Hotels',
                stateName: 'travel-app.hotels',
                type: 'hotels',
                previousSearchTemplatePath: 'src/components/hotels/views/previous-search.html',
                icon: 'glyphicon-tent'
            },
            CARS: {
                title: 'Cars',
                stateName: 'travel-app.cars',
                type: 'cars',
                previousSearchTemplatePath: 'src/components/cars/views/previous-search.html',
                icon: 'glyphicon-road'
            }
        })
        .constant('Amenities', {
            ANY: {
                title: 'Any',
                starsCount: 0
            },
            ONE_STAR: {
                title: '1 star',
                starsCount: 1
            },
            TWO_STARS: {
                title: '2 stars',
                starsCount: 2
            },
            THREE_STARS: {
                title: '3 stars',
                starsCount: 3
            },
            FOUR_STARS: {
                title: '4 stars',
                starsCount: 4
            },
            FIVE_STARS: {
                title: '5 stars and higher',
                starsCount: 5
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

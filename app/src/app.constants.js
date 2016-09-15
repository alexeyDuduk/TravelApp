(function () {
    'use strict';

    angular
        .module('app')
        .constant('SearchCategory', {
            FLIGHTS: {
                title: 'Flights',
                stateName: 'travel-app.flights',
                type: 'flights',
                previousSearchTemplatePath: 'src/components/flights/previous-search.html',
                glyphIcon: 'glyphicon-plane'
            },
            HOTELS: {
                title: 'Hotels',
                stateName: 'travel-app.hotels',
                type: 'hotels',
                previousSearchTemplatePath: 'src/components/hotels/previous-search.html',
                glyphIcon: 'glyphicon-tent'
            },
            CARS: {
                title: 'Cars',
                stateName: 'travel-app.cars',
                type: 'cars',
                previousSearchTemplatePath: 'src/components/cars/previous-search.html',
                glyphIcon: 'glyphicon-road'
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

(function () {
    'use strict';

    angular
        .module('app')
        .config(routesConfig)
        .run(run);

    routesConfig.$inject = [ '$stateProvider', '$urlRouterProvider', 'SearchCategory' ];

    function routesConfig ($stateProvider, $urlRouterProvider, SearchCategory) {
        $stateProvider
            .state('travel-app', {
                url: '',
                templateUrl: 'src/components/views/travel-app.html',
                controller: 'TravelAppController as travelApp'
            })
            .state(SearchCategory.FLIGHTS.stateName, {
                url: '/flights',
                templateUrl: 'src/components/flights/flights.html',
                controller: 'FlightsController as flights'
            })
            .state(SearchCategory.HOTELS.stateName, {
                url: '/hotels',
                templateUrl: 'src/components/hotels/hotels.html',
                controller: 'HotelsController as hotels'
            })
            .state(SearchCategory.CARS.stateName, {
                url: '/cars',
                templateUrl: 'src/components/cars/cars.html',
                controller: 'CarsController as cars'
            });
        $urlRouterProvider.otherwise('/flights');
    }

    run.$inject = [ '$state' ];

    function run ($state) {
        $state.go('travel-app.flights');
    }

    i18nConfig.$inject = [ '$translateProvider' ];

    function i18nConfig ($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: 'resources/locale-',
            suffix: '.json'
        });
    }
})();

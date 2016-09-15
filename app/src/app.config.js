(function () {
    'use strict';

    angular
        .module('app')
        .config(routesConfig)
        .config(i18nConfig)
        .run(run);

    routesConfig.$inject = [ '$stateProvider', '$urlRouterProvider', 'SearchCategory' ];

    function routesConfig ($stateProvider, $urlRouterProvider, SearchCategory) {
        $stateProvider
            .state('travel-app', {
                url: '',
                templateUrl: 'src/components/travel-app.html',
                controller: 'TravelAppController as travelApp',
                abstract: true
            })
            .state(SearchCategory.FLIGHTS.stateName, {
                url: '/flights',
                templateUrl: 'src/components/flights/views/flights.html',
                controller: 'FlightsController as flights'
            })
            .state(SearchCategory.HOTELS.stateName, {
                url: '/hotels',
                templateUrl: 'src/components/hotels/views/hotels.html',
                controller: 'HotelsController as hotels'
            })
            .state(SearchCategory.CARS.stateName, {
                url: '/cars',
                templateUrl: 'src/components/cars/views/cars.html',
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
        $translateProvider.preferredLanguage('en');
    }
})();

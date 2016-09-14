(function () {
    'use strict';
    
    angular
        .module('app')
        .controller('FlightsController', FlightsController);

    FlightsController.$inject = [ 'SearchCategory', 'travelSearchService' ];

    function FlightsController (SearchCategory, travelSearchService) {
        var ctrl = this;

        ctrl.startDate = null;
        ctrl.endDate = null;
        ctrl.from = '';
        ctrl.to = '';

        ctrl.submit = submit;

        activate();

        function activate() {
            ctrl.startDate = new Date();
            ctrl.endDate = new Date();
        }

        function submit () {
            travelSearchService.search({
                categoryTitle: SearchCategory.FLIGHTS.title,
                categoryType: SearchCategory.FLIGHTS.type,
                startDate: ctrl.startDate,
                endDate: ctrl.endDate,
                from: ctrl.from,
                to: ctrl.to
            })
        }
    }
})();

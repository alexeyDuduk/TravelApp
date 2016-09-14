(function () {
    'use strict';
    
    angular
        .module('app')
        .controller('CarsController', CarsController);

    CarsController.$inject = [ 'SearchCategory', 'CarType', 'travelSearchService' ];

    function CarsController (SearchCategory, CarType, travelSearchService) {
        var ctrl = this;

        ctrl.startDate = null;
        ctrl.endDate = null;
        ctrl.types = [
            CarType.ANY,
            CarType.ECONOMY,
            CarType.SPORT,
            CarType.BUSINESS
        ];
        ctrl.selectedType = null;
        ctrl.location = '';

        ctrl.submit = submit;

        activate();

        function activate() {
            ctrl.startDate = new Date();
            ctrl.endDate = new Date();
            ctrl.selectedType = ctrl.types[0].title;
        }

        function submit () {
            travelSearchService.search({
                categoryTitle: SearchCategory.CARS.title,
                categoryType: SearchCategory.CARS.type,
                startDate: ctrl.startDate,
                endDate: ctrl.endDate,
                selectedTypeTitle: ctrl.selectedType,
                location: ctrl.location
            })
        }
    }
})();

(function () {
    'use strict';
    
    angular
        .module('app')
        .controller('HotelsController', HotelsController);

    HotelsController.$inject = [ 'SearchCategory', 'Amenities', 'travelSearchService' ];

    function HotelsController (SearchCategory, Amenities, travelSearchService) {
        var ctrl = this;

        ctrl.startDate = null;
        ctrl.endDate = null;
        ctrl.amenitiesList = [
            Amenities.ANY,
            Amenities.ONE_STAR,
            Amenities.THREE_STARS,
            Amenities.FIVE_STARS
        ];
        ctrl.selectedAmenitiesItem = null;
        ctrl.location = '';

        ctrl.submit = submit;

        activate();

        function activate() {
            ctrl.startDate = new Date();
            ctrl.endDate = new Date();
            ctrl.selectedAmenitiesItem = ctrl.amenitiesList[0].title;
        }

        function submit () {
            travelSearchService.search({
                categoryTitle: SearchCategory.HOTELS.title,
                categoryType: SearchCategory.HOTELS.type,
                startDate: ctrl.startDate,
                endDate: ctrl.endDate,
                amenitiesTitle: ctrl.selectedAmenitiesItem,
                location: ctrl.location
            })
        }
    }
})();

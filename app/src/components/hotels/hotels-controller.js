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
            Amenities.TWO_STARS,
            Amenities.THREE_STARS,
            Amenities.FOUR_STARS,
            Amenities.FIVE_STARS
        ];
        ctrl.selectedAmenitiesTitle = '';
        ctrl.location = '';

        ctrl.submit = submit;

        activate();

        function activate() {
            ctrl.startDate = new Date();
            ctrl.endDate = new Date();
            ctrl.selectedAmenitiesTitle = ctrl.amenitiesList[0].title;
        }

        function submit () {
            var selectedAmenitiesItem = ctrl.amenitiesList.filter(function (item) {
                return item.title === ctrl.selectedAmenitiesTitle;
            })[0];

            travelSearchService.search({
                categoryTitle: SearchCategory.HOTELS.title,
                categoryType: SearchCategory.HOTELS.type,
                startDate: ctrl.startDate,
                endDate: ctrl.endDate,
                amenitiesTitle: ctrl.selectedAmenitiesTitle,
                amenitiesStarsCount: selectedAmenitiesItem.starsCount,
                location: ctrl.location
            })
        }
    }
})();

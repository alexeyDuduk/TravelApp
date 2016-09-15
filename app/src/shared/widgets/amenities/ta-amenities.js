(function () {
    'use strict';

    angular
        .module('app')
        .directive('taAmenities', taAmenities);

    taAmenities.$inject = [];

    function taAmenities () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'src/shared/widgets/amenities/ta-amenities.html',
            link: link,
            scope: {},
            bindToController: {
                starsCount: '=',
                title: '='
            },
            controller: TaAmenitiesController,
            controllerAs: 'taAmenities'
        };
    }

    function link (scope, element, attrs) {
        if (!attrs.starsCount || !attrs.title) {
            throw new Error("ta-amenities requires 'stars-count' and 'title'");
        }
    }

    TaAmenitiesController.$inject = [];

    function TaAmenitiesController () {
        var ctrl = this;
        
        ctrl.getRange = getRange;

        function getRange (itemsCount) {
            var result = [];

            for (var index = 0; index < itemsCount; index++) {
                result.push(index);
            }
            return result;
        }
    }
})();

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
            templateUrl: 'src/shared/widgets/amenities/amenities.html',
            link: link,
            scope: {},
            bindToController: {
                starsCount: '=',
                title: '='
            },
            controller: AmenitiesController,
            controllerAs: 'amenities'
        };
    }

    function link (scope, element, attrs) {
        if (!attrs.starsCount || !attrs.title) {
            throw new Error("Directive 'ta-amenities' requires attributes 'stars-count', 'title'.");
        }
    }

    AmenitiesController.$inject = [];

    function AmenitiesController () {
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

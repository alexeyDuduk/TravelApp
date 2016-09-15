(function () {
    'use strict';

    angular
        .module('app')
        .controller('TravelAppController', TravelAppController);

    TravelAppController.$inject = [ '$state', '$timeout', 'SearchCategory', 'travelSearchService' ];

    function TravelAppController ($state, $timeout, SearchCategory, travelSearchService) {
        var ctrl = this;

        var searchCategoryByType = {};

        ctrl.searchCategories = [
            SearchCategory.FLIGHTS,
            SearchCategory.HOTELS,
            SearchCategory.CARS
        ];
        ctrl.currentSearchCategory = null;
        ctrl.previousSearchItems = [];

        ctrl.onSearchCategoryClick = onSearchCategoryClick;
        ctrl.isCategorySelected = isCategorySelected;
        ctrl.onRemoveSearchItemClick = onRemoveSearchItemClick;
        ctrl.getPreviousSearchTemplate = getPreviousSearchTemplate;

        activate();

        function activate () {
            ctrl.searchCategories.forEach(function (searchCategory) {
                searchCategoryByType[searchCategory.type] = searchCategory;
            });
            travelSearchService.subscribeOnLastSearchParamsChanged(onLastSearchParamsChanged);
            updateCurrentSearchCategory();
            updatePreviousSearches();
        }

        function onSearchCategoryClick (searchCategory) {
            if (searchCategory === ctrl.currentSearchCategory) {
                return;
            }
            $state.go(searchCategory.stateName);
            updateCurrentSearchCategory();
            updatePreviousSearches();
        }

        function isCategorySelected (category) {
            return category === ctrl.currentSearchCategory;
        }

        function onRemoveSearchItemClick (item) {
            travelSearchService.removeItemFromLastSearchParams(item);
        }

        function updateCurrentSearchCategory () {
            $timeout(function () {
                ctrl.searchCategories.forEach(function (searchCategory) {
                    if ($state.is(searchCategory.stateName)) {
                        ctrl.currentSearchCategory = searchCategory;
                    }
                });
            });
        }

        function onLastSearchParamsChanged () {
            updatePreviousSearches();
        }

        function updatePreviousSearches () {
            var previousSearchItems = travelSearchService.getLastSearchParams();

            previousSearchItems.forEach(function (previousSearchItem) {
                var correspondingCategory = searchCategoryByType[previousSearchItem.categoryType];

                previousSearchItem.categoryTitle = correspondingCategory.title;
                previousSearchItem.icon = correspondingCategory.icon;
            });
            ctrl.previousSearchItems = previousSearchItems;
        }

        function getPreviousSearchTemplate (previousSearchParam) {
            var category = ctrl.searchCategories.filter(function (searchCategory) {
                return searchCategory.type === previousSearchParam.categoryType;
            })[0];

            return category.previousSearchTemplatePath;
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app')
        .factory('travelSearchService', travelSearchService);

    travelSearchService.$inject = [];

    function travelSearchService () {
        var SEARCH_PARAMS_KEY = 'travelSearchServiceSearchParams';
        var MAX_ITEMS_COUNT = 10;
        var callbacks = [];

        return {
            search: search,
            getLastSearchParams: getLastSearchParams,
            removeItemFromLastSearchParams: removeItemFromLastSearchParams,
            subscribeOnLastSearchParamsChanged: subscribeOnLastSearchParamsChanged
        };

        function search (params) {
            var lastSearchParams = getLastParams() ;
            params.id = getNextId(lastSearchParams);
            lastSearchParams.push(params);
            if (lastSearchParams.length > MAX_ITEMS_COUNT) {
                lastSearchParams = lastSearchParams.slice(1);
            }
            setLastParams(lastSearchParams);
        }

        function getLastSearchParams () {
            return getLastParams().reverse();
        }

        function removeItemFromLastSearchParams (itemToRemove) {
            var lastSearchParams = getLastParams().filter(function (item) {
                return item.id !== itemToRemove.id;
            });
            setLastParams(lastSearchParams);
        }

        function subscribeOnLastSearchParamsChanged (callback) {
            callbacks.push(callback);
        }

        function setLastParams (params) {
            var value = JSON.stringify(params);
            localStorage.setItem(SEARCH_PARAMS_KEY, value);
            callbacks.forEach(function (callback) {
                callback();
            });
        }

        function getLastParams () {
            var value = localStorage.getItem(SEARCH_PARAMS_KEY);

            return JSON.parse(value) || [];
        }

        function getNextId (lastSearchParams) {
            var idValues = lastSearchParams.map(function (parameter) {
                return parameter.id;
            });

            return idValues.length
                ? Math.max.apply(null, idValues) + 1
                : 1;
        }
    }
})();

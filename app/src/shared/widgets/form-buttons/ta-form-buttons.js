(function () {
    'use strict';

    angular
        .module('app')
        .directive('taFormButtons', taFormButtons);

    taFormButtons.$inject = [];

    function taFormButtons () {
        return {
            restrict: 'E',
            templateUrl: 'src/shared/widgets/form-buttons/ta-form-buttons.html',
            link: link,
            scope: {},
            bindToController: {
                onSubmitButtonClick: '&',
                onCancelButtonClick: '&',
                canSubmit: '&'
            },
            controller: taFormButtonsController,
            controllerAs: 'taFormButtons'
        };
    }
    
    function link (scope, element, attrs) {
        if (!attrs.onSubmitButtonClick || !attrs.onCancelButtonClick) {
            throw new Error("ta-form-buttons requires 'on-submit-button-click' and 'on-cancel-button-click'");
        }
    }

    taFormButtonsController.$inject = [];

    function taFormButtonsController () {
    }
})();

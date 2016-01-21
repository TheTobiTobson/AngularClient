'use strict';

//Reopen Module
angular.module('designerModule')

.controller('designerController',
    ['$scope',
        function ($scope) {
            $scope.$log.log('designerModule       - designerController   - .controller          - Entered');
        }]);


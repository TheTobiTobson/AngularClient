'use strict';

//Reopen Module
angular.module('startpageModule')

.controller('startpageController',
    ['$scope',
        function ($scope) {
            $scope.$log.log('startpageModule      - startpageController  - .controller          - Entered');
    }]);


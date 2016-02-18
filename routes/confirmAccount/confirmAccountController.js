'use strict';

//Reopen Module
angular.module('confirmAccountModule')

.controller('confirmAccountController',
    ['$scope', '$routeParams',
        function ($scope, $routeParams) {
            $scope.$log.log('confirmAccountModule - confirmAccountController - .controller      - Entered');
            $scope.confirmationResult = $routeParams.confirmationResult;
            
        }]);


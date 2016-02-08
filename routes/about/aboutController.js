'use strict';

//Reopen Module
angular.module('aboutModule')

.controller('aboutController',
    ['$scope',
        function ($scope) {
            $scope.$log.log('aboutModule          - aboutController      - .controller          - Entered');

            $scope.TheRealArray = [
                { "id": 101, "name": "Tobi" },
                { "id": 22, "name": "Alex" },
                { "id": 34, "name": "Simon" }
            ];

            $scope.lookup = [];
            $scope.ArrayId = [];


            $scope.CreateLookupArray = function () {                
                //alert($scope.TheRealArray.length);                
                for (var i = 0, len = $scope.TheRealArray.length; i < len; i++) {
                    //lookup[array[i].id] = array[i];
                    $scope.lookup[i] = $scope.TheRealArray[i].id;                }
            };


            $scope.SearchForId = function () {
                $scope.ArrayId = $scope.lookup.indexOf($scope.searchingFor);
            };

            
}]);


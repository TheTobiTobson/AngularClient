'use strict';

//Reopen Module
angular.module('aboutModule')

.controller('aboutController',
    ['$scope','$mdSidenav','$mdMedia',
        function ($scope, $mdSidenav, $mdMedia) {
            $scope.$log.log('aboutModule          - aboutController      - .controller          - Entered');

            // Header Variables
            $scope.about = {};
            $scope.about.pagename = "About";

            //Open NavBar
            $scope.toggleLeftMenu = function () {
                $mdSidenav('leftSideNavBar').toggle();
            };    
}]);


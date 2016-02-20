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
            $scope.openLeftMenu = function () {
                $mdSidenav('leftSideNavBar').toggle();
            };

            $scope.$watch(function () { return $mdMedia('lg'); }, function (big) {
                $scope.AAAbigScreen = big;
            });
            $scope.AAAscreenIsSmall = $mdMedia('sm');
            $scope.AAAcustomQuery = $mdMedia('(min-width: 1234px)');
            $scope.AAAanotherCustom = $mdMedia('max-width: 300px');
}]);


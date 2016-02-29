'use strict';

//Reopen Module
angular.module('aboutModule')

.controller('aboutController',
    ['$scope','$mdSidenav','$mdMedia',
        function ($scope, $mdSidenav, $mdMedia) {
            $scope.$log.log('aboutModule          - aboutController      - .controller          - Entered');

            // content Controll
            $scope.contentControl = 0;

            // Header Variables
            $scope.about = {};
            $scope.about.pagename = "About";

            //Open NavBar
            $scope.toggleLeftMenu = function () {
                $mdSidenav('leftSideNavBar').toggle();
            };

            //Open NavBar
            $scope.changeContent = function (contentToShow) {
                $scope.contentControl = contentToShow;
            };

            // Select in Sidenav
            $scope.toppings = [
                { category: 'meat', name: 'Pepperoni' },
                { category: 'meat', name: 'Sausage' },
                { category: 'meat', name: 'Ground Beef' },
                { category: 'meat', name: 'Bacon' },
                { category: 'veg', name: 'Mushrooms' },
                { category: 'veg', name: 'Onion' },
                { category: 'veg', name: 'Green Pepper' },
                { category: 'veg', name: 'Green Olives' }
            ];
}]);


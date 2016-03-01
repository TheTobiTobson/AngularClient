'use strict';

//Reopen Module
angular.module('aboutModule')

.controller('aboutController',
    ['$rootScope', '$scope', '$mdSidenav', '$mdMedia', '$http',
        function ($rootScope, $scope, $mdSidenav, $mdMedia, $http) {
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


         
            //--------------------------------- Send and Receive ---------------------------------//
            // GET all FBS belonging to this user
            $scope.getAllFBSBelongingToThisUser = function () {
                $http({
                    method: 'GET',
                    url: 'http://localhost:54599/api/Feedbacksession',
                    headers: { 'Authorization': 'Bearer ' + $rootScope.oauth.access_token }
                }).then(function successCallback(response) {
                    $scope.$log.log('aboutModule         - aboutController \n '
                        + '> getAllFBSBelongingToThisUser().success \n '
                        + '> status: ' + response.status);
                    //Write Response to Scope//
                    $scope.ClientFBSArray = response.data;
                }, function errorCallback(response) {
                    $scope.$log.log('aboutModule         - aboutController \n '
                        + '> getAllFBSBelongingToThisUser().error \n '
                        + '> status: ' + response.status);

                    if (response.status == -1) // Server not responding
                    {
                        alert("NO HTTP RESPONSE.\nDer Server ist nicht erreichbar. Bitte versuche es erneut");
                    }                    
                    else // Server responding something else
                    {
                        alert("HTTP x.\nEin Fehler ist aufgetreten. Bitte versuche es erneut");
                    };
                });
            };            
}]);


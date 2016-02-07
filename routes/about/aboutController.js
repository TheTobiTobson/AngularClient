'use strict';

//Reopen Module
angular.module('aboutModule')

.controller('aboutController',
    ['$scope',
        function ($scope) {
            $scope.$log.log('aboutModule          - aboutController      - .controller          - Entered');

            $scope.inhalte = [
                { "Titel": "Eins", "Type": "Text" },
                { "Titel": "Zwei", "Type": "MultipleChoice" },
                { "Titel": "Drei", "Type": "JaNein" }
            ];

            $scope.anzeige = "hihih";

}]);


'use strict';

//Reopen Module
angular.module('aboutModule')

.controller('aboutController',
    ['$scope',
        function ($scope) {
            $scope.$log.log('aboutModule          - aboutController      - .controller          - Entered');

            $scope.inhalte = [
                { "Titel": "Eins", "Type": "Text", "Text":"" },
                { "Titel": "Zwei", "Type": "MultipleChoice", "Text": "" },
                { "Titel": "Drei", "Type": "JaNein", "Text": "" },
                { "Titel": "Vier", "Type": "JaNein", "Text": "" }
            ];

            $scope.anzeige = "hihih";

}]);


'use strict';

//Reopen Module
angular.module('aboutModule')

.controller('aboutController',
    ['$scope',
        function ($scope) {
            $scope.$log.log('aboutModule          - aboutController      - .controller          - Entered');

            //$scope.inhalte = [
            //    { "Titel": "Eins", "Type": "Text", "Text":"" },
            //    { "Titel": "Zwei", "Type": "MultipleChoice", "Text": "" },
            //    { "Titel": "Drei", "Type": "JaNein", "Text": "" },
            //    { "Titel": "Vier", "Type": "JaNein", "Text": "" }
            //];

            //// Update(PUT) one Question
            //$scope.updateQuestion = function (QUE_id_of_question_to_update) {
            //    alert(QUE_id_of_question_to_update);
            //};

            ////DropDow
            //// QuestionTypesOptions
            //$scope.questionTypes = [               
            //     "Freitext",
            //     "Auswahl"
            //];

            ////DropDow
            //// Show or hide question
            //$scope.dropdownShowHide = [
            //     "Show",
            //     "Hide"
            //];


            //// Testdaten
            //$scope.Questions = [{
            //    "QUE_id": 22,
            //    "QUE_FBS_id": 1,
            //    "QUE_type": "Freitext",
            //    "QUE_position": 5,
            //    "QUE_text": "Hallo alle zusammen",
            //    "QUE_answerRadioButton": "",
            //    "QUE_title": "KING",
            //    "QUE_showQuestionInFeedback": true
            //},
            //{
            //    "QUE_id": 33,
            //    "QUE_FBS_id": 3,
            //    "QUE_type": "Auswahl",
            //    "QUE_position": 2,
            //    "QUE_text": "hihihih",
            //    "QUE_answerRadioButton": "",
            //    "QUE_title": "QUEEN",
            //    "QUE_showQuestionInFeedback": false
            //}];

}]);


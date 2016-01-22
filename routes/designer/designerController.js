'use strict';

//Reopen Module
angular.module('designerModule')

.controller('designerController',
    ['$scope', 'ComServiceDesigner',
        function ($scope, ComServiceDesigner) {
            $scope.$log.log('designerModule       - designerController   - .controller          - Entered');

            /**** Data ****/
            // Question Data
            $scope.Question = [
               {
                   QUE_id: -1,
                   QUE_FBS_id: -1,
                   QUE_type: '',
                   QUE_position: '',
                   QUE_text: '',
                   QUE_answerRadioButton: '',
                   QUE_title: '',
                   QUE_showQuestionInFeedback: false
               }
            ];

            // Call API//
            $scope.getOneQuestion = function () {
                ComServiceDesigner.getQuestions()
                        .then(function successCallback(response) {
                            $scope.$log.log('startpageModule      - startpageController \n '
                            + '> ComService.getQuestions().success \n '
                            + '> status: ' + response.status);
                            //Write Response to Scope//
                            $scope.Question[0] = response.data;

                        }, function errorCallback(response) {
                            $scope.$log.log('startpageModule      - startpageController \n '
                            + '> ComService.getQuestions().error \n '
                            + '> status: ' + response.status);
                        })

            }

            //DropDow
            // QuestionTypesOptions
            $scope.questionTypes = [
                 "Ja/Nein-Frage",
                 "Freitext",
                 "Auswahl"
            ];

            //DropDow
            // Show or hide question
            $scope.dropdownShowHide = [
                 "Show",                 
                 "Hide"
            ];

        }]);


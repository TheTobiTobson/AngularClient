'use strict';

//Reopen Module
angular.module('designerModule')

.controller('designerController',
    ['$rootScope', '$scope', '$http',
        function ($rootScope, $scope, $http) {
            $scope.$log.log('designerModule       - designerController   - .controller          - Entered');

            /**** Data ****/
            // Question Data
            $scope.Question = [
               {
                   QUE_id: -1,
                   QUE_position: '',
                   QUE_text: '',
                   QUE_answerRadioButton: '',
                   QUE_title: '',
                   QUE_type: '',
                   QUE_showQuestionInFeedback: false,
                   QUE_FBS_id: -1,
                   QUE_creationDate: -1
               },
               {
                   QUE_id: -2,
                   QUE_position: '',
                   QUE_text: '',
                   QUE_answerRadioButton: '',
                   QUE_title: '',
                   QUE_type: '',
                   QUE_showQuestionInFeedback: false,
                   QUE_FBS_id: -1,
                   QUE_creationDate: -1
               },
               {
                   QUE_id: -3,
                   QUE_position: '',
                   QUE_text: '',
                   QUE_answerRadioButton: '',
                   QUE_title: '',
                   QUE_type: '',
                   QUE_showQuestionInFeedback: false,
                   QUE_FBS_id: -1,
                   QUE_creationDate: -1
               }
            ];           

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


            //--------------------------------- Send and Receive ---------------------------------//
            // GET Questions Protected
            $scope.getAllQuestionsBelongingToFBS = function () {
                $http({
                    method: 'GET',
                    url: 'http://localhost:54599/api/Feedbackquestions/1',
                    headers: { 'Authorization': 'Bearer ' + $rootScope.oauth.access_token }
                }).then(function successCallback(response) {
                    $scope.$log.log('startpageModule      - startpageController \n '
                        + '> getOneQuestionProtected().success \n '
                        + '> status: ' + response.status);
                    //Write Response to Scope//
                    $scope.Question = response.data;
                }, function errorCallback(response) {
                    $scope.$log.log('startpageModule      - startpageController \n '
                        + '> getOneQuestionProtected().error \n '
                        + '> status: ' + response.status);
                });

            };

        }]);


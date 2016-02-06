'use strict';

//Reopen Module
angular.module('designerModule')

.controller('designerController',
    ['$rootScope', '$scope', '$http',
        function ($rootScope, $scope, $http) {
            $scope.$log.log('designerModule       - designerController   - .controller          - Entered');

            /**** Data ****/
            // Question Data
            $scope.Question = {};           

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
            // GET all Questions belonging to FBS
            $scope.getAllQuestionsBelongingToFBS = function () {
                $http({
                    method: 'GET',
                    url: 'http://localhost:54599/api/Feedbackquestions/1',
                    headers: { 'Authorization': 'Bearer ' + $rootScope.oauth.access_token }
                }).then(function successCallback(response) {
                    $scope.$log.log('designerModule      - designerController \n '
                        + '> getAllQuestionsBelongingToFBS().success \n '
                        + '> status: ' + response.status);
                    //Write Response to Scope//
                    $scope.Question = response.data;
                }, function errorCallback(response) {
                    $scope.$log.log('designerModule      - designerController \n '
                        + '> getAllQuestionsBelongingToFBS().error \n '
                        + '> status: ' + response.status);
                });
            };

                
            // Update(PUT) one Question
            $scope.updateQuestion = function (QUE_id_of_question_to_update) {
                $http({
                    method: 'PUT',
                    url: 'http://localhost:54599/api/Feedbackquestion',
                    headers: { 'Authorization': 'Bearer ' + $rootScope.oauth.access_token },                    
                    data: $scope.Question[0]

                }).then(function successCallback(response) {
                    $scope.$log.log('designerModule      - designerController \n '
                        + '> updateQuestion().success \n '
                        + '> status: ' + response.status);
                }, function errorCallback(response) {
                    $scope.$log.log('designerModule      - designerController \n '
                        + '> updateQuestion().error \n '
                        + '> status: ' + response.status);
                });
            };
          

        }]);


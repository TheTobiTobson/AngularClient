'use strict';

//Reopen Module
angular.module('designerModule')

.controller('designerController',
    ['$rootScope', '$scope', '$http',
        function ($rootScope, $scope, $http) {
            $scope.$log.log('designerModule       - designerController   - .controller          - Entered');

            /**** Data ****/
            // Question Data
            //$scope.Question = {};
            $scope.idToIndexLookupArray = [];

            //DropDow
            // QuestionTypesOptions
            $scope.questionTypes = [                 
                 "Freitext",
                 "Auswahl"
            ];

            //DropDow
            // Show or hide question
            $scope.dropdownShowHide = [
                 "Show",                 
                 "Hide"
            ];

            // Create Lookup Array to match index of array and id 
            $scope.CreateLookupArray = function () {
                $scope.idToIndexLookupArray = [];
                for (var i = 0, len = $scope.ClientQuestionsArray.length; i < len; i++) {                    
                    $scope.idToIndexLookupArray[i] = $scope.ClientQuestionsArray[i].QUE_id;
                }
            };
                     

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
                    $scope.ClientQuestionsArray = response.data;
                    $scope.CreateLookupArray();
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
                    data: $scope.ClientQuestionsArray[$scope.idToIndexLookupArray.indexOf(QUE_id_of_question_to_update)]

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


            // Create(POST) one Question
            $scope.createQuestion = function () {
                // Create new question
                $scope.questionToAppend = {
                    QUE_position: 1,
                    QUE_text: 'PLATZHALTER',
                    QUE_answerRadioButton: '',
                    QUE_title: 'PLATZHALTER',
                    QUE_type: 'Freitext',
                    QUE_showQuestionInFeedback: false,
                    QUE_creationDate: -1,
                    QUE_FBS_id: 1,
                    FBS_FeedbackSession: 0
                };

                //Add new question to array
                $scope.ClientQuestionsArray.push($scope.questionToAppend);

                // POST request to server
                $http({
                    method: 'POST',
                    url: 'http://localhost:54599/api/Feedbackquestion',
                    headers: { 'Authorization': 'Bearer ' + $rootScope.oauth.access_token },
                    //data: $scope.ClientQuestionsArray[$scope.ClientQuestionsArray.length]
                    data: $scope.ClientQuestionsArray[$scope.ClientQuestionsArray.length-1]

                }).then(function successCallback(response) {
                    $scope.$log.log('designerModule      - designerController \n '
                        + '> createQuestion().success \n '
                        + '> status: ' + response.status);
                    $scope.ClientQuestionsArray[$scope.ClientQuestionsArray.length - 1].QUE_id = response.data.QUE_id;

                    $scope.CreateLookupArray();

                }, function errorCallback(response) {
                    $scope.$log.log('designerModule      - designerController \n '
                        + '> createQuestion().error \n '
                        + '> status: ' + response.status);
                });
            };
          

        }])




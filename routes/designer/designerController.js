'use strict';

//Reopen Module
angular.module('designerModule')

.controller('designerController',
    ['$rootScope', '$scope', '$http',
        function ($rootScope, $scope, $http) {
            $scope.$log.log('designerModule       - designerController   - .controller          - Entered');

            /**** Data ****/
            // Header Variables
            $scope.designer = {};
            $scope.designer.pagename = "Designer";

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
                    alert("Ein Fehler ist aufgetreten. Bitte versuche es erneut");
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

                    if (response.status == -1) // Server not responding
                    {
                        alert("NO HTTP RESPONSE.\nDer Server ist nicht erreichbar. Bitte versuche es erneut");
                    }
                    else if (response.status == 400) // Server replies BAD REQUEST
                    {
                        alert("HTTP 400.\nFehlerhafte Anfrage. Bitte versuche es erneut");
                        $scope.getAllQuestionsBelongingToFBS();
                    }
                    else if (response.status == 404) // Server replies NOT FOUND
                    {
                        alert("HTTP 404.\nFehlerhafte Anfrage. Bitte versuche es erneut");
                        $scope.getAllQuestionsBelongingToFBS();
                    }
                    else // Server responding something else
                    {
                        alert("HTTP x.\nEin Fehler ist aufgetreten. Bitte versuche es erneut");
                        $scope.getAllQuestionsBelongingToFBS();
                    };

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
                                        
                    if (response.status == -1) // Server not responding
                    {
                        alert("NO HTTP RESPONSE.\nDer Server ist nicht erreichbar. Bitte versuche es erneut");
                    }
                    else if (response.status == 400) // Server replies BAD REQUEST
                    {
                        alert("HTTP 400.\nFehlerhafte Anfrage. Bitte versuche es erneut");
                        $scope.getAllQuestionsBelongingToFBS();
                    }
                    else if (response.status == 404) // Server replies NOT FOUND
                    {
                        alert("HTTP 404.\nFehlerhafte Anfrage. Bitte versuche es erneut");
                        $scope.getAllQuestionsBelongingToFBS();
                    }
                    else // Server responding something else
                    {
                        alert("HTTP x.\nEin Fehler ist aufgetreten. Bitte versuche es erneut");
                        $scope.getAllQuestionsBelongingToFBS();
                    };
                    
                });
            };

            // DELETE one Question
            $scope.deleteQuestion = function (QUE_id_of_question_to_delete) {
                // Delete Elemtent from ClientQuestionsArray
                $scope.ClientQuestionsArray.splice($scope.idToIndexLookupArray.indexOf(QUE_id_of_question_to_delete), 1);


                $http({
                    method: 'DELETE',
                    url: 'http://localhost:54599/api/Feedbackquestions/' + QUE_id_of_question_to_delete,
                    headers: { 'Authorization': 'Bearer ' + $rootScope.oauth.access_token }
                }).then(function successCallback(response) {
                    $scope.$log.log('designerModule      - designerController \n '
                        + '> deleteQuestion().success \n '
                        + '> status: ' + response.status
                        + '> QUE_id: ' + response.data.QUE_id);
                }, function errorCallback(response) {
                    $scope.$log.log('designerModule      - designerController \n '
                        + '> deleteQuestion().error \n '
                        + '> status: ' + response.status);

                    if (response.status == -1) // Server not responding
                    {
                        alert("NO HTTP RESPONSE.\nDer Server ist nicht erreichbar. Bitte versuche es erneut");
                    }
                    else if (response.status == 400) // Server replies BAD REQUEST
                    {
                        alert("HTTP 400.\nFehlerhafte Anfrage. Bitte versuche es erneut");
                        $scope.getAllQuestionsBelongingToFBS();
                    }
                    else if (response.status == 404) // Server replies NOT FOUND
                    {
                        alert("HTTP 404.\nFehlerhafte Anfrage. Bitte versuche es erneut");
                        $scope.getAllQuestionsBelongingToFBS();
                    }
                    else // Server responding something else
                    {
                        alert("HTTP x.\nEin Fehler ist aufgetreten. Bitte versuche es erneut");
                        $scope.getAllQuestionsBelongingToFBS();
                    };

                });
            };
          

        }])




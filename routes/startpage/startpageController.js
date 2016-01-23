'use strict';

//Reopen Module
angular.module('startpageModule')

.controller('startpageController',
    ['$scope','$http', 
        function ($scope, $http) {
            $scope.$log.log('startpageModule      - startpageController  - .controller          - Entered');


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

            // Clear data//
            $scope.clearResults = function () {
                $scope.Question = "";
            }


           // GET Questions
            $scope.getOneQuestion = function () {
                $http({
                    method: 'GET',
                    url: 'http://localhost:54599/api/QUE_FeedbackQuestions/2'
                }).then(function successCallback(response) {
                    $scope.$log.log('startpageModule      - startpageController \n '
                        + '> getOneQuestion().success \n '
                        + '> status: ' + response.status);
                        //Write Response to Scope//
                        $scope.Question = response.data;
                }, function errorCallback(response) {
                    $scope.$log.log('startpageModule      - startpageController \n '
                        + '> getOneQuestion().error \n '
                        + '> status: ' + response.status);
                });
            };
                      

            // POST Credentials
            $scope.sendCredentials = function () {

                /////VERSION 1 //////
                //$http({
                //    method: 'POST',
                //    url: 'http://localhost:54599/Token',
                //    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                //    data: { username: $scope.loginCredentials.email, password: $scope.loginCredentials.password }
                //})
            /////VERSION 2 ////
                $http({
                    method: 'POST',
                    url: 'http://localhost:54599/Token',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    transformRequest: function (credentials) {
                        var str = [];
                        for (var p in credentials)
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(credentials[p]));                       
                        return 'grant_type=password&' + str.join("&");

                    },
                    data: $scope.loginCredentials
                }).then(function successCallback(response) {
                    $scope.$log.log('startpageModule      - startpageController \n '
                        + '> sendCredentials().success \n '
                        + '> status: ' + response.status);
                    //Write Response to Scope//
                    $scope.Question = response.data;
                }, function errorCallback(response) {
                    $scope.$log.log('startpageModule      - startpageController \n '
                        + '> sendCredentials().error \n '
                        + '> status: ' + response.status);
                });
            };

        }
    ]);


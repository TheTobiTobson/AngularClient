'use strict';

//Reopen Module
angular.module('startpageModule')

.controller('startpageController',
    ['$scope', 'ComServiceFactory',
        function ($scope, ComServiceFactory) {
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

            // Call API for data//
            $scope.getOneQuestion = function () {                             
                ComServiceFactory.getQuestions()
                        .then(function successCallback(response) {
                            $scope.$log.log('startpageModule      - startpageController \n '
                            + '> ComService.getQuestions().success \n '
                            + '> status: ' + response.status);
                            //Write Response to Scope//
                            $scope.Question = response.data;                           

                        }, function errorCallback(response) {
                            $scope.$log.log('startpageModule      - startpageController \n '
                            + '> ComService.getQuestions().error \n '
                            + '> status: ' + response.status);
                   })                
            }

            //Send Credentials for Login
            $scope.sendCredentialsToLogin = function () {
                ComServiceFactory.sendCredentials($scope.loginCredentials)
                    .then(function successCallback(response) {
                        $scope.$log.log('SUCCESS');
                       
                    }, function errorCallback(response) {
                        $scope.$log.log('ERROR');
                    })
            }


        }
    ]);


'use strict';

//Reopen Module
angular.module('startpageModule')

.controller('startpageController',
    ['$scope', 'ComService',
        function ($scope, ComService) {
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

            $scope.getOneQuestion = function () {                             
                    ComService.getQuestions()
                        .then(function successCallback(response) {
                            $scope.$log.log('module:Account - controller:AccountController \n '
                            + '> ComService.getQuestions().success \n '
                            + '> status: ' + response.status);
                            $scope.Question = response.data;                           

                        }, function errorCallback(response) {
                            $scope.$log.log('module:Account - controller:AccountController \n '
                            + '> ComService.getQuestions().error \n '
                            + '> status: ' + response.status);
                   })
                
            }
        }
    ]);


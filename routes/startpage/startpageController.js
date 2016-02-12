'use strict';

//Reopen Module
angular.module('startpageModule')

.controller('startpageController',
    ['$rootScope', '$scope', '$http',
        function ($rootScope, $scope, $http) {
            $scope.$log.log('startpageModule      - startpageController  - .controller          - Entered');

            $scope.vari = "ICH BIN STARTPAGE";

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
                   QUE_creationDate: 4,
                   QUE_FBS_id: -1,                   
                   FBS_FeedbackSession: 0
               }
            ];
                       
            $scope.loginCredentials = {
                username: "",
                password: ""
            };

            // Http Header Data
            $scope.httpheaders = {
                status: -1,
                statusText: "null",
                access_token: "null"
            };

            // Fill correct data to loginform
            $scope.setRightCredentials = function () {
                $scope.loginCredentials.username = "tobi@TheRealUser.com";
                $scope.loginCredentials.password = "Password!1";
            }
                       
            // Remove http header
            $scope.forgetCredentials = function () {
                $rootScope.oauth.access_token = "null";
            }

            // Clear data//
            $scope.clearResults = function () {
                $scope.Question = "";
            }

           //--------------------------------- Send and Receive ---------------------------------//

            // GET Questions Protected
            $scope.getOneQuestionProtected = function () {
                $http({
                    method: 'GET',                    
                    url: 'http://localhost:54599/test/api/Feedbacksession_protected/2',
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

            // GET Questions Unprotected
            $scope.getOneQuestionUNProtected = function () {
                $http({
                    method: 'GET',                  
                    url: 'http://localhost:54599/test/api/Feedbacksession_unprotected/2'
                }).then(function successCallback(response) {
                    $scope.$log.log('startpageModule      - startpageController \n '
                        + '> getOneQuestionUNProtected().success \n '
                        + '> status: ' + response.status);
                    //Write Response to Scope//
                    $scope.Question = response.data;
                }, function errorCallback(response) {
                    $scope.$log.log('startpageModule      - startpageController \n '
                        + '> getOneQuestionUNProtected().error \n '
                        + '> status: ' + response.status);
                });
            };                      

            // POST Credentials
            $scope.sendCredentials = function () {
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
                    $scope.httpheaders.status = response.status;
                    $scope.httpheaders.statusText = response.statusText;
                    // Store Access Token
                    //$scope.httpheaders.access_token = response.data.access_token;
                    // $http.defaults.headers.common['Authorization'] = "Bearer " + response.data.access_token;
                    //$scope.httpheaders.access_token = response.data.access_token;
                    $rootScope.oauth.access_token = response.data.access_token;

                }, function errorCallback(response) {
                    $scope.$log.log('startpageModule      - startpageController \n '
                        + '> sendCredentials().error \n '
                        + '> status: ' + response.status);
                    //Write Response to Scope//
                    $scope.httpheaders.status = response.status;
                    $scope.httpheaders.statusText = response.statusText;
                });
            };

        }
    ]);


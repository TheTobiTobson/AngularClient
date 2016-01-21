'use strict';

angular.module('startpageModule')

.factory('ComService',
    ['$http', '$rootScope',
    function ($http, $rootScope) {

        var urlFirstPartInclPort = 'http://localhost:54599'
        var ComService = {};

        //Get all Questions
        ComService.getQuestions = function () {
            $rootScope.$log.log('module:Account - factory:ComService - '
                + 'function:getQuestion \n > $http.get(' + urlFirstPartInclPort
                + '/api/QUE_FeedbackQuestions/2)');
            return $http.get(urlFirstPartInclPort + '/api/QUE_FeedbackQuestions/2');
        };

        return ComService;

    }])
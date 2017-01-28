'use strict';

/**
 * @ngdoc function
 * @name healthCareApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the healthCareApp
 */
angular.module('healthCareApp')
  .controller('AdminCtrl', function($rootScope, $scope, healthCareBusinessConstants, ApiService) {
    $rootScope.hideNavbar = false;
    var vm = this;

        // error call back method.
    var errorCallback = function (error) {
      if (error && error.data) {
        vm.errorMsg = error.data.message;
      }
      console.log("login response::", error);
    };

    // final call back method called no matter success or failure
    var finalCallBack = function (res) {
      console.log('finalCallBack', res);
    };

    var getUsersSb = function(res) {
      vm.users = res.data;
    };

    vm.getPersonals = function() {
      ApiService.get(healthCareBusinessConstants.GET_USERS).then(getUsersSb, errorCallback).finally(finalCallBack);
    };

    vm.init = function() {
      vm.getPersonals();
    };

    vm.init();

  });
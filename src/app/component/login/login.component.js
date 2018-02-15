(function() {
    'use strict';
    angular.module('baseApp').component('login', {
        controller: LoginController,
        templateUrl: 'app/component/login/login.view.html'
    });

    function LoginController($scope,$state) {
        $scope.title = "login Component";

        $scope.velidateUser = function(){
            $state.go('imagegrid');
        }
    }

})();
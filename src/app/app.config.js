(function() {
    'use strict';
    angular.module('baseApp').config(configBlock, ['$stateProvider', '$urlRouterProvider']);

    function configBlock($stateProvider, $urlRouterProvider) {
              
        $stateProvider.state('imagegrid', {
            url: '/',
            component: 'imagegridCom'
        })
        
        $urlRouterProvider.otherwise('/');
	
    }
})();
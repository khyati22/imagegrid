(function() {
    'use strict';
    angular.module('baseApp').component('imagegridCom', {
        controller: ImagegridController,        
        templateUrl: 'app/component/imagegrid/imagegrid.view.html'
    });

    function ImagegridController($scope, ImagegridSvc) {
        $scope.title = "Image grid Component";
        $scope.allData = [];
        $scope.loading = false;
		$scope.data;
        $scope.displayimages = function() {
            $scope.loading = true;
            ImagegridSvc.getDataunsplash().then(function(response) {
                $scope.allData = response.data;
                $scope.loading = false;
            }, function(error) {
                $scope.loading = false;
            });

        }
        $scope.displayimages();
		
		

        
    }
	
	
})();
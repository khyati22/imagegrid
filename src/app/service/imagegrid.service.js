(function() {
    'use strict';
    angular.module('baseApp').service('ImagegridSvc', ImagegridService);



    function ImagegridService($http) {
        var photo=[];
        function getDataunsplash() {
           return $http({
                method: "GET",
               url: "https://jsonplaceholder.typicode.com/photos",
     
          }).then(
              function(res)
              {
                 return res;
     
                //  for(var i=0;i<totalFound;i++)
                //  {
                //      //var full=res.data[i].urls.full;
                //     // var regular=res.data[i].urls.regular;
                //      var raw=res.data[i].urls;
                //      //var small=res.data[i].urls.small;
                //      //var thumb=res.data[i].urls.thumb;
     
                //      photo.push({
                //          //full:full,
                //          //regular:regular,
                //          raw:raw,
                //         // small:small,
                //          //thumb:thumb
                //      });
     
                //  }
                 
               //  $scope.photo=photo;
     
              },
             function(res)
             {
                 console.log('error',res);
             });
        }
        return { getDataunsplash: getDataunsplash};
    }

})();
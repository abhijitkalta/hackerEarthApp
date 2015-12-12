'use strict';
//to retrie value from the hackerEarth api

hackerEarthApp.factory('problemsData', function( $resource , $q) {
    var resource = $resource('http://hackerearth.0x10.info/api/problems?type=json&query=list_problems');
    var resource2 = $resource('http://hackerearth.0x10.info/api/problems?type=json&query=api_hits');
    return {
      getProblems  : function() {
        var deferred = $q.defer();
        resource.get().
        $promise.then( function(response) {
        deferred.resolve(response);
        }, function(response) {
        deferred.reject(response)
       });
       return deferred.promise;
    },

    getApiHits  : function() {
      var deferred = $q.defer();
      resource2.get().
      $promise.then( function(response) {
      deferred.resolve(response);
      }, function(response) {
      deferred.reject(response)
     });
     return deferred.promise;
  }

}});

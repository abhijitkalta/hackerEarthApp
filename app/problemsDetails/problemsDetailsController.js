hackerEarthApp.controller('problemsDetailsController',
    function problemsDetailsController($scope, problemsData, $route, myCache, CacheFactory) {

   
    
    //to store likes in localStorage permanently
    var myCache = CacheFactory.get('myCache');
    myCache.setOptions({
        //to reset cache onexpire
        onExpire : function(key,value){
        myCache.put(key,value);
      }
    });

    //to create the problems model
    var promise = problemsData.getProblems();
    promise.then(function(event) {
    var problems = event.problems;
    function getProperValues(elem){
        return (elem.name == "");
    }
    $scope.problems = _.reject(problems, getProperValues);
    
    }, function(event) {
    alert("Failed");
    });

    //to create the apiHits model
    var promise2 = problemsData.getApiHits();
    promise2.then(function(event) {
    $scope.apiHits = event.api_hits;
    }, function(event) {
    alert("Failed");
    });

    //to store problemName and likes count as key, value pair
    $scope.addToCache = function(key){
      if(isNaN(myCache.get(key)))
       return myCache.put(key, 1);
       return myCache.put(key, myCache.get(key) + 1);
    };

    //to retrieve the cache key value
    $scope.getFromCache = function(key){
        if(isNaN(myCache.get(key)))
        return 0;
        $scope.total_likes();
        return myCache.get(key);
    };

    $scope.total_likes = function(){
      var sum=0;
      var cached = myCache.keys();
      for(var i=0; i < cached.length; i++){
        var str = cached[i].toString();
        sum += myCache.get(str);
      }
      return sum;
    }


});

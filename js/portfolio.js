// Create app
var myApp = angular.module('myApp', ['ui.router'])

var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
	
})

// 'home' references ui-sref	
// Configure app
myApp.config(function($stateProvider){
	$stateProvider
		.state ('home', {
			url: '/',
			templateUrl: 'template/home.html',
			controller: 'homeController',
		})

		.state ('projects', {
			url: '/projects',
			templateUrl: 'template/projects.html',
			controller: 'projectsController',
		})

		.state ('interests', {
			url: '/interests',
			templateUrl: 'template/interests.html',
			controller: 'interestsController',
		})

})


//each page gets its own controller
myApp.controller('homeController', function($scope, $http){
  $scope.info = "Some info";
})



//each page gets its own controller
myApp.controller('projectsController', function($scope, $http){
  $scope.info = "some info";
  // var getData = function(map) {

    
  // var data;
  // $.ajax({
  //      url:'data/response.json',
  //      type: "get",
  //      success:function(dat) {
  //        data = dat
  //         customBuild(map,data);
         
  //      }, 
  //      dataType:"json"
  // })
    

  // }
})



//each page gets its own controller
myApp.controller('interestsController', function($scope, $http){
  $scope.info = "Some info";
})
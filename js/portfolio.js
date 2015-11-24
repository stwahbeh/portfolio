// Create app
var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
	var getData = function(map) {

	  
	var data;
	$.ajax({
	     url:'data/response.json',
	     type: "get",
	     success:function(dat) {
	       data = dat
	        customBuild(map,data);
	       
	     }, 
	     dataType:"json"
	})
	  

	}
})

// 'home' references ui-sref	
// Configure app
myApp.config(function($stateProvider){
	$stateProvider
		.state ('home', {
			url: '/home',
			templateUrl: '/template/home.html'
			controller: 'homeController'
		})

		.state ('projects', {
			url: '/projects',
			templateUrl: '/template/projects.html'
			controller: 'projectsController'
		})

		.state ('interests', {
			url: '/interests',
			templateUrl: '/template/interests.html'
			controller: 'interestsController'
		})

})


//each page gets its own controller
.controller('homeController', function($scope){
  $scope.info = "Some info"
})



//each page gets its own controller
.controller('projectsController', function($scope){
  $scope.info = "Some info"
})



//each page gets its own controller
.controller('comingSoonController', function($scope){
  $scope.info = "Some info"
})
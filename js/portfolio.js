// Create app
var myApp = angular.module('myApp', ['ui.router'])

var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
var data;	
})

// 'home' references ui-sref	
// Configure app
myApp.config(function($stateProvider){
	$stateProvider
		.state ('home', {
			url: '',
			templateUrl: 'template/home.html',
			controller: 'homeController',
		})

		.state ('projects', {
			url: '/projects',
			templateUrl: 'template/project.html',
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
  
})



//each page gets its own controller
myApp.controller('projectsController', function($scope, $http){
  	
  	var getData = function() {
	$http.get('../data/info.json').success(function(response){
	$scope.items = response;
	console.log(response);

})
}
getData()
});

//each page gets its own controller
myApp.controller('interestsController', function($scope, $http){
  
})
// Create app
var myApp = angular.module('myApp', ['ui.router'])
// Configure app
myApp.config(function($stateProvider) {
    $stateProvider
    .state('introduction', {
        url:'',
        templateUrl: 'templates/introduction.html',
        controller: 'IntroductionController',
    })
    .state('one', {
        url:'/one',
        templateUrl: 'templates/one.html',
        controller: 'OneController'
    })
    .state('two', {
        url:'/two',
        templateUrl: 'templates/two.html',
        controller: 'TwoController'     
    })
    .state('three', {
        url:'/three',
        templateUrl: 'templates/three.html',
        controller: 'threeController'     
    })
})

// Home page controller: define $scope.number as a number
    .controller('IntroductionController', function($scope){
        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip(); 
        });
    })


// Projects page controller: define $scope.about as a string
    .controller('OneController', function($scope, $http){
      // $scope.about = 'Some info string'
      $http.get('data/projects.json').success(function(response) {
        $scope.projects = response;
      })
    })

// About controller: define $scope.url as an image
    .controller('TwoController', function($scope, $http){
      $http.get('data/about.json').success(function(response) {
        $scope.about = response;
        console.log($scope.about)
      })
    })

// Contact controller: define $scope.url as an image
    .controller('ThreeController', function($scope){
    })


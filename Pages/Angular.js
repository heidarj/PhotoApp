var app = angular.module('PhotoApp', []);

//index.html view controller
app.controller('MainView', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
    
    $scope.posts = [];
    $scope.newPost = {created_by: '', text: '', created_at: ''};

    $scope.post = function(){
        $scope.newPost.created_at = Date.now();
        $scope.posts.push($scope.newPost);
        $scope.newPost = {created_by: '', text: '', created_at: ''};
    };
});

//login and registration controller
app.controller('authController', function($scope){
  $scope.user = {username: '', password: ''};
  $scope.error_message = '';

  $scope.login = function(){
    //placeholder until authentication is implemented
    $scope.error_message = 'login request for ' + $scope.user.username;
  };

  $scope.register = function(){
    //placeholder until authentication is implemented
    $scope.error_message = 'registeration request for ' + $scope.user.username;
  };
});
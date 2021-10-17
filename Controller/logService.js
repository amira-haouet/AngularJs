var app=angular.module('app',[]);
// le controlleur utilise le service $log 
app.controller('logController',function($scope,$log){
$scope.$log=$log;
$scope.message='message';

});
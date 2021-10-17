var monApp =angular.module('monApp',[]);
monApp.controller('DoubleController', ['$scope',function($scope){
$scope.double=function(scope){return (2*scope );};}
]);


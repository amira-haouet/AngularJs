angular.module('app', []).controller('logController', ['$scope', '$log', function($scope, $log) 
 {
  $scope.$log = $log;
  $scope.message = 'message';
}]);
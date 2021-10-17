app.controller("mainController1",function($scope, formationsFactory)
{
$scope.formations= formationsFactory.getFormations();
$scope.addFormation=function(formation)
 {
 formationsFactory.addFormation(formation);
 $scope.newFormation.nom = '';

 }



});
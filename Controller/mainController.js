app.controller("mainController",function($scope, etudiantsFactory)
{
$scope.etudiants= etudiantsFactory.getEtudiants();
$scope.addEtudiant=function(etudiant)
 {
 etudiantsFactory.addEtudiant(etudiant);
 $scope.newEtudiant.nom = '';
 $scope.newEtudiant.prenom = '';
 }



});
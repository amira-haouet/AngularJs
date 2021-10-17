angular.module("app").factory("etudiantsFactory",function()
{
var etudiants= [{id:1, nom:'' , prenom:''}];
var getEtudiants= function()
{
    return etudiants;
};

var addEtudiant= function (etudiant) 
{
    
    var etudiant=prepareEtudiant(etudiant);
    etudiants.push({id:etudiant.id,nom:etudiant.nom,prenom:etudiant.prenom});
};

    function prepareEtudiant(etudiant)
{
   etudiant.id = etudiants.length + 1;
   return etudiant; 
}

return{
getEtudiants: getEtudiants,
addEtudiant: addEtudiant

};

});






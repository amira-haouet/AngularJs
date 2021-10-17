angular.module("app").factory("formationsFactory",function()
{
var formations =[{ id:1, nom:''}];
var getFormations= function()
{
    return formations;
};

var addFormation= function (formation)
{
    
    var formation=prepareFormation(formation);
    formations.push({id:formation.id,nom:formation.nom});
};

    function prepareFormation(formation)
{
   formation.id = formations.length + 1;
   return formation; 
}

return{
getFormations: getFormations,
addFormation: addFormation

};

});






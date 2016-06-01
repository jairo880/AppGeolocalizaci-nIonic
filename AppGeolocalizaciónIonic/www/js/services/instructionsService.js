angular.module('starter').factory('InstructionsService', [ function() {

  var instructionsObj = {};

  instructionsObj.instructions = {
    newLocations : {
      text : 'Tienes la opción de agregar nuevas pocisiones',
      seen : false
    }
  };

  return instructionsObj;

}]);
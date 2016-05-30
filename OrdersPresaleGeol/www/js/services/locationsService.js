angular.module('starter').factory('LocationsService', [ function() {

  var locationsObj = {};

  locationsObj.savedLocations = [
    {
      name : "Tu tia la coja en washington :v",
      lat : 38.8951100,
      lng : -77.0363700
    }

  ];

  return locationsObj;

}]);
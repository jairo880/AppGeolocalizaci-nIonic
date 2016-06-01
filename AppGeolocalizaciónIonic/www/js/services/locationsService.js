angular.module('starter').factory('LocationsService', [ function() {

  var locationsObj = {};

  locationsObj.savedLocations = [
    {
      name : "Medellín",
      lat : 6.217,
      lng : -75.567
    }

  ];

  return locationsObj;

}]);
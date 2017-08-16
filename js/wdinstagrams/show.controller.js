
/* global angular */

angular.module('wdinstagram')
.controller('wdinstagramshowController', [
  '$stateParams',
  'wdinstagram',
  wdinstagramshowController
])

function wdinstagramshowController($stateParams, wdinstagram) {
  this.wdinstagram = wdinstagram.get({id: $stateParams.id})
}

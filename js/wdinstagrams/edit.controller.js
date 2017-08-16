/* global angular */

angular.module('wdinstagram')
.controller('wdinstagramEditController', [
  '$state',
  'wdinstagram',
  wdinstagramEditController
])

function wdinstagramEditController ($state, wdinstagram) {
  this.wdinstagram = wdinstagram.get({id: $state.params.id})
  this.update = function () {
    this.wdinstagram.$update({id: $state.params.id})
  }
  console.log(this.wdinstagram)
}


/* global angular */

angular.module('wdinstagram')
.controller('wdinstagramNewController', [
  '$state',
  'wdinstagram',
  wdinstagramNewController
])

function wdinstagramNewController ($state, wdinstagram) {
  this.wdinstagram = new wdinstagram()
  this.create = function () {
    this.wdinstagram.$save(() => {
      $state.go('wdinstagramIndex')
    })
  }
}

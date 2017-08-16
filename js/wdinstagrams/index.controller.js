/* global angular */

(function () {
  angular.module('wdinstagram')
  .controller('wdinstagramIndexController', [
    'wdinstagram',
    wdinstagramIndexControllerFunction
  ])

  function wdinstagramIndexControllerFunction (wdinstagram) {
    this.wdinstagrams = wdinstagram.query()
  }
})()

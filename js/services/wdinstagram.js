/* global angular */

angular.module('wdinstagram')
.factory('wdinstagram', [
  '$resource',
  wdinstagramservice
])

function wdinstagramservice ($resource) {
  return $resource('http://localhost:3000/entries/:id', {}, {
    update: {
      method: 'PUT'
    }
  })
}

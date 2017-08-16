/* global angular */

angular
.module('wdinstagram')
.config([
  '$stateProvider',
  RouterFunction
])

function RouterFunction ($stateProvider) {
  $stateProvider
  .state('wdinstagramIndex', {
    url: '/wdinstagrams',
    templateUrl: 'js/wdinstagrams/index.html',
    controller: 'wdinstagramIndexController',
    controllerAs: 'vm'
  })
  .state('wdinstagramNew', {
    url: '/wdinstagrams/new',
    templateUrl: 'js/wdinstagrams/new.html',
    controller: 'wdinstagramNewController',
    controllerAs: 'vm'
  })
  .state('wdinstagramshow', {
    url: '/wdinstagrams/:id',
    templateUrl: 'js/wdinstagrams/show.html',
    controller: 'wdinstagramshowController',
    controllerAs: 'vm'
  })
  .state('wdinstagramEdit', {
    url: '/wdinstagrams/:id/edit',
    templateUrl: 'js/wdinstagrams/edit.html',
    controller: 'wdinstagramEditController',
    controllerAs: 'vm'
  })
}

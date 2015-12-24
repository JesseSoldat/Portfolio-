let config = function($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  
    .state('home', {
      url: '/',
      controller: 'HomeController as vm',
      templateUrl: 'templates/home.tpl.html'
    })
    ;


  

};

config.$inject = ['$urlRouterProvider', '$stateProvider'];

export default config;
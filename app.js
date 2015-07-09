angular.module('app', ['ngNewRouter', 'app.search', 'app.detail', 'app.main', 'app.navbar', 'app.primaryFeature', 'app.search'])
    .controller('AppController', ['$router', AppController]);

function AppController ($router) {
    $router.config([
        {path: '/', components: {main: 'main', navbar: 'navbar'} },
        {path: '/search/:searchTerm', component: 'search'}
    ]);
}

//AppController.$routeConfig([
//]);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('/', {
			url: '/',
			templateUrl: 'app/html/title-screen.html'
		})
		.state('select-juice', {
			url: '/select-juice',
			templateUrl: 'app/html/select-juice.html',
			controller: 'SelectJuiceCtrl'
		})
		.state('play', {
			url: '/play',
			templateUrl: 'app/html/play.html',
			controller: 'PlayCtrl',
			params: {
				juice: null
			}
		})
});

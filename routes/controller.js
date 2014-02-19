var aMailModule = angular.module('AMail', []);

aMailModule.config(function($routeProvider) {
	$routeProvider.
		when('/', {
			controller: ListController,
			templateUrl: 'list.htm'
		}).
		when('/view/:id', {
			controller: DetailController,
			templateUrl: 'detail.htm'
		}).
		otherwise({
			redirectTo: '/'
		});
});

var messages = [
	{
		id: 0,
		sender: 0,
		subject: 0,
		date: 0,
		recipients: ['r1', 'r2'],
		message: 0
	},
	{
		id: 1,
		sender: 1,
		subject: 1,
		date: 1,
		recipients: ['r1', 'r2'],
		message: 1
	}
];

function ListController($scope) {
	$scope.messages = messages;
}

function DetailController($scope, $routeParams) {
	$scope.message = messages[$routeParams.id];
}
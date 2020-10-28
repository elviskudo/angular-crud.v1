angular
    .module('bookApp')
    .config(['$routeProvider', function config ($routeProvider) {
        $routeProvider
            .when('/book/:bookId', {
                template: '<book-detail></book-detail>'
            })
    }])
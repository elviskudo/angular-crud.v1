angular
    .module('bookApp')
    .component('bookDetail', {
        template: 'Detail view for {{ $ctrl.bookId }}',
        controller: ['$routeParams', function BookDetailController ($routeParams) {
            this.bookId = $routeParams.bookId
        }]
    })
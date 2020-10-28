angular
    .module('bookApp')
    .component('bookList', {
        templateUrl: 'views/book.template.html',
        controller: function BookController ($http) {
            let self = this
            self.orderProp = 'title'
            $http.get('books.json').then(function (response) {
                self.books = response.data
            })
        }
    })
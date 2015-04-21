var app = angular.module('app', []);

app.controller('HelloAngular', function ($scope) {
    $scope.greeting = {
        text: 'Hello'
    };
});
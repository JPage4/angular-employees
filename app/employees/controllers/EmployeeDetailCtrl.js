angular
.module("EmployeeApp")
.controller("EmployeeDetailCtrl",
    function ($scope, $location, $routeParams,EmployeeFactory) {
        $scope.employee = {}

        EmployeeFactory.single($routeParams.employeeId).then(employee => {
            $scope.employee = employee
        })
        // ng-click button Fire!
        $scope.fireEmployee = () => {
            EmployeeFactory.fire($scope.employee, $routeParams.employeeId).then(() =>
            $location.url("/"));
        }
        // ng-click button Murder!
        $scope.murderEmployee = () =>
        EmployeeFactory.murder($routeParams.employeeId).then(() =>
            $location.url("/"));
    }
)
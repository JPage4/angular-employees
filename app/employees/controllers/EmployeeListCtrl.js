angular
.module("EmployeeApp")
.controller("EmployeeListCtrl", function(EmployeeFactory, $scope) {
    $scope.employees = []

    EmployeeFactory.list().then(data => {
        $scope.employees = data
    })
})
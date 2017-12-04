// var app = angular.module("EmployeeApp", ["ngRoute"]);

// app.controller("EmployeeCtrl", function ($scope, $http) {

//     $scope.newEmployee = {}
//     $scope.employee = []

//     // this function gets firebase
//     getEmployees = () => {
//         $http
//             .get("https://angular-employees-52676.firebaseio.com/employees/.json")
//             .then(response => {
//                 $scope.employees = response.data
//             });
//     }
//     // hire button triggers addEmployee function
//     $scope.addEmployee = function() {
//         $http
//             .post(
//                 "https://angular-employees-52676.firebaseio.com/employees/.json",
//             { /* JSON stringify all this shiz below */
//                 "firstName": $scope.newEmployee.firstName,
//                 "lastName": $scope.newEmployee.lastName,
//                 "employmentStart": Date.now(),
//                 "employmentEnd": 0
//             })

//         .then(() => {
//             // clear input fields
//             $scope.newEmployee.firstName = ""
//             $scope.newEmployee.lastName = ""
//             getEmployees()
//         })
//     };

// // use key, employee/value because ng-repear can't iterate over objects unless we do this
//     $scope.fireEmployee = function (key, employee) {
//         console.log("Sorry, employee number", key, "You were terrible at your job")
//         employee.employmentEnd = Date.now()
//         $http
//         .put(
//             `https://angular-employees-52676.firebaseio.com/employees/${key}/.json`,
//             {// JSON.stringify(employee)
//                 employee
//             }
//         )
//         .then(getEmployees)
//     }
//     getEmployees()
// })

//     // $scope.employees = [
//         // {
//         //     "id": 1,
//         //     "firstName": "Erin",
//         //     "lastName": "Orstrom",
//         //     "employmentStart": 1512140013765,
//         //     "employmentEnd": 0
//         // },
//         // {
//         //     "id": 3,
//         //     "firstName": "Sarah",
//         //     "lastName": "Story",
//         //     "employmentStart": 1512139999729,
//         //     "employmentEnd": 0
//         // },
//         // {
//         //     "id": 3,
//         //     "firstName": "Sarah",
//         //     "lastName": "Story",
//         //     "employmentStart": 1512139999729,
//         //     "employmentEnd": 0
//         // },
//     //     {
//     //         "id": 4,
//     //         "firstName": "Sulaiman",
//     //         "lastName": "Allan",
//     //         "employmentStart": 1512140294571,
//     //         "employmentEnd": 0
//     //     },
//     //     {
//     //         "id": 5,
//     //         "firstName": "Ben",
//     //         "lastName": "Marks",
//     //         "employmentStart": 1512200192934,
//     //         "employmentEnd": 0
//     //     }
//     // ]

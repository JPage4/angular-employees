angular
.module("EmployeeApp")
.factory("EmployeeFactory", function ($http) {
    let firebaseURL = "https://angular-employees-52676.firebaseio.com"
    return Object.create(null, {
        "cache": {
            value: null,
            writable: true
        },
        "list": {
            value: function () {
                return $http({
                    method: "GET",
                    url: `${firebaseURL}/employees/.json`
                }).then(response => {
                    const data = response.data
                    // Make an array of objects so we can use filters
                    return Object.keys(data).map(key => {
                        data[key].id = key
                        return data[key]
                    })
                })
            }
        },
        "single": {
            value: function (key) {
                return $http({
                    method: "GET",
                    url: `${firebaseURL}/employees/${key}/.json`
                }).then(response => {
                    return response.data
                })
            }
        },
        "add": {
            value: function (employee) {
                return $http({
                    method: "POST",
                    url: `${firebaseURL}/employees/.json`,
                    data: {
                        "firstName": employee.firstName,
                        "lastName": employee.lastName,
                        "employmentStart": Date.now(),
                        "employmentEnd": 0
                    }
                })
            }
        },
        "find": {
            value: function (searchString) {
                const result = this.cache.find(emp => {
                    return emp.firstName.includes(searchString) ||
                           emp.lastName.includes(searchString)
                })
                return result
            }
        },
        "fire": {
            value: function (employee, key) {
                employee.employmentEnd = Date.now()
                return $http({
                    method: "PUT",
                    url: `${firebaseURL}/employees/${key}/.json`,
                    data: employee
                })
            }
        },
        "murder": {
            value: function (key) {
                return $http({
                    method: "DELETE",
                    url: `${firebaseURL}/employees/${key}/.json`
                })
            }
        },
    })
})
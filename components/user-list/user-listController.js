'use strict';

cs142App.controller('UserListController', ['$scope',
    function ($scope) {
        $scope.main.title = 'Users';

        // console.log('window.cs142models.userListModel()', window.cs142models.userListModel());
        // $scope.main.show = true;
        console.log($scope.main.show)
        $scope.main.userList =  window.cs142models.userListModel();
        
        // console.log('userList: ',$scope.main.userList)
        // 
        // $scope.main.user_id = window.cs142models.userListModel().map((x) =>x._id)
        // $scope.main.userFirstName = window.cs142models.userListModel().map((x) =>x.first_name)
        // $scope.main.userLastName = window.cs142models.userListModel().map((x) =>x.last_name)
        






    }]);


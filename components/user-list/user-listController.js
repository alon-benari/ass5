'use strict';

cs142App.controller('UserListController', ['$scope',
    function ($scope) {
        $scope.main.title = 'Users';
    
        console.log($scope.main.show)
        //  $scope.main.userList =  window.cs142models.userListModel();

        $scope.doneCallBack = function(model){
            console.log('I am done. Now, to upate')
            $scope.$apply(function(){
                console.log('in doneCallBack')
                $scope.main.userListModel = model  // The update happens here.
                console.log($scope.main.userList)
                console.log('***Get User Data****')
            })
        }


        $scope.FetchModel = function(url,doneCallBack){
            var xhttp2 = new XMLHttpRequest();
            xhttp2.onreadystatechange = function(){
                console.log(this.readyState, this.status)
                if (this.readyState == 4 && this.status == 200) {
                    $scope.data = JSON.parse(this.responseText)
                    
                     $scope.doneCallBack($scope.data)
              }

             } ;

             xhttp2.open("GET",url,true)
             xhttp2.send();
             
             
            } 

        
         $scope.FetchModel("user/list", $scope.doneCallBack)
         console.log('from user-listController: ' , $scope.main.userList)
    }]);


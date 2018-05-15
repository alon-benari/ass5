'use strict';

cs142App.controller('UserDetailController', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
    /*
     * Since the route is specified as '/users/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */
    $scope.main.show = false;
    var userId = $routeParams.userId;
    console.log('UserDetail of ', userId);
    
    console.log($scope.main.show)
    // console.log('window.cs142models.userModel($routeParams.userId)',
        // window.cs142models.userModel(userId));

    // $scope.main.usersModel =  window.cs142models.userModel(userId)
    $scope.main.uId = userId
    // console.log($scope.main)
    $scope.main.context = 'now scoping: '
    //
    // make a server call.
    $scope.doneCallBack = function(model){
      console.log('I am done. Now, to upate')
      $scope.$apply(function(){
          console.log('in doneCallBack')
          $scope.main.usersModel = model  // The update happens here.
          console.log($scope.main.usersModel);
          console.log('***Get User by id****')
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
       };
       xhttp2.open("GET",url,true)
       xhttp2.send();
       
       
      } 

  
   $scope.FetchModel("user/"+userId, $scope.doneCallBack)
//    console.log('from user-detailController: ' , $scope.main.usersModel)

    


    
  }]);

var app=angular.module("myapp",[]);

app.controller("mijnCtrl",function($scope,$http){
    
    $scope.ButtonClick = function(){
        
        $http.get("http://localhost:3000/aanwezigen").success(function(aanwezigen){
            $scope.aanwezigen = aanwezigen;
        });
    }
});

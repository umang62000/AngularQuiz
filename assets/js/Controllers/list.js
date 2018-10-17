app.controller("listCtrl",($scope,$rootScope,quizMetrics , dataService)=>{
     
     $scope.data=dataService.turtlesData;
      activeTurtle={};
 
     $scope.activateQuiz=()=>{
         $rootScope.quizActive=true;
     }
     
     $scope.changeActiveTurtle=(index)=>{
         $scope.activeTurtle=index;
     }

     
});
 

 
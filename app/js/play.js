app.controller("PlayCtrl", function($scope, $stateParams){

    var juicePH = $stateParams.juice.juicePH;
    var juiceLabels = $stateParams.juice.juiceLabels;

    console.log($stateParams);

    $scope.labels = [];
    $scope.series = ['pH'];
    $scope.data = [ [] ];
    $scope.increaseDisabled = false;

    $scope.increase = function(){
        $scope.data[0].push(juicePH.pop());
        $scope.labels.push(juiceLabels.pop());
        console.log(juicePH.length);
        if(juicePH.length === 0){
            $scope.increaseDisabled = true;
        }
    };

    $scope.data[0].push(juicePH.pop());
    $scope.labels.push(juiceLabels.pop());

});

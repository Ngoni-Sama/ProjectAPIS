app.controller("PlayCtrl", function($scope, $state, $stateParams, $mdDialog){

    if ($stateParams.juice == null) {
        $state.go("/");
    }

    var juicePH = $stateParams.juice.juicePH;
    var juiceLabels = $stateParams.juice.juiceLabels;
    var juiceEqPoint = $stateParams.juice.juiceEqPoint;

    console.log($stateParams);

    $scope.labels = [];
    $scope.series = [];
    $scope.data = [ [] ];
    $scope.increaseDisabled = false;
    $scope.bottle = "/app/img/chemistry-flash-hi.png";
    $scope.currentPH = juicePH[juicePH.length-1];

    $scope.increase = function(){
        var value = juicePH.pop();
        $scope.currentPH = value;
        $scope.data[0].push(value);
        $scope.labels.push(juiceLabels.pop());
        if(juicePH.length === 0){
            $scope.increaseDisabled = true;
        }
        if(value == juiceEqPoint){
            $scope.bottle = "/app/img/chemistry-flash-blue.png"
            showDialog();
        }
    };

    function showDialog() {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'app/html/eq_dialog.html',
            parent: angular.element(document.body),
            clickOutsideToClose:false,
        });
    };
    function DialogController($scope, $mdDialog) {
        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    }

    //showDialog();

    $scope.data[0].push(juicePH.pop());
    $scope.labels.push(juiceLabels.pop());

});

app.controller("PlayCtrl", function($scope, $state, $stateParams, $mdDialog, $rootScope){

    if ($stateParams.juice == null) {
        $state.go("/");
    }

    var juicePH = $stateParams.juice.juicePH;
    var juiceLabels = $stateParams.juice.juiceLabels;
    var juiceEqPoint = $stateParams.juice.juiceEqPoint;
    $scope.juice = $stateParams.juice;

    console.log($stateParams);

    $scope.labels = [];
    $scope.series = [];
    $scope.data = [ [] ];
    $scope.increaseDisabled = false;
    $scope.bottle = "/img/"+$scope.juice.bottle;
    $scope.currentPH = juicePH[juicePH.length-1];

    $scope.increase = function(){
        var value = juicePH.pop();
        $scope.currentPH = value;
        $scope.data[0].push(value);
        $scope.labels.push(juiceLabels.pop());
        if(value >= $scope.juice.final){
            $scope.juice.final = 1000000;
            showDialog("app/html/image_dialog.html","reaction_final.jpg");
        }
        if(juicePH.length === 0){
            $scope.increaseDisabled = true;
        }
        if(value == juiceEqPoint){
            $scope.bottle = "/img/chemistry-flash-blue.png"
            showDialog('app/html/eq_dialog.html');
        }
    };

    function showDialog(template,image) {
        var scope = $rootScope.$new();
        scope.img = image;
        $mdDialog.show({
            controller: DialogController,
            scope: scope,
            templateUrl: template,
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

    showDialog("app/html/start_dialog.html",null);

    $scope.data[0].push(juicePH.pop());
    $scope.labels.push(juiceLabels.pop());

});

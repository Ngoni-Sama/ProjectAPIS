app.controller("SelectJuiceCtrl", function($scope, $state){

    juices = {
        "naranjaArtificial": {
            name: "Naranja Artificial",
            image: "orange.png",
            juicePH: [13.18,13.16,13.15,13.14,13.13,13.12,13.11,13.10,13.09,13.08,13.06,13.05,13.03,13.02,13.01,12.99,12.98,12.96,12.95,12.93,12.91,12.88,12.86,12.83,12.79,12.77,12.73,12.70,12.67,12.62,12.58,12.56,12.52,12.48,12.45,12.42,12.39,12.36,12.32,12.27,12.23,12.18,12.14,12.09,12.03,11.97,11.92,11.85,11.66,11.63,11.46,11.31,11.05,10.61,10.17,9.37,7.86,7.32,6.05,5.69,5.23,5.00,4.54,4.26,3.97,3.85,3.47,3.28],
            juiceLabels: ["50","49","48","47","46","45","44","43","42","41","40","39","38","37","36","35","34","33","32","31","30","29","28","27","26","25","24","23","22","21","20","19","18","17.5","17","16.5","16","15.5","15","14.5","14","13.5","13","12.5","12","11.5","11","10.5","10","9.5","9","8.5","8","7.5","7","6.5","6","5.5","5","4.5","4","3.5","3","2.5","2","1.5","1","0.5"],
            juiceEqPoint: 9.37,
            citric: 0.1667,
            final: 11.68
        },
        "naranjaNatural": {
            name: "Naranja Natural",
            image: "orange.png",
            juicePH: [13.26,13.24,13.23,13.22,13.21,13.20,13.19,13.18,13.17,13.16,13.15,13.14,13.13,13.12,13.10,13.09,13.07,13.06,13.05,13.03,13.01,12.99,12.97,12.95,12.92,12.90,12.88,12.86,12.84,12.83,12.78,12.75,12.73,12.69,12.66,12.62,12.58,12.56,12.53,12.50,12.46,12.41,12.36,12.32,12.29,12.24,12.17,12.12,12.04,11.96,11.83,11.68,11.51,11.31,10.99,10.44,9.78,9.00,7.62,6.44,5.80,5.35,4.95,4.57,4.25,4.04,3.81,3.62],
            juiceLabels: ["50","49","48","47","46","45","44","43","42","41","40","39","38","37","36","35","34","33","32","31","30","29","28","27","26","25","24","23","22","21","20","19","18","17.5","17","16.5","16","15.5","15","14.5","14","13.5","13","12.5","12","11.5","11","10.5","10","9.5","9","8.5","8","7.5","7","6.5","6","5.5","5","4.5","4","3.5","3","2.5","2","1.5","1","0.5"],
            juiceEqPoint: 9.00,
            citric: 0.14,
            final: 11.63
        },
        "toronjaArtificial": {
            name: "Toronja Artificial",
            image: "grapefruit.png",
            juicePH: [12.56,12.53,12.49,12.44,12.38,12.34,12.29,12.23,12.16,12.06,11.96,11.87,11.76,11.68,11.57,11.48,11.31,11.16,10.93,10.67,10.34,10.08,9.21,7.43,5.94,5.29,4.59,3.77],
            juiceLabels: ["20","19","18","17","16","15","14","13","12","11","10","9","8","7.5","7","6.5","6","5.5","5","4.5","4","3.5","3","2.5","2","1.5","1","0.5"],
            juiceEqPoint: 9.21,
            citric: 0.0770,
            final: 11.31
        },
        "toronjaNatural": {
            name: "Toronja Natural",
            image: "grapefruit.png",
            juicePH: [13.16,13.14,13.13,13.12,13.11,13.10,13.09,13.08,13.06,13.05,13.03,13.02,13.01,12.99,12.98,12.96,12.94,12.92,12.90,12.88,12.85,12.83,12.80,12.77,12.74,12.70,12.67,12.62,12.57,12.53,12.48,12.44,12.39,12.33,12.30,12.26,12.22,12.16,12.12,12.06,12.00,11.92,11.83,11.72,11.66,11.53,11.35,11.18,10.92,10.44,9.86,9.12,8.39,7.48,6.08,5.55,5.09,4.70,4.38,4.14,3.90,3.64,3.42,3.20,2.99,2.78,2.57,2.41],
            juiceLabels: ["50","49","48","47","46","45","44","43","42","41","40","39","38","37","36","35","34","33","32","31","30","29","28","27","26","25","24","23","22","21","20","19","18","17.5","17","16.5","16","15.5","15","14.5","14","13.5","13","12.5","12","11.5","11","10.5","10","9.5","9","8.5","8","7.5","7","6.5","6","5.5","5","4.5","4","3.5","3","2.5","2","1.5","1","0.5"],
            juiceEqPoint: 7.48,
            citric: 0.1923,
            final: 11.66
        },
        "limonArtificial": {
            name: "Limón Artificial",
            image: "lemon.png",
            juicePH: [12.70,12.66,12.62,12.58,12.53,12.49,12.44,12.38,12.32,12.24,12.18,12.08,12.01,11.97,11.86,11.81,11.69,11.62,11.41,11.30,11.01,10.74,10.17,7.70,5.81,4.93,4.13,3.24],
            juiceLabels: ["20","19","18","17","16","15","14","13","12","11","10","9","8.5","8","7.5","7","6.5","6","5","4.5","4","3.5","3","2.5","2","1.5","1","0.5"],
            juiceEqPoint: 10.17,
            citric: 0.0770,
            final: 11.30
        },
        "limonNatural": {
            name: "Limón Natural",
            image: "lemon.png",
            juicePH: [12.57,12.54,12.51,12.48,12.45,12.42,12.38,12.34,12.30,12.14,12.19,12.14,12.11,12.04,11.93,11.83,11.68,11.46,11.19,10.87,9.68,9.03,8.65,8.05,7.45,6.84,6.58,6.39,6.27,6.15,6.06,5.98,5.90,5.83,5.76,5.70,5.64,5.57,5.52,5.46,5.40,5.49,5.30,5.38,5.19,5.26,5.08,5.18,4.99,5.05,4.87,4.96,4.77,4.83,4.66,4.75,4.57,4.64,4.46,4.52,4.36,4.44,4.26,4.33,4.16,4.22,4.08,4.12,3.97,4.00,3.87,3.90,3.77,3.81,3.68,3.72,4.28,3.63,3.49,3.51,3.38,3.43,3.30,3.35,3.21,3.25,3.09,3.12,3.00,3.06,2.91,2.92,3.26,2.84,2.73,2.75,2.65,2.64,2.56,2.53,2.46,2.45,2.37,2.35,2.29,2.16,2.19,2.17,2.09,2.08,1.99,1.98,1.89,1.89,1.81,1.80,1.72,1.70,1.62,1.64],
            juiceLabels: ["60","59.5","59","58.5","58","57.5","57","56.5","56","55.5","55","54.5","54","53.5","53","52.5","52","51.5","51","50.5","50","49.5","49","48.5","48","47.5","47","46.5","46","45.5","45","44.5","44","43.5","43","42.5","42","41.5","41","40.5","40","39.5","39","38.5","38","37.5","37","36.5","36","35.5","35","34.5","34","33.5","33","32.5","32","31.5","31","30.5","30","29.5","29","28.5","28","27.5","27","26.5","26","25.5","25","24.5","24","23.5","23","22.5","22","21.5","21","20.5","20","19.5","19","18.5","18","17.5","17","16.5","16","15.5","15","14.5","14","13.5","13","12.5","12","11.5","11","10.5","10","9.5","9","8.5","8","7.5","7","6.5","6","5.5","5","4.5","4","3.5","3","2.5","2","1.5","1","0.5"],
            juiceEqPoint: 10.87,
            citric: 1.30,
            final: 11.83
        }
    };

    $scope.selectJuice = function(juice){
        $scope.selectedJuice = juice;
    };

    $scope.goToPlay = function() {
        $state.go("play",{juice: juices[$scope.selectedJuice]});
    };
});

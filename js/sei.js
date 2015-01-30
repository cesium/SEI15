angular.module('sei-app',['angular-carousel'])
.controller('eventCtrl',['$scope','$rootScope',function($scope,$rootScope){
    /*$scope.eventSlides = [
        {file:'event/14-fev.html', day:'14 Fev', weekday:'Sábado'},
        {file:'event/15-fev.html', day:'15 Fev', weekday:'Domingo'},
        {file:'event/16-fev.html', day:'16 Fev', weekday:'Segunda'},
        {file:'event/17-fev.html', day:'17 Fev', weekday:'Terça'},
        {file:'event/18-fev.html', day:'18 Fev', weekday:'Quarta'},
        {file:'event/19-fev.html', day:'19 Fev', weekday:'Quinta'},
        {file:'event/20-fev.html', day:'20 Fev', weekday:'Sexta'},
        {file:'event/21-fev.html', day:'21 Fev', weekday:'Sabado'}
    ];*/
    $scope.eventSlides = [
        {file:'event/17-fev.html', day:'14 Fev', weekday:'Sábado'},
        {file:'event/17-fev.html', day:'15 Fev', weekday:'Domingo'},
        {file:'event/17-fev.html', day:'16 Fev', weekday:'Segunda'},
        {file:'event/17-fev.html', day:'17 Fev', weekday:'Terça'},
        {file:'event/17-fev.html', day:'18 Fev', weekday:'Quarta'},
        {file:'event/17-fev.html', day:'19 Fev', weekday:'Quinta'},
        {file:'event/17-fev.html', day:'20 Fev', weekday:'Sexta'},
        {file:'event/17-fev.html', day:'21 Fev', weekday:'Sabado'}
    ];
    $scope.carouselEvents = 0;

    $rootScope.eventGoto = function(page){
        $scope.carouselEvents = page;
    }
}])
.controller('speakerCtrl',['$scope',function($scope){
    $scope.speakerSlides = [
        // slide 01#
        [
            {pic:'speaker/01.jpg', name:'Rui Oliveira01', position:'Developer' , enterprise:'Minho', facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',
             about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'},
            {pic:'speaker/01.jpg', name:'Rui Oliveira', position:'Developer' , enterprise:'Minho', facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',
            about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {pic:'speaker/01.jpg', name:'Rui Oliveira', position:'Developer' , enterprise:'Minho', facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',
            about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        ],
        // slide 02#
        [
            {pic:'speaker/01.jpg', name:'Rui Oliveira02', position:'Developer' , enterprise:'Minho',facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',
             about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {pic:'speaker/01.jpg', name:'Rui Oliveira02', position:'Developer' , enterprise:'Minho', facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',
            about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {pic:'speaker/01.jpg', name:'Rui Oliveira', position:'Developer' , enterprise:'Minho', facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',
            about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        ],
        // slide 03#
        [
            {pic:'speaker/01.jpg', name:'Rui Oliveira03', position:'Developer' , enterprise:'Minho', about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {pic:'speaker/01.jpg', name:'Rui Oliveira03', position:'Developer' , enterprise:'Minho', about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {pic:'speaker/01.jpg', name:'Rui Oliveira03', position:'Developer' , enterprise:'Minho', about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        ]
    ];
    $scope.carouselEvents = 0;
}])
.controller('organizationCtrl',['$scope',function($scope){
    $scope.staffSlides = [
        // slide 01#
        [
            {pic:'speaker/01.jpg', name:'Rui Oliveira01', position:'Developer' , enterprise:'Minho', about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',},
            {pic:'speaker/01.jpg', name:'Rui Oliveira', position:'Developer' , enterprise:'Minho', about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',},
            {pic:'speaker/01.jpg', name:'Rui Oliveira', position:'Developer' , enterprise:'Minho', about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',},
            {pic:'speaker/01.jpg', name:'Rui Oliveira', position:'Developer' , enterprise:'Minho', about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',},
            {pic:'speaker/01.jpg', name:'Rui Oliveira02', position:'Developer' , enterprise:'Minho', about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',},
            {pic:'speaker/01.jpg', name:'Rui Oliveira02', position:'Developer' , enterprise:'Minho', about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',},
            {pic:'speaker/01.jpg', name:'Rui Oliveira', position:'Developer' , enterprise:'Minho', about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',},
            {pic:'speaker/01.jpg', name:'Rui Oliveira', position:'Developer' , enterprise:'Minho', about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',},
            {pic:'speaker/01.jpg', name:'Rui Oliveira03', position:'Developer' , enterprise:'Minho', about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',},
            {pic:'speaker/01.jpg', name:'Rui Oliveira03', position:'Developer' , enterprise:'Minho', about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',},
            {pic:'speaker/01.jpg', name:'Rui Oliveira03', position:'Developer' , enterprise:'Minho', about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',},
            {pic:'speaker/01.jpg', name:'Rui Oliveira', position:'Developer' , enterprise:'Minho', about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',},
        ],
        [
            {pic:'speaker/01.jpg', name:'Rui Oliveira01', position:'Developer' , enterprise:'Minho', about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',},
            {pic:'speaker/01.jpg', name:'Rui Oliveira', position:'Developer' , enterprise:'Minho', about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',},
            {pic:'speaker/01.jpg', name:'Rui Oliveira', position:'Developer' , enterprise:'Minho', about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',},
            {pic:'speaker/01.jpg', name:'Rui Oliveira', position:'Developer' , enterprise:'Minho', about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',},
            {pic:'speaker/01.jpg', name:'Rui Oliveira02', position:'Developer' , enterprise:'Minho', about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',},
            {pic:'speaker/01.jpg', name:'Rui Oliveira02', position:'Developer' , enterprise:'Minho', about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',},
            {pic:'speaker/01.jpg', name:'Rui Oliveira', position:'Developer' , enterprise:'Minho', about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',},
            {pic:'speaker/01.jpg', name:'Rui Oliveira', position:'Developer' , enterprise:'Minho', about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',},
            {pic:'speaker/01.jpg', name:'Rui Oliveira03', position:'Developer' , enterprise:'Minho', about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',},
            {pic:'speaker/01.jpg', name:'Rui Oliveira03', position:'Developer' , enterprise:'Minho', about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',},
            {pic:'speaker/01.jpg', name:'Rui Oliveira03', position:'Developer' , enterprise:'Minho', about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',},
            {pic:'speaker/01.jpg', name:'Rui Oliveira', position:'Developer' , enterprise:'Minho', about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', facebook:'https://www.facebook.com' , twitter:'https://twitter.com/', github:'https://github.com/cesium',},

        ]
    ];
    $scope.carouselEvents = 0;
}]);


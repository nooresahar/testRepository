var hci=angular.module('hci', ['ui.router','ngStorage']).config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('user', {
            url: '/',
            templateUrl: "templates/user.html",
            controller:'userController'

        })
        .state('admin', {
            templateUrl: "templates/admin.html",
            controller:'adminController'
        });
    $urlRouterProvider.otherwise("/");
});

hci.controller('editorController', function($scope, $sce){
    $scope.name='';
    $scope.userText = ""
    var text = "", start, end;
    $scope.getHighlight=function(){
        if (typeof window.getSelection != "undefined") {
            text = window.getSelection().toString();
            console.log(text);
        }
    };
    $scope.getLargeHeading=function(){
        var wrapAround = "<h1>"+text+"</h1>"
        $scope.userText = $sce.trustAsHtml($scope.userText+" "+wrapAround);
    };
    $scope.getSmallHeading=function(){
        var wrapAround = "<h3>"+text+"</h3>"
        $scope.userText = $sce.trustAsHtml($scope.userText+" "+wrapAround);
    };


});
hci.controller('userController', function ($scope, $sce, $localStorage, $rootScope) {
    $scope.userText="<h1>323242342</h1>";
    $rootScope.p=$localStorage;

    $scope.getHtml= function () {
        $scope.renderHtml= $sce.trustAsHtml($scope.userText);
    };
    $scope.getH1Tag= function () {
        $scope.userText+='<h1>  </h1>';
    };
    $scope.getH3Tag= function () {
        $scope.userText+='<h3>  </h3>';
    };
    $scope.getBullets= function () {
        $scope.userText+='<li>  </li>';
    };
    $scope.getParagraph= function () {
        $scope.userText+='<p>  </p>';
    };

});

hci.controller('adminController', function ($scope, $http, $state, $localStorage) {
    $scope.admin=false;
    $scope.$watch('pw', function(newValue, oldValue){
        if(newValue==='admin'){
            $scope.admin=true;
        }
    });
    $scope.setParameters=function(){
        $localStorage.headingSize=$scope.headingSize.value;
        $localStorage.headingColor=$scope.headingColor.value;
        $localStorage.headingWeight=$scope.headingWeight.value;
        $localStorage.headingFontStyle=$scope.headingFontStyle.value;
        $localStorage.headingFontFamily=$scope.headingFontFamily.value;
        $localStorage.headingAlign=$scope.headingAlign.value;


        $localStorage.paragraphSize=$scope.paragraphSize.value;
        $localStorage.paragraphColor=$scope.paragraphColor.value;
        $localStorage.paragraphWeight=$scope.paragraphWeight.value;
        $localStorage.paragraphFontStyle=$scope.paragraphFontStyle.value;
        $localStorage.paragraphFontFamily=$scope.paragraphFontFamily.value;
        $localStorage.paragraphAlign=$scope.paragraphAlign.value;

        $localStorage.subheadingSize=$scope.subheadingSize.value;
        $localStorage.subheadingColor=$scope.subheadingColor.value;
        $localStorage.subheadingWeight=$scope.subheadingWeight.value;
        $localStorage.subheadingFontStyle=$scope.subheadingFontStyle.value;
        $localStorage.subheadingFontFamily=$scope.subheadingFontFamily.value;
        $localStorage.subheadingAlign=$scope.subheadingAlign.value;

        $localStorage.bulletSize=$scope.bulletSize.value;
        $localStorage.bulletColor=$scope.bulletColor.value;
        $localStorage.bulletWeight=$scope.bulletWeight.value;
        $localStorage.bulletFontStyle=$scope.bulletFontStyle.value;
        $localStorage.bulletFontFamily=$scope.bulletFontFamily.value;
        $localStorage.bulletAlign=$scope.bulletAlign.value;

        $localStorage.lineHeight=$scope.line_height.value;

        $localStorage.flag=true;
        $state.go('user');
    };
    $scope.sizes=[
        {name: 14,value: '14px'},
        {name: 16,value: '16px'},
        {name: 18,value: '18px'},
        {name: 20,value: '20px'},
        {name: 22,value: '22px'},
        {name: 24,value: '24px'},
        {name: 26,value: '26px'},
        {name: 28,value: '28px'},
        {name: 30,value: '30px'}

    ];

    $scope.colors=[
        {name: "Black",value: 'black'},
        {name: "Red",value: 'red'},
        {name: "Yellow",value: 'yellow'},
        {name: "Blue",value: 'blue'},
        {name: "Green",value: 'green'},
        {name: "Purple",value: 'purple'}
    ];
    $scope.font_weights=[
        {name: "Bold",value: 'bold'},
        {name: "Normal",value: 'normal'}
    ];
    $scope.font_style=[
        {name: "Italic",value: 'italic'},
        {name: "Normal",value: 'normal'},
        {name: "Oblique",value: 'oblique'}

    ];

    $scope.font_family=[
        {name: "Georgia",value: 'Georgia'},
        {name: "Arial Black",value: 'Arial Black'},
        {name: "Helvetica",value: 'Helvetica'},
        {name: "Courier New",value: 'Courier New'},
        {name: "Lucida Sans Unicode",value: 'Lucida Sans Unicode'}
    ];
    $scope.line_height=[
        {name: "70%",value: '70%'},
        {name: "100%",value: '100%'},
        {name: "150%",value: '150%'},
        {name: "200%",value: '200%'},
        {name: "250%",value: '250%'}
    ];
    $scope.text_align=[
        {name: "Left",value: 'left'},
        {name: "Right",value: 'right'},
        {name: "center",value: 'center'}
    ];

    $scope.headingSize=$scope.sizes[8];
    $scope.subheadingSize=$scope.sizes[6];
    $scope.paragraphSize=$scope.sizes[3];
    $scope.bulletSize=$scope.sizes[3];

    $scope.headingColor=$scope.colors[1];
    $scope.subheadingColor=$scope.colors[3];
    $scope.paragraphColor=$scope.colors[4];
    $scope.bulletColor=$scope.colors[5];

    $scope.headingFontFamily=$scope.font_family[0];
    $scope.subheadingFontFamily=$scope.font_family[0];
    $scope.paragraphFontFamily=$scope.font_family[0];
    $scope.bulletFontFamily=$scope.font_family[0];

    $scope.headingWeight=$scope.font_weights[0];
    $scope.subheadingWeight=$scope.font_weights[0];
    $scope.paragraphWeight=$scope.font_weights[0];
    $scope.bulletWeight=$scope.font_weights[0];

    $scope.headingFontStyle=$scope.font_style[0];
    $scope.subheadingFontStyle=$scope.font_style[0];
    $scope.paragraphFontStyle=$scope.font_style[0];
    $scope.bulletFontStyle=$scope.font_style[0];

    $scope.headingAlign=$scope.text_align[2];
    $scope.subheadingAlign=$scope.text_align[2];
    $scope.paragraphAlign=$scope.text_align[2];
    $scope.bulletAlign=$scope.text_align[2];

    $scope.lineHeight=$scope.line_height[4];


});




// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])



.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })


      .state('app.social', {
          url: "/social",
          views: {
              'menuContent' :{
                  templateUrl: "templates/social.html"
              }
          }
      })


      .state('app.calculator', {
          url: "/calculator",
          views: {
              'menuContent' :{
                  templateUrl: "templates/calculator.html"
              }
          }
      })


      .state('app.healthy', {
          url: "/healthy",
          views: {
              'menuContent' :{
                  templateUrl: "templates/healthy.html"
              }
          }
      })





    .state('app.browse', {
      url: "/browse",
      views: {
        'menuContent' :{
          templateUrl: "templates/browse.html"
        }
      }
    })


    .state('app.single', {
      url: "/playlists/:playlistId",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlist.html",
          controller: 'PlaylistCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});

function computeBMI() {
    //Obtain user inputs
    var height = Number(document.getElementById("height").value);
    var heightunits = document.getElementById("heightunits").value;
    var weight = Number(document.getElementById("weight").value);
    var weightunits = document.getElementById("weightunits").value;


    //Convert all units to metric
    if (heightunits == "inches") height /= 39.3700787;
    if (weightunits == "lb") weight /= 2.20462;

    //Perform calculation
    var BMI = weight / Math.pow(height, 2);
    //Display result of calculation
    document.getElementById("output").innerHTML = Math.round(BMI * 100)/100;
    if (BMI < 18.5) document.getElementById("comment").innerHTML = "Underweight";
    if (BMI >= 18.5 && BMI <= 25) document.getElementById("comment").innerHTML = "Normal";
    if (BMI >= 25 && BMI <= 30) document.getElementById("comment").innerHTML = "Obese";
    if (BMI > 30) document.getElementById("comment").innerHTML = "Overweight";
    document.getElementById("answer").value = output;
}

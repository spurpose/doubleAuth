/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
} = React;

var Firebase = require('firebase');
var fb = new Firebase('doubleauth.firebaseio.com');

fb.onAuth(function(auth) {
  console.log("in onAuth with auth:", auth);
});

fb.authWithPassword({email: 'double@auth.co', password: 'hello'}, function(err, auth) {
  if(err) {
    console.log("authWithPassword error ->", err);
  }
  //console.log("authWithPassword ->", auth);
});

var DoubleAuth = require('./js/DoubleAuth');

AppRegistry.registerComponent('doubleAuth', () => DoubleAuth);

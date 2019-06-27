 require.config({
     // baseUrl: "/home/leson/source_code/FrontEnd/resources/script",
     paths: {
         "jquery": "../vendors/jquery/1.12.4/jquery.min",
         "underscore": "../vendors/underscore/1.8.3/underscore-min",
         "backbone": "../vendors/backbone/1.3.3/backbone-min",
         "validator": "../vendors/bootstrap-validator/validator",
         "handlebars": "../vendors/handlebars/4.0.10/handlebars",
         "text":"../vendors/require/text/text"
     },
     shim: {
         'underscore': {
             exports: '_'
         },
         'backbone': {
             deps: ['underscore', 'jquery'],
             exports: 'Backbone'
         }
     }
 });

 require(['backbone', './resources/script/router/TestRouter.js'], function(Backbone, TestRouter) {
     new TestRouter();
     Backbone.history.start();//listen all router here.

     $(document).ready(function() {
         $("#tip").html("hello require.js + backbone.js + jquery.js Demonstrate");
     });

 });
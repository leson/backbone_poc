 define(['backbone', 'jquery'], function(Backbone, $) {
     var appRouter = Backbone.Router.extend({
         routes: {
             "testGeneric": "generic",
             "testModel": "testModel",
             "testView": "testView"
         },
         generic: function() {
             console.log("test router feneric function be trigger.");
         },
         testModel: function() {
             var _self = this;
             require(['./resources/script/model/TestModel.js'], function(TestModel) {
                 // var tm = new TestModel();
                 TestModel.fetch({
                     // data:JSON.stringify(requestData);
                     type: "GET",
                     contentType: 'application/json',
                     dataType: 'json',
                     mimeType: 'application/json',
                     success: function(response) {
                         // this.renderDIV(tm);// Q:here will report renderDIV not defined; Why???
                         _self.renderDIV();
                     }
                 });
             });
         },
         testView: function() {
             console.log("test router testView function be trigger.");
             this.renderDIV();
         },

         renderDIV: function() {
             require(['./resources/script/view/TestView.js'], function(TestView) {
                 var tv = new TestView();
                 $("#formTemp").html(tv.render().el).promise().done(function() {
                     tv.sayHi();
                 });

             });
         }
     });

     return appRouter;
 });
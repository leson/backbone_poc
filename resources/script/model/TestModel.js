define(['backbone'], function(Backbone) {
    var TestModel = Backbone.Model.extend({

        initialize: function() {
            console.log("Model Constructor initial ......");
        },
        defaults: {
            name: "leson",
            sex: "male",
            desc: "user info"
        },
        url: function() {
            return "https://api.github.com/users/leson";
        }

        // url: "https://api.github.com/users/leson" // same as above 

    });
    return new TestModel;
});
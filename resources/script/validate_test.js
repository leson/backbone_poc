require.config({
    baseUrl: "/home/leson/workspace/FrontEnd/resources/vendors",
    paths: {
        "jQuery": [
            "https://cdn.bootcss.com/jquery/1.12.4/jquery",
            // "../vendors/jquery/1.12.4/jquery.min"
        ],
        "underscore": [
            // "../vendors/underscore/1.8.3/underscore-min",
            "https://cdn.bootcss.com/underscore.js/1.8.3/underscore-min"
        ],
        "backbone": [
            // "../vendors/backbone/1.3.3/backbone-min",
            "https://cdn.bootcss.com/backbone.js/1.3.3/backbone-min"
        ],
        "validator": [
            "../vendors/bootstrap-validator/dist/validator",
            // "https://cdn.bootcss.com/1000hz-bootstrap-validator/0.11.9/validator"
        ],
        "handlebars": [
            // "../vendors/handlebars/4.0.10/handlebars",
            "https://cdn.bootcss.com/handlebars.js/4.0.11/handlebars"
        ]
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jQuery'],
            exports: 'Backbone'
        },
        'validator': {
            deps: ['jQuery'],
            exports: 'validator'
        }
    }
});


require(["validator"], function(validator) {
    var validator_options = {
        delay: 200,
        custom: {
            fooTest: function($el) {
                var amount = $("#amount01").val();
                if ($el.val() * 1 > amount * 1) {
                    return true; // if return true, data-foo-error defined message will display.
                } else {
                    return false;
                }
            },
            singleSelect: function($el) {
                var $sel01 = $("#sel01");
                var $sel02 = $("#sel02");
                var id = $el.data("id");
                // if($el.val()!==""&&($sel01.val()||$sel02.val())){

                // }else{

                // }
            },
            equals: function($el) {
                var matchValue = $el.data("equals") // fetch from data-equals="xxx"
                if ($el.val() !== matchValue) {
                    return "Hey, that's not valid! It's gotta be " + matchValue
                }
            }
        }
    }

    $("#myForm").validator(validator_options);
    $("#myForm").validator("validate");
})
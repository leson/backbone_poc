require.config({
    baseUrl: "/home/leson/workspace/FrontEnd/resources/vendors",
    paths: {
        "jQuery": [
            "https://cdn.bootcss.com/jquery/1.12.4/jquery",
            "../vendors/jquery/1.12.4/jquery.min"
        ],
        "underscore": [
            "../vendors/underscore/1.8.3/underscore-min",
            "https://cdn.bootcss.com/underscore.js/1.8.3/underscore-min"
        ],
        "backbone": [
            "../vendors/backbone/1.3.3/backbone-min",
            "https://cdn.bootcss.com/backbone.js/1.3.3/backbone-min"
        ],
        "validator":[
            "../vendors/bootstrap-validator/dist/validator",
            "https://cdn.bootcss.com/1000hz-bootstrap-validator/0.11.9/validator"
        ],
        "handlebars":[
            "../vendors/handlebars/4.0.10/handlebars",
            "https://cdn.bootcss.com/handlebars.js/4.0.11/handlebars"
        ]
    },
    shim: {
        'underscore': {
        	exports:'_'
        },
        'backbone': {
            deps: ['underscore', 'jQuery'],
            exports: 'Backbone'
        },
        'validator':{
            deps:['jQuery'],
            exports:'Validator'
        }
    }
});

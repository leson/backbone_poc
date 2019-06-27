require.config({
    baseUrl: "/home/leson/source_code/FrontEnd/resources/script",
    paths: {
        "jQuery": "../vendors/jquery/1.12.4/jquery.min",
        "underscore": "../vendors/underscore/1.8.3/underscore-min",
        "backbone": "../vendors/backbone/1.3.3/backbone-min"
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jQuery'],
            exports: 'Backbone'
        }
    }
});

require(['router/testRouter'], function(TestRouter) {
    new TestRouter();
    Backbone.history.start();
});

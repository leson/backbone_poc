define(['backbone', 'jquery', 'handlebars', 'text!../../../../template/formTemplate.html', '../model/TestModel.js'],
    function(Backbone, $, handlebars, formTemplate, TestModel) {
        var TestView = Backbone.View.extend({
            dataJson: { "name": "zhang san", "sex": "male" },
            model: TestModel,
            template: handlebars.compile(formTemplate),
            initialize: function() {
                console.log("view constructor!");
                // this.model = new TestModel();
            },

            render: function() {
                var context = {
                    // data: this.dataJson
                    data:this.model.toJSON()
                };
                this.$el.html(this.template(context));
                return this;
            },

            events: {
                'click #evtTest': 'testEvt'
            },

            sayHi: function() {
                console.log("come from sayHi,a generate function");
                require(['./resources/script/utils/validateUtil.js'], function(validateUtil) {
                    validateUtil.testValidate();
                });
            },

            testEnv: function() {
                console.log("come from event trigger log");
            }
        });

        return TestView;
    })
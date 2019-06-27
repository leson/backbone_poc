define(['jquery','validator'],function($,validator){
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
    };

    var testValidate=function(){
    	$("#myForm").validator(this.validatorOptions);
    	$("#myForm").validator("validate");
    };

    return{
    	validatorOptions:validator_options,
    	testValidate:testValidate
    };
});
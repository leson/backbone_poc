require(["data/json", "../vendors/jquery/1.12.4/jquery.min"], function(json) {
    $("#tip").html("hello require.js;user info:" + JSON.stringify(json));
});

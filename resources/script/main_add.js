require(["utils/add", "../vendors/jquery/1.12.4/jquery.min"], function(add) {
    $("#tip").html("hello require.js,function test.");
    $("#add").bind("click", function() {
        var x = $("#x").val();
        var y = $("#y").val();
        var sum = add.Add(x, y);
        $("#tip").show().html("sum = " + sum);
        $("#z").val(sum);
    });
});

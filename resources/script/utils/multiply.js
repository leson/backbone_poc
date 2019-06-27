define(["./add"], function(add) {
    var multifly = function(x, y) {
        return add.Add(x,y)*x * y * 1
    };

    return { Multifly: multifly };
});

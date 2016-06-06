var x =(function () {
    var informativeVariableName = 7;
    var doSomething = function () {
        var descriptiveName = "Boo";
        if (descriptiveName.lenght < informativeVariableName) {
            console.log((function doSomethingElse(parameterName) {
                return parameterName + descriptiveName
            })());
        }
    }
    return doSomething;
})();

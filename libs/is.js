var is = {
    //需要检测的类型
    types: [
        "Number",
        "Boolean",
        "String",
        "Object",
        "Array",
        "Date",
        "RegEpx",
        "Window",
        "HTMLDocument"
    ]
}
is.types.forEach(function (type) {
    is[type] = function (type) {
        return function (obj) {
            return Object.prototype.toString.call(obj) == "[object " + type + "]";
        }
    }(type);
});

module.exports = is
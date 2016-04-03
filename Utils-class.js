// Utils class

function Utils() {};

Utils.assert = function(condition, message) {
    if (!condition) {
        throw message || "Assertion failed.";
    }
}
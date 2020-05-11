var StringOperations = /** @class */ (function () {
    function StringOperations(str) {
        this.str = str;
    }
    StringOperations.prototype.getOccurrencesOfA = function (char) {
        var cnt = 0;
        this.str.split('').forEach(function (c, i) {
            if (c === char) {
                console.log("found \"a\" at " + i);
                cnt++;
            }
        });
        console.log("number of occurrence of \"" + char + "\" : " + cnt);
    };
    StringOperations.prototype.getStatements = function () {
        var stmts = new Array();
        stmts = this.str.split('.');
        stmts = stmts.filter(function (s) { return s.length > 0; });
        return stmts;
    };
    StringOperations.prototype.getNumberOfStatements = function () {
        var stmts = this.getStatements();
        console.log("Number of statements : " + stmts.length);
    };
    StringOperations.prototype.toFirstCharUpperCase = function () {
        var newStr = '';
        var stmts = this.getStatements();
        stmts.forEach(function (s) {
            var firstChar = s.charAt(0).toUpperCase();
            newStr = newStr.concat(firstChar.concat(s.substr(1)).concat("."));
        });
        console.log("New string : " + newStr.trim());
    };
    return StringOperations;
}());
var strOpp = new StringOperations("it is a bright sunny day. good time to learn angular. hello world. time for some coding.");
;
strOpp.getOccurrencesOfA('a');
strOpp.getNumberOfStatements();
strOpp.toFirstCharUpperCase();

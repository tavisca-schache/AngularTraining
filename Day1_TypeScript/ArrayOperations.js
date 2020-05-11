var ArrayOperations = /** @class */ (function () {
    function ArrayOperations(arr) {
        this.arr = arr;
    }
    ArrayOperations.prototype.arrSort1 = function () {
        for (var i = 0; i < this.arr.length - 1; i++) {
            for (var j = i + 1; j < this.arr.length; j++) {
                if (this.arr[i].length > this.arr[j].length) {
                    var t = this.arr[i];
                    this.arr[i] = this.arr[j];
                    this.arr[j] = t;
                }
            }
        }
        return this.arr;
    };
    ArrayOperations.prototype.arrSort2 = function () {
        return this.arr.sort(function (m, n) {
            if (m.length > n.length) {
                return 1;
            }
            if (m.length < n.length) {
                return -1;
            }
            return 0;
        });
    };
    ArrayOperations.prototype.arrReverse1 = function () {
        for (var i = 0; i < this.arr.length / 2; i++) {
            var t = this.arr[i];
            this.arr[i] = this.arr[this.arr.length - 1 - i];
            this.arr[this.arr.length - 1 - i] = t;
        }
        return this.arr;
    };
    ArrayOperations.prototype.arrReverse2 = function () {
        return this.arr.reverse();
    };
    return ArrayOperations;
}());
var arrayOps = new ArrayOperations(['abc', 'abcd', 'ab', 'abcde', 'a']);
console.log('After sorting :');
console.log(arrayOps.arrSort1());
console.log(arrayOps.arrSort2());
console.log('After reversing :');
console.log(arrayOps.arrReverse1());
console.log(arrayOps.arrReverse2());

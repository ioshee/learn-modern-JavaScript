/* without rest operator */
/* const sum = (function() {
    return function sum(x, y, z, a) {
        const args = [ x, y, z, a ];
        return args.reduce((a, b) => a + b, 0);
    };
})(); */
/* with rest operator */
const sum = (function() {
    return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
    };
})();

console.log(sum(1, 2, 3, 4));
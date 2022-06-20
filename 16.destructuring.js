
const stats = {
    max: 56.78,
    standart_deviation: 4.34,
    median: 34.54, 
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function() {
    /* without using descr */
    /*  return function half(stats) {
        return (stats.max + stats.min) / 2.0;
        */
    /* use descr */
    return function half({ max , min }) {
        return ( max + min ) / 2.0 ;
    };
})();

console.log(stats); // max: 56.78, standart_deviation: 4.34, median: 34.54,  mode: 23.87, min: -0.75, average: 35.85
console.log(half(stats)); // 28.015

module.exports = function reverse (n) {
    let val = Math.abs(n).toString().split('').reverse().join('');
    return parseInt(val);
}

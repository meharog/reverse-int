module.exports = function reverse(n) {
    n = n.toString();
    n = n.split('').reverse().join('');
    return parseInt(n);
};
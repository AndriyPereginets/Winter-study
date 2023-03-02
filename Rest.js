const log = function(a, b, ...c) {
    console.log(a ,b, c);
};

log('basic', 'acacacac', 'yg', 32, 'rrr');

function calcOrDouble(num, basis = 3) {
    console.log(num*basis);
}

calcOrDouble(4);
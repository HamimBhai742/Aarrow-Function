function add(a, b) {
    return a + b;
}

console.log(add(45, 32));

const add2 = (x, y, z) => x - y * z

console.log(add2(4, 5, 4));


const add3 = function (p,q){
    return p+q
}
console.log(add3(94,64));

function add4(e,f,c,d=9){
    console.log(e,f,c,d);
    console.log(e+f+c+d);
}
add4(85,53,34,34)
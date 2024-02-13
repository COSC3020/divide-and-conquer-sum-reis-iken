function divideAndConquerSum(a) {
    if (a.length === 1) {
        return a[0]; }

    let n = a.length;
    let div = math.floor(n/3);
    let subA1 = a.slice(0, div);
    let subA2 = a.slice(div, 2 * div);
    let subA3 = a.slice(2 * div, 3 * div);

    let sum1 = divideAndConquerSum(subA1);
    let sum2 = divideAndConquerSum(subA2);
    let sum3 = divideAndConquerSum(subA2);
    
    return sum1 + sum2 + sum3;
}

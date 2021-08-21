const product = [
    'Hp-Elitbook G1 840 laptop',
    'Yellow laptop with lenovo',
    'Waltone 4fts good Laptop',
    'Samsung Glaxy Mobile j1',
    'lenovo 45Pixel Camera mobile',
    'Lg purple Black laptop',
    'Dell htc 24 camera Mobile',
    'Dell hardcore i29 200GB laptop'
]
const searchInput = 'mobile';
const output = [];
for (const products of product) {
    if (products.toLowerCase().indexOf(searchInput.toLowerCase()) != -1) {
        // output.push(products)
    }
}
// console.log(output);

//includes hocche sob jaiga theke khuje ber kory element k..!
for (const products of product) {
    if (products.toLowerCase().includes(searchInput.toLowerCase())) {
        // output.push(products);
    }
}
//----------Start With-------------//
for (const products of product) {
    if (products.toLowerCase().startsWith(searchInput.toLowerCase())) {
        // output.push(products);
        //[ 'Dell htc 24 camera Mobile', 'Dell hardcore i29 200GB laptop' ]
    }
}
for (const products of product) {
    if (products.toLowerCase().endsWith(searchInput.toLowerCase())) {
        output.push(products);

    }
}
console.log(output);
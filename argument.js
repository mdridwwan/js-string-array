function addNumbers() {
    //   console.log(arguments[]);
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }
    return result;
    // const result = num1 + num2;
    //  return result;
};
// unlimited peramiter
const sum = addNumbers(23, 13, 20, 12, 13, 12, 30, 20, 12, 20, 10, 100);
console.log(sum)

function getsFullName(name1, name2) {

    let result = '';
    for (const names of arguments) {
        result = result + names + ' ';
    }
    return result;
}
const name = getsFullName('tamim', 'shakib Khan', 'Riaz Khan', 'Ridwan Khan', 'Hasan Molla');
console.log(name);
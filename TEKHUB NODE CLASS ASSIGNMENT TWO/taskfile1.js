const name = 'Emmanuel';
const age = 26;
const school = 'Tekhub';

module.exports.name = name;
module.exports.age = age;
module.exports.school = school;

function add(a,b){
    return a + b;

}

let sum = add(20,50);
console.log('Sum:',sum);

module.exports.add
const number = [1, 2, 3, 4,5,6]

for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
}

function test(x,y,z){
    console.log(x);
    console.log(y);
    console.log(z);
    console.log(x+y*z)
}

test(1,2,3)

if (number.length >5){
    console.log("True");
}else{
    console.log("False");
}

console.log(`tablica z cyframi ma ${number.length} elementów.`);
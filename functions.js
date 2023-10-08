function hello(){
    console.log("htt");
}

hello();

function squre(num) {
    return num*num;
}

// const x = squre(4);
// console.log(x);
//and also this can write like as

console.log(squre(4));

const squre = function (x) {
    return x*x;
};
console.log(squre(5));

const squre =(x)=>{   
    return x*x;            // arrow function (es6)
};
console.log(squre(6));

const squre =(x)=>x*x;
console.log(squre(5));       // more short arrow function

const squre =x=>x*x;             // many more
console.log(squre(9));


const a=[1,2,3,4,5];

a.forEach(x=>console.log(x)); //12345 in down

const b = a.map(x=>x*2);
console.log(b); 


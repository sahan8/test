const G = 6.673e-11;// 6.638 * 10-11
const radius = 6.38e6;
const mass = 5.98e24;
let height = 40e4;

let acceleration = G*mass/(radius+height)**2;

console.log("Acceleration = "+acceleration.toFixed(3));

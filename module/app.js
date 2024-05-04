const arg = require("./rumus");
const cats = require("./cats");

// for (const cat of cats) {
//   console.log(cat.name, cat.color);
// }

cats.forEach((cat) => console.log(cat.name, cat.color));

console.log(arg.penjumlahan(10, 20));
console.log(arg.luasLingkaran(10));
console.log(arg.kelilingLingkaran(10));

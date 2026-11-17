const { log } = require("three")

let nik = "@zahridin_###"

let safenik = nik.replace("#", "").replaceAll("_", "-")

let id = safenik.padEnd(20, "x")

console.log("official nik" + nik);
console.log("id" + id);


/* lesson 1*/
var fs=require("fs");
var content=fs.readFileSync("data/ds_kumarajiva.tsv","utf8");
var lines=content.split(/\r?\n/);
console.log("file size",content.length);
console.log("line count",lines.length);
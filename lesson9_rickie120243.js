var lstfn="../derge_kangyur/derge_kangyur.lst";
var outfn="syllables.txt";



var fs=require("fs");
var lst=fs.readFileSync(lstfn,"utf8").split(/\r?\n/);
var mod=require("./lesson9mod_rickie120243");
//lst.length=3;
console.time("syllable");
console.timeEnd("syllable");
var syllables=mod.syllable_stat(lst,"../derge_kangyur/");
console.log("saved to",outfn);
fs.writeFileSync(outfn,syllables.join("\n"),"utf8");
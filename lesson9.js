/*
  製作 lst 
  dir/s/b *.xml > derge_kangyur.lst
*/
var fs=require("fs");
var lst=fs.readFileSync("../derge_kangyur/derge_kangyur.lst","utf8").split(/\r?\n/);
var mod=require("./lesson9mod");

var syllables={};
var total=0;

var dofile=function(fn) {
	console.log("processing",fn);
	var syls=mod.breakSyllable(fs.readFileSync("../derge_kangyur/"+fn,"utf8"));
	syls.map(function(syl){
		if (!syllables[syl]) syllables[syl]=0;
		syllables[syl]++;
		total++;
	});
}
console.time("syllable");
lst.map(dofile);
var out=[];
/*var total=0;
for(var syl in syllables){
	total+=syllables[syl];
}  */
for (var syl in syllables) {
	out.push([syl,syllables[syl],syllables[syl]/total]);
}

out.sort(function(a,b){return b[1]-a[1]});
console.timeEnd("syllable");
console.log("saved to","syllables.txt")
fs.writeFileSync("syllables.txt",out.join("\n"),"utf8");
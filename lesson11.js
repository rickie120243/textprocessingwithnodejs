var fs=require("fs");
var lines=fs.readFileSync("lesson11.txt","utf8").split(/\r?\n/);
var group=0;
lines=lines.map(function(line){
	if(line==="1") group++;
	return group+"-"+line;
}).join("\n");
console.log(lines);
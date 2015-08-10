var fs=require("fs");
var lines=fs.readFileSync("lesson11-1.txt","utf8").split(/\r?\n/);
var group=0;
lines=lines.map(function(line){
	return line.replace(/~(\d+)~/g,function(m,m1){
		if(m1==="1") group++;
		return "~"+group+"-"+m1+"~";
	});
}).join("\n");
console.log(lines);
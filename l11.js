var fs=require("fs");
var lst=fs.readFileSync("./lesson11q3-list.txt","utf8").split(/\r?\n/);

var tomain=function(fn){
	var text=fs.readFileSync("./"+fn,"utf8").replace(/\n~1~/g,function(s){
		return "~split~"+fn+"\n"+s;
	}).split("~split~");
	return text[0];
}

var toref=function(fn){
	var text=fs.readFileSync("./"+fn,"utf8").replace(/\n~1~/g,function(s){
		return "~split~"+fn+"\n"+s;
	}).split("~split~");
	return text[1];
}


var rejoinedmain=lst.map(tomain).join("\n");
var rejoinedref=lst.map(toref).join("\n");

var group=0;
var numreplace=function(text){
	return text.replace(/~(\d+)~/g,function(m,m1){
		if (m1==="1") group++;
		return "~"+group+"-"+m1+"~";
	});
};
console.log(rejoinedmain);
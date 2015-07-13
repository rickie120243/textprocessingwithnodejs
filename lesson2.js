var fs=require("fs");
var lst=fs.readFileSync("data/data.lst","utf8").split(/\r?\n/);
var showfileline=function(fn) {
	var content=fs.readFileSync("data/"+fn,"utf8")
	var lines=content.split(/\r?\n/);
	console.log(fn,lines.length,"average",content.length/lines.length);
}
lst.map(showfileline);
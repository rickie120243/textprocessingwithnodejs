/* load a set of files, filename is given by a list file*/
var fs=require("fs");
var lst=fs.readFileSync("data/data.lst","utf8").split(/\r?\n/);
var charperline=function(fn,idx) {
	var content=fs.readFileSync("data/"+fn,"utf8")
	var lines=content.split(/\r?\n/);
	return content.length/lines.length;
}

var sum=function(prev,now) {
	return prev+now;
}
var average=lst.map(charperline).reduce(sum ,0) /lst.length;
console.log(average)

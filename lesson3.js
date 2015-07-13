var fs=require("fs");
var lst=fs.readFileSync("data/data.lst","utf8").split(/\r?\n/);
var tojson=function(fn) {
	var content=fs.readFileSync("data/"+fn,"utf8")
	var lines=content.split(/\r?\n/);
	var out={};

	for (var i=0;i<lines.length;i++) {
		var L=lines[i].split("\t");
		var id=L[0],text=L[1];
		out[id]=text;
	}
	return out;
}


var combine=function(jsons) {
	var out={};
	for (var i=0;i<jsons.length;i++) {
		var json=jsons[i];
		for (var id in json) {
			if (!out[id]) out[id]=[];
			out[id].push(json[id]);
		}
	}
	return out;
}

var output=combine( lst.map(tojson));
fs.writeFileSync("combined.txt",JSON.stringify(output,""," "),"utf8");
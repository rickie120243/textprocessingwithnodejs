var fs=require("fs");
var lst=fs.readFileSync("data/data.lst","utf8").split(/\r?\n/);

var out={};
var combine=function(fn) {
	jsonfn="./out/"+fn+".json"; //must prefix with ./
	json=require(jsonfn);
	for (var id in json) {
		if (!out[id]) out[id]=[];
		out[id].push(json[id]);
	}
	return out;
}

var combined=lst.map(combine);
fs.writeFileSync("out/combined.json",JSON.stringify(combined,""," "),"utf8");
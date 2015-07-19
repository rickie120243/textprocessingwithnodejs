var fs=require("fs");
var lst=fs.readFileSync("data/data_chi.lst","utf8").split(/\r?\n/);
var puncstat=function(s){
	var punccount={};
	s.replace(/[。，!?]/g,function(m){
		if(!punccount[m]) punccount[m]=0;
			punccount[m]++;
	});
	return punccount;
}

var readfile=function(fn){
	var content=fs.readFileSync("data/"+fn,"utf8");
	console.log(fn.replace(/ds_/,"").replace(/.tsv/,"")+":");
	console.log(puncstat(content));
}
//var lst=fs.readFileSync("data/data_chi.lst","utf8").split(/\r?\n/);

lst.map(readfile);
//var a=fs.readFileSync("data/ds_kumarajiva.tsv","utf8");

//console.log(puncstat(a));
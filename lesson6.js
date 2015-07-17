/*
	統計標點符號的使用情況。
	輸入：金剛經四個漢譯本
	輸出：標點 , 使用次數
*/
var fs=require("fs");

var puncstat=function(str) {
	var out={};
	str.replace(/[！。、，：]/g,function(m){
		if (!out[m]) out[m]=0;
		out[m]++;
	});
	return out;
}
//var input="這。！。裡有三！！個，，句點";
var dofile=function(fn) {
	var content=fs.readFileSync("data/"+fn,"utf8");
	console.log(fn,puncstat(content));
}

var files=fs.readFileSync("data/data_chi.lst","utf8").split(/\r?\n/);
files.map(dofile);
//console.log(out);

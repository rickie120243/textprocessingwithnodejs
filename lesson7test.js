var fs=require("fs");
var input=["aa","bbb","c","dddd"];
//output=["dddd","bbb","aa","c"];
var sortbylength=function(m){
	return m.sort(function(a,b){
		return a.length-b.length;
	});
}
var cleantext=function(str){
	str=str.replace(/\d+\.\d+\t/g,"");
	str=str.replace(/\r?\n/g,"");
	return str;
}
var content=fs.readFileSync("data/ds_kumarajiva.tsv","utf8");
content=cleantext(content);
var sentences=content.split(/[，。、：；！？「」『』()（）]/);

console.log(sortbylength(sentences));
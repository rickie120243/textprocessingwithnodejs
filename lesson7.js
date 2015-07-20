/* lesson 7
常用句
*/
var fs=require("fs");
var commonphrase=function(str) {
	var out={};
	var phrases=str.split(/[　，！。、？『』：；「」（）]/);
	phrases.map(function(phrase){
		if (!phrase)return;
		if (!out[phrase]) out[phrase]=0;
		out[phrase]++;
	});

	var arr=[];
	for (var phrase in out)	{
		arr.push([phrase,out[phrase]]);
	}

	arr.sort(function(a,b){
		return a[1]-b[1];
	});
	console.log(arr)
	//return out;
}
var content=fs.readFileSync("data/ds_kumarajiva.tsv","utf8");
content=content.replace(/\d+\.\d+\t/g,"");
content=content.replace(/\n/g,"　");
var input="不如此，世尊！不有，世尊！法，若如來說。"
console.log(commonphrase(content));
var fs=require("fs");
//var input="爾時，世尊聞者大城搏為行已，作已食作已，後食搏墮過，器上絡衣收攝，兩足洗，坐具世尊施設，如是座中跏趺結，直身作，現前念近住。"
var commonpharse=function(str){
	var obj={};
	var phrases=str.split(/[，。、：；！？「」『』()（）]/);
//	phrases.replace()
	phrases.map(function(phrase){
		phrase.replace(/ /g,"");
		if(!phrase) return;
		if(!obj[phrase]) obj[phrase]=0;
		obj[phrase]++;
	});
	var arr=[];
	for(var phrase in obj){
		arr.push([obj[phrase],phrase]);
	//	console.log(arr);
	}
	arr.sort(function(a,b){
		return a[0]-b[0];
	});
	console.log(arr);
	//return obj;
}
var content=fs.readFileSync("data/ds_kumarajiva.tsv","utf8");
content=content.replace(/\d+\.\d+\t/g,"");
content=content.replace(/\r?\n/g,"");
console.log(commonpharse(content));
var fs=require("fs");
var phrases=fs.readFileSync("../../ksana2015/jiangkangyur-master/001/lj0001_001.xml","utf8");
var linebreak=/[\u0f0d\u0f0e\u0f0f\u0f0b]+/g;
phrases=phrases.replace(/\r?\n/g,"").replace(/<.+?>/g,"").replace(/[^\u0f00-\u0fff]./g,"")
		.replace(/ /g,"").replace(linebreak,function(m){
	return m+"~~~";
}).split("~~~");

var onSortOccurance=function(){
	var obj={};
	var arr=[];
	phrases.map(function(phrase){
		if(!phrase) return;
		if(!obj[phrase]) obj[phrase]=0;
		obj[phrase]++;
	});
	for(var phrase in obj){
		arr.push([obj[phrase],phrase])
	}
	arr.sort(function(a,b){
		return b[0]-a[0];
	})
	console.log(arr.join("\n"));
}
onSortOccurance(phrases);
// done 
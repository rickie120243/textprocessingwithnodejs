var fs=require("fs");
var idiomlist=fs.readFileSync("./words.csv","utf8").split(/\r?\n/);
var stackfind=function(idiom){
	var arr=[];
	for(var i=0;i<idiom.length;i++){
		if(idiom[i].match(/(.)\1(.)\2/)) arr.push(idiom[i]); 
	}
	return arr; 
}

var stackfind2=function(arr){
	return arr.filter(function(item){
		return item.match(/(.)\1(.)\2/);
	});
}
console.log(stackfind2(idiomlist));
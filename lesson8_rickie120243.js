/*藏文分句*/
  /*
     清 tag 及換行
			Tibetan Unicode
  */
/*
  製作 lst 
  dir/s/b *.xml > derge_kangyur.lst
*/

var fs=require("fs");

var content=fs.readFileSync("../derge_kangyur/076/d352_001.xml","utf8");
var linebreak=/[\u0f0d\u0f0e\u0f0f ]+/g;
var syllable=/[\u0f0b\u0f0c]+/g;

var onelinepuretext=function(content) {
	return content.replace(/<.+?>/g,"").replace(/\r?\n/g,"");
}
var destructive_split=function(str){
	return str.split(linebreak);
}

var nondestructive_split=function(str){ //非破壞性split
	return str.replace(linebreak,function(m){
		return m+"~~";
	}).split("~~");
}

var tosyllable=function(str) {
	return str.replace(linebreak,"\u0f0b").split(syllable);
}

var oneline=onelinepuretext(content);

var sentences1=nondestructive_split(oneline);
var sentences2=destructive_split(oneline);
var syllables=tosyllable(oneline);

var addlength=function(line){
	return [line.length,line];
}

var bylength=function(a,b){
	return a.length-b.length;
}
//console.log(countlength(sortbylength(sentences1)).join("\n"));
var out=sentences1.sort(bylength).map(addlength);
console.log(out.join("\n"));
//console.log(sentences1.length);
//console.log(sentences2.length);
//console.log(syllables);
//practice , sort by sentence length
//find unique syllable and frequency
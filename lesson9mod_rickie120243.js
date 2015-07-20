var linebreak=/[\u0f0d\u0f0e ]+/g;
var syllable=/[\u0f0b\u0f0e]+/g;

var onelinepuretext=function(content) {
	return content.replace(/<.+?>/g,"").replace(/\r?\n/g,"");
}

var nondestructive_split=function(str){
	return str.replace(linebreak,function(m){
		return m+"~~";
	}).split("~~");
}

var tosyllable=function(str) {
	return str.replace(linebreak,"\u0f0b").split(syllable);
}

var breakLine=function(content) {
	return nondestructive_split(onelinepuretext(content));
}

var breakSyllable=function(content) {
	return tosyllable(onelinepuretext(content));
}

var syllable_stat=function(lst,prefix) {
	var fs=require("fs");
	var syllables={};
	var total=0;

	var dofile=function(fn) {
		console.log("processing",fn);
		var syls=breakSyllable(fs.readFileSync(prefix+fn,"utf8"));
		syls.map(function(syl){
			if (!syllables[syl]) syllables[syl]=0;
			syllables[syl]++;
			total++;
		});
	} 
	lst.map(dofile);
	var out=[];
	for (var syl in syllables) {
		out.push([syl,syllables[syl],syllables[syl]/total]);
	}
	return out.sort(function(a,b){return b[1]-a[1]});
}

module.exports={breakLine:breakLine,breakSyllable:breakSyllable,
				syllable_stat:syllable_stat};
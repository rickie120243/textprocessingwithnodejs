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

module.exports={breakLine:breakLine,breakSyllable:breakSyllable};
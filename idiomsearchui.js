var regexmatch=function(){
	var regex=document.getElementById("typeinput").value;
	return words.filter(function(item){
		return item.match(regex);
	});
}
var google="<a target=_new href='https://www.google.com.tw/search?q=";
var render=function(searchresult,tf){
	var out=searchresult.map(function(item,idx){
		var colored=item.replace(tf,highlight);
		return (idx+1)+"."+google+item+"'>"+colored+"</a><br/>";
	});
	return out;
}
var highlight=function(m){
	return "<font color='red'>"+m+"</font>";
}
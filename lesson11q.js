var randomtext=function() {
	var count=Math.round(Math.random()*10)+2;
	var out="";
	for (var i=0;i<count;i++) {
		var code=Math.round(Math.random()*20000);
		out+=String.fromCharCode(code+0x4e00);
	}
	return out;
}
for (var i=1;i<10;i++) {
	var count=Math.round(Math.random()*100)+10;
	for (var j=1;j<count;j++) {
		console.log(randomtext()+"~"+j+"~"+randomtext());
	}
}
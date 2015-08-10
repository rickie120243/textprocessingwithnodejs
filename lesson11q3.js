var fs=require("fs");
var list=fs.readFileSync("./lesson11q3-list.txt","utf8").split(/\r?\n/);
var groupnumup=0;
var groupnumdown=0;
var numreplace=function(text){
	return text.replace(/~(\d+)~/g,function(m,m1){
		if(m1==="1") groupnumdown++;
		return "~"+groupnumdown+"-"+m1+"~";
	}); 
}

/*var group_down=function(lines){
	lines=lines.split(/\r?\n/).map(function(line){
		return numreplace(line);
	}).join("\n");
	console.log(lines);
} */
var group_up=function(lines){
	lines=lines.replace(/\r?\n/g,"");
	lines=numreplace(lines);
	console.log(lines); 
}

var readFile=function(fn){
	var content=fs.readFileSync("./"+fn,"utf8").split(/\r?\n/);
	var arr_up=[];
	var arr_down=[];
	content.map(function(line){
		if(line.match(/^~/g)){
			arr_down.push(line);
		}else{
			arr_up.push(line);
		}
	});
//	arr_down.map(group_down);	
	arr_up.map(group_up);
}
list.map(readFile);
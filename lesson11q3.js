var fs=require("fs");
var list=fs.readFileSync("./lesson11q3-list.txt","utf8").split(/\r?\n/);
var out_up=[],out_down=[];
var onSort=function(line,num){
	return line.replace(/~(\d+)~/g,function(m,m1){
		if(m1==="1") num++;
		return "~"+num+"-"+m1+"~";
	});
}

var groupnum=[0,0];
var readFile=function(fn){
	var content=fs.readFileSync("./"+fn,"utf8").split(/\r?\n/);
	var arr_up=[],arr_down=[];
	content.map(function(line){
		if(line.match(/^~/g)){
			arr_down.push(line);
		}else{
			arr_up.push(line);
		}
	});
	out_up.push(onSort(arr_up.join("\n"),groupnum[0]++));
	out_down.push(onSort(arr_down.join("\n"),groupnum[1]++));	
}
list.map(readFile);
fs.writeFileSync("up.txt",out_up.join("\n"),"utf8");
fs.writeFileSync("down.txt",out_down.join("\n"),"utf8");
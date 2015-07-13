
var combine=function(jsons) {
	var out={};
	for (var i=0;i<jsons.length;i++) {
		var json=jsons[i];
		for (var id in json) {
			if (!out[id]) out[id]=[];
			out[id].push(json[id]);
		}
	}
	return out;
}
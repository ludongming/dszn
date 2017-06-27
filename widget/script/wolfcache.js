function readCache(filename) {
	var file = "fs://" + filename;
	//同步返回结果：
	return api.readFile({
		sync : true,
		path : 'fs://' + file
	});

}

function writeCache(filename, content) {
	var file = "fs://" + filename;
	api.writeFile({
		path : 'fs://' + file,
		data : content
	}, function(ret, err) {
		if (ret.status) {
			//成功
		} else {

		}
	});
}

function cleanDIYCache(filename) {

	writeCache(filename, "");
}
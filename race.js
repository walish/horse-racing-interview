var Race = function () {

};

Race.prototype.start = function (horses) {
	return new Promise((resolve,reject) => {
		
		$.each(horses, function(key, value){
			$.getJSON(value.url, function(data) {
				resolve(Object.assign({},value, data));
			});
		});
	});
};

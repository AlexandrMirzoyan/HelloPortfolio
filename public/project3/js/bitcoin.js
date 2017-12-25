$.getJSON("data/bitcoin.11-17.json", function(allJSON){
	console.log(allJSON)
	xDateArray = ["x"], lowArray = ["low"], highArray = ["high"], xVolume = ["Volume (Currency)"];
	
	// TODO

	for (var i = 0; i < allJSON.dataset.data.length; i+=7) {
		if(allJSON.dataset.data[i] >= "2015-12-31"){
		xDateArray.push(allJSON.dataset.data[i][0]);
		highArray.push(allJSON.dataset.data[i][2]);
		lowArray.push(allJSON.dataset.data[i][1]);
		xVolume.push(allJSON.dataset.data[i][6]);
		}
	}

	// populate xDateArray, lowArray, highArray

	for(i = 0; i < 10; ++i)

	var chart = c3.generate({
		bindto: "#bitcoin-chart",
		data: {
			x: 'x',
			xFormat: '%Y-%m-%d',
			columns: [
				xDateArray,
				highArray,
				lowArray,
				xVolume
			]
		},
		axis: {
			x: {
				type: 'timeseries',
				tick: {
					format: '%Y-%m-%d'
				}
			}
		}
	});
});
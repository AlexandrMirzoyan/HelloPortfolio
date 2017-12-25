$.getJSON("data/populations.json", function(jsonData){
	var colData = [];
	age = "age", value = "value";

  // TODO
  for (var i = 0; i < jsonData.USA.length; i++){
  	colData.push([jsonData.USA[i].age, jsonData.USA[i].value]);
  }
  // populate colData

	chart = c3.generate({
		bindto: "#population-chart",
		size: {
			height: 450
		},	
		data: {
			columns: colData,
			type : 'pie'
		}
	});	
});

angular.module('angularChart', ["chart.js"]).controller('mainController', ['$scope', function($scope) {
	$scope.options = {
	       title: { //Chart title
		    display: true,
		    text: 'Bar Chart',
		    fontSize : 15
		},
		responsive: true,
		legend: { //Chart series 
			display : true,
			position: 'bottom',
		},
		tooltips: { //Disabled tooltips
		enabled : false,
		},
		scales: {
			yAxes:[{ //y axis label
				scaleLabel: {
				display: true,
				labelString: 'Total Count' }					  
			}]
		},
		animation: {
			onComplete: function(animation) { //callback on animation complete
				var ctx = this.chart.ctx;
				ctx.font = "bold";
				ctx.fillStyle = "#000000"
				ctx.textAlign = "center";
				ctx.textBaseline = "bottom";
				this.data.datasets.forEach(function (dataset) { //looping through chart dataset
					for (var i = 0; i < dataset.data.length; i++) {
						var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model;								
						ctx.fillText(dataset.data[i], model.x, model.y - 5); //setting new text based on chart height
					}
			});				
		}
		},
	};
	$scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
	$scope.colors =  [{backgroundColor :'#1b29b7',	borderColor: ' #090d3a '}]; //chart bar color and border colorset
	$scope.series = ['Series A'];
	$scope.data = [[65, 59, 80, 81, 56, 55, 40] ];
}]);

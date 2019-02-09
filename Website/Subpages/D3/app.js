//Set up pixel positioning
var margin = {top: 150, right: 150, bottom: 150, left: 150};
var width = 1400 - margin.left - margin.right;
var height = 700 - margin.top - margin.bottom;

//Configure svg wrapper, group and attributes using D3
var svg = d3.select("body").append("svg")
	.attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
	.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//Pull data from csv using D3
d3.csv("marioData.csv", function(error, data){

//Get column and row values
	var elements = Object.keys(data[0])
		.filter(function(d){
      return (d != "country");
		});
	var selection = elements[0];

//Set up X and Y axis variables
	var y = d3.scale.linear()
			.domain([0, d3.max(data, function(d){
				return +d[selection];
			})])
			.range([height, 0]);

	var x = d3.scale.ordinal()
			.domain(data.map(function(d){ return d.country;}))
			.rangeBands([0, width]);

//Create scales
	var xAxis = d3.svg.axis()
		.scale(x)
	    .orient("bottom");

	var yAxis = d3.svg.axis()
		.scale(y)
	    .orient("left");

//Set up how SVG performs
	svg.append("g")
    	.attr("class", "x axis")
    	.attr("transform", "translate(0," + height + ")")
    	.call(xAxis)
    	.selectAll("text")
    	.style("font-size", "15px")
      	.style("text-anchor", "end")
      	.attr("dx", "-.8em")
      	.attr("dy", "-.55em")
      	.attr("transform", "rotate(-90)" );

 	svg.append("g")
    	.attr("class", "y axis")
    	.call(yAxis);

	svg.selectAll("rectangle")
		.data(data)
		.enter()
		.append("rect")
		.attr("class","rectangle")
		.attr("width", width/data.length)
		.attr("height", function(d){
			return height - y(+d[selection]);
		})
		.attr("x", function(d, i){
			return (width / data.length) * i ;
		})
		.attr("y", function(d){
			return y(+d[selection]);
		})
		.append("title")
		.text(function(d){
			return d.country + " : " + d[selection];
		});
//Drop down
	var selector = d3.select("#drop")
		.append("select")
		.attr("id","dropdown")
		.on("change", function(d){
				selection = document.getElementById("dropdown");

				y.domain([0, d3.max(data, function(d){
			return +d[selection.value];})]);

				yAxis.scale(y);

				d3.selectAll(".rectangle")
						.transition()
						.attr("height", function(d){
				return height - y(+d[selection.value]);
			})
			.attr("x", function(d, i){
				return (width / data.length) * i ;
			})
			.attr("y", function(d){
				return y(+d[selection.value]);
			})
						.ease("linear")
						.select("title")
						.text(function(d){
							return d.country + " : " + d[selection.value];
						});
		
					d3.selectAll("g.y.axis")
						.transition()
						.call(yAxis);
			});

    selector.selectAll("option")
      .data(elements)
      .enter().append("option")
      .attr("value", function(d){
        return d;
      })
      .text(function(d){
        return d;
      })
});
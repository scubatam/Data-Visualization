// Defines SVG area.
var svgWidth = 960;
var svgHeight = 660;

// Defines chart's margins.
var chartMargin = {
  top: 50,
  right: 50,
  bottom: 50,
  left: 100
};

// Defines dimensions of chart area.
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Selects body & appends SVG area to it, and sets the dimensions.
var svg = d3
  .select("body")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Appends a group to the SVG area and shift ('translate') it to the right
// and down to adhere to the margins set in the "chartMargin" object.
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// Loads data from csv & logs an error if one exists.
d3.csv("marioData.csv", function(error, marioData) {
  if (error) return console.warn(error);

  // Print the marioData into the console.
  console.log(marioData);

  // Cast the column value to a number for each piece of marioData.
  marioData.forEach(function(data) {
    data.medals = +data.medals;
  });

  // space between each bar & 10x scale on rect heighth.
  var barSpacing = 5;
  var scaleY = 10;

  // Variable so that the bar chart spans the entire chartWidth.
  var barWidth = (chartWidth - (barSpacing * (marioData.length - 1))) / marioData.length;

  // Code to build the bar chart using the marioData.
  chartGroup.selectAll(".bar")
    .data(marioData)
    .enter()
    .append("rect")
    .classed("bar", true)
    .attr("width", d => barWidth)
    .attr("height", d => d.medals * scaleY)
    .attr("x", (d, i) => i * (barWidth + barSpacing))
    .attr("y", d => chartHeight - d.medals * scaleY);
});

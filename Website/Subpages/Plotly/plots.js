// Create the Pie Chart
var trace1 = {
  labels: ["Super Mario Bros.", "Pokemon", "Grand Theft Auto"],
  values: [572, 304, 280],
  type: 'pie'
};

var data = [trace1];

var layout = {
  
};

Plotly.newPlot("plot", data, layout);
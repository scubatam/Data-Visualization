anychart.onDocumentReady(function() {
    // create map
    map = anychart.map();

    // create data set
    var dataSet = anychart.data.set([
		{'id': 'AR', 'value': 4269},
		{'id': 'AU', 'value': 211581},
		{'id': 'AT', 'value': 90010},
		{'id': 'BB', 'value': 19},
        {'id': 'BE', 'value': 127040},
        {'id': 'BM', 'value': 90},
        {'id': 'BR', 'value': 37102},
        {'id': 'CA', 'value': 758253},
        {'id': 'CL', 'value': 13029},
        {'id': 'CO', 'value': 309},
        {'id': 'CR', 'value': 1702},
        {'id': 'CZ', 'value': 293},
        {'id': 'DK', 'value': 25963},
        {'id': 'EC', 'value': 137},
        {'id': 'EE', 'value': 123},
        {'id': 'FI', 'value': 81165},
        {'id': 'FR', 'value': 1204187},
        {'id': 'DE', 'value': 1339254},
        {'id': 'GR', 'value': 2238},
        {'id': 'GT', 'value': 1619},
        {'id': 'HN', 'value': 23},
        {'id': 'HU', 'value': 23},
        {'id': 'IE', 'value': 22516},
        {'id': 'IT', 'value': 231962},
        {'id': 'JP', 'value': 12693684},
        {'id': 'LU', 'value': 13195},
        {'id': 'MT', 'value': 85},
        {'id': 'MX', 'value': 96676},
        {'id': 'NL', 'value': 217265},
        {'id': 'NZ', 'value': 8552},
        {'id': 'NO', 'value': 76361},
        {'id': 'PA', 'value': 332},
        {'id': 'PE', 'value': 6176},
        {'id': 'PL', 'value': 8295},
        {'id': 'PT', 'value': 22024},
        {'id': 'RO', 'value': 4},
        {'id': 'SI', 'value': 904},
        {'id': 'ZA', 'value': 264},
        {'id': 'ES', 'value': 621522},
        {'id': 'SE', 'value': 93778},
        {'id': 'CH', 'value': 258693},
        {'id': 'GB', 'value': 1324156},
        {'id': 'US', 'value': 6328386},
        {'id': 'UY', 'value': 62},
        {'id': 'TT', 'value': 69},
    ]);

    // create choropleth series
    series = map.choropleth(dataSet);

    // set geoIdField to 'id', this field contains in geo data meta properties
    series.geoIdField('id');

    // set map color settings
    series.colorScale(anychart.scales.linearColor('#deebf7', '#3182bd'));
    series.hovered().fill('#addd8e');

    // set geo data, you can find this map in our geo maps collection
    // https://cdn.anychart.com/#maps-collection
    map.geoData(anychart.maps['world']);

    //set map container id (div)
    map.container('container');

    //initiate map drawing
    map.draw();
});
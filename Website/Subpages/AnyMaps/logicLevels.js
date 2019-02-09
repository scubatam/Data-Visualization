anychart.onDocumentReady(function() {
    // create map
    map = anychart.map();

    // create data set
    var dataSet = anychart.data.set([
		{'id': 'AR', 'value': 36},
		{'id': 'AU', 'value': 4610},
		{'id': 'AT', 'value': 653},
		{'id': 'BB', 'value': 1},
        {'id': 'BE', 'value': 594},
        {'id': 'BM', 'value': 3},
        {'id': 'BR', 'value': 594},
        {'id': 'CA', 'value': 4478},
        {'id': 'CL', 'value': 140},
        {'id': 'CO', 'value': 9},
        {'id': 'CR', 'value': 19},
        {'id': 'CZ', 'value': 4},
        {'id': 'DK', 'value': 201},
        {'id': 'EC', 'value': 4},
        {'id': 'EE', 'value': 2},
        {'id': 'FI', 'value': 847},
        {'id': 'FR', 'value': 3798},
        {'id': 'DE', 'value': 4713},
        {'id': 'GR', 'value': 31},
        {'id': 'GT', 'value': 28},
        {'id': 'HN', 'value': 1},
        {'id': 'HU', 'value': 1},
        {'id': 'IE', 'value': 304},
        {'id': 'IT', 'value': 855},
        {'id': 'JP', 'value': 23993},
        {'id': 'LU', 'value': 35},
        {'id': 'MT', 'value': 1},
        {'id': 'MX', 'value': 814},
        {'id': 'NL', 'value': 1515},
        {'id': 'NZ', 'value': 199},
        {'id': 'NO', 'value': 330},
        {'id': 'PA', 'value': 6},
        {'id': 'PE', 'value': 84},
        {'id': 'PL', 'value': 108},
        {'id': 'PT', 'value': 138},
        {'id': 'RO', 'value': 1},
        {'id': 'SI', 'value': 21},
        {'id': 'ZA', 'value': 25},
        {'id': 'ES', 'value': 1775},
        {'id': 'SE', 'value': 1281},
        {'id': 'CH', 'value': 731},
        {'id': 'GB', 'value': 3584},
        {'id': 'US', 'value': 23603},
        {'id': 'UY', 'value': 1},
        {'id': 'TT', 'value': 3},
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
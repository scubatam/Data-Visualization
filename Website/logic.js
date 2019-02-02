anychart.onDocumentReady(function() {
    // create map
    map = anychart.map();

    // create data set
    var dataSet = anychart.data.set([
		{'id': 'AR', 'value': 248},
		{'id': 'AU', 'value': 24662},
		{'id': 'AT', 'value': 5064},
		{'id': 'BB', 'value': 4},
        {'id': 'BE', 'value': 7111},
        {'id': 'BM', 'value': 6},
        {'id': 'BR', 'value': 4508},
        {'id': 'CA', 'value': 36224},
        {'id': 'CL', 'value': 991},
        {'id': 'CO', 'value': 21},
        {'id': 'CR', 'value': 171},
        {'id': 'CZ', 'value': 11},
        {'id': 'DK', 'value': 1778},
        {'id': 'EC', 'value': 12},
        {'id': 'EE', 'value': 15},
        {'id': 'FI', 'value': 6428},
        {'id': 'FR', 'value': 36292},
        {'id': 'DE', 'value': 41890},
        {'id': 'GR', 'value': 189},
        {'id': 'GT', 'value': 169},
        {'id': 'HN', 'value': 3},
        {'id': 'HU', 'value': 2},
        {'id': 'IE', 'value': 2265},
        {'id': 'IT', 'value': 6597},
        {'id': 'JP', 'value': 338270},
        {'id': 'LU', 'value': 345},
        {'id': 'MT', 'value': 4},
        {'id': 'MX', 'value': 5734},
        {'id': 'NL', 'value': 12115},
        {'id': 'NZ', 'value': 985},
        {'id': 'NO', 'value': 2248},
        {'id': 'PA', 'value': 36},
        {'id': 'PE', 'value': 712},
        {'id': 'PL', 'value': 761},
        {'id': 'PT', 'value': 1166},
        {'id': 'RO', 'value': 2},
        {'id': 'SI', 'value': 147},
        {'id': 'ZA', 'value': 39},
        {'id': 'ES', 'value': 16747},
        {'id': 'SE', 'value': 8875},
        {'id': 'CH', 'value': 8214},
        {'id': 'GB', 'value': 36778},
        {'id': 'US', 'value': 203422},
        {'id': 'UY', 'value': 3},
        {'id': 'TT', 'value': 10},
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
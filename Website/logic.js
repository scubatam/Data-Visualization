anychart.onDocumentReady(function() {
    // create map
    map = anychart.map();

    // create data set
    var dataSet = anychart.data.set([
		{'id': 'AR', 'value': 11},
		{'id': 'AU', 'value': 11},
		{'id': 'AT', 'value': 11},
		{'id': 'BB', 'value': 11},
        {'id': 'BE', 'value': 11},
        {'id': 'BR', 'value': 11},
        {'id': 'CA', 'value': 11},
        {'id': 'CL', 'value': 11},
        {'id': 'CO', 'value': 11},
        {'id': 'CR', 'value': 11},
        {'id': 'CZ', 'value': 11},
        {'id': 'DK', 'value': 11},
        {'id': 'EC', 'value': 11},
        {'id': 'EE', 'value': 11},
        {'id': 'FI', 'value': 11},
        {'id': 'FR', 'value': 11},
        {'id': 'DE', 'value': 11},
        {'id': 'GR', 'value': 11},
        {'id': 'GT', 'value': 11},
        {'id': 'HN', 'value': 11},
        {'id': 'HU', 'value': 11},
        {'id': 'IE', 'value': 11},
        {'id': 'IT', 'value': 11},
        {'id': 'JP', 'value': 11},
        {'id': 'LU', 'value': 11},
        {'id': 'MT', 'value': 11},
        {'id': 'MX', 'value': 11},
        {'id': 'NL', 'value': 11},
        {'id': 'NZ', 'value': 11},
        {'id': 'NO', 'value': 11},
        {'id': 'PA', 'value': 11},
        {'id': 'PE', 'value': 11},
        {'id': 'PL', 'value': 11},
        {'id': 'PT', 'value': 11},
        {'id': 'RO', 'value': 11},
        {'id': 'SI', 'value': 11},
        {'id': 'ZA', 'value': 11},
        {'id': 'ES', 'value': 11},
        {'id': 'SE', 'value': 11},
        {'id': 'CH', 'value': 11},
        {'id': 'GB', 'value': 11},
        {'id': 'US', 'value': 11},
        {'id': 'UY', 'value': 11},
        {'id': 'TT', 'value': 11},
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

    var area = anychart.area();
    area.title('Spline Area Chart');
    area.bounds(0, '5%', '100%', '30%');
    area.splineArea(dataSet);
    area.container('container');
    area.draw();
});
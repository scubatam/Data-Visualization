anychart.onDocumentReady(function() {
    // create map
    map = anychart.map();

    // create data set
    var dataSet = anychart.data.set([
		{'id': 'AR', 'value': 31644},
		{'id': 'AU', 'value': 168042},
		{'id': 'AT', 'value': 645959},
		{'id': 'BB', 'value': 153},
        {'id': 'BE', 'value': 847718},
        {'id': 'BM', 'value': 1026},
        {'id': 'BR', 'value': 271726},
        {'id': 'CA', 'value': 5354489},
        {'id': 'CL', 'value': 83943},
        {'id': 'CO', 'value': 2749},
        {'id': 'CR', 'value': 12402},
        {'id': 'CZ', 'value': 2865},
        {'id': 'DK', 'value': 168928},
        {'id': 'EC', 'value': 1163},
        {'id': 'EE', 'value': 966},
        {'id': 'FI', 'value': 880883},
        {'id': 'FR', 'value': 9490433},
        {'id': 'DE', 'value': 9402515},
        {'id': 'GR', 'value': 16800},
        {'id': 'GT', 'value': 9678},
        {'id': 'HN', 'value': 122},
        {'id': 'HU', 'value': 229},
        {'id': 'IE', 'value': 167337},
        {'id': 'IT', 'value': 1891949},
        {'id': 'JP', 'value': 125035327},
        {'id': 'LU', 'value': 85586},
        {'id': 'MT', 'value': 470},
        {'id': 'MX', 'value': 735502},
        {'id': 'NL', 'value': 1555224},
        {'id': 'NZ', 'value': 67025},
        {'id': 'NO', 'value': 525657},
        {'id': 'PA', 'value': 2292},
        {'id': 'PE', 'value': 40434},
        {'id': 'PL', 'value': 58234},
        {'id': 'PT', 'value': 173513},
        {'id': 'RO', 'value': 60},
        {'id': 'SI', 'value': 9353},
        {'id': 'ZA', 'value': 3342},
        {'id': 'ES', 'value': 4814430},
        {'id': 'SE', 'value': 679637},
        {'id': 'CH', 'value': 1737545},
        {'id': 'GB', 'value': 10813591},
        {'id': 'US', 'value': 51723490},
        {'id': 'UY', 'value': 485},
        {'id': 'TT', 'value': 640},
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
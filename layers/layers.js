var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Tutorial1Streams_1 = new ol.format.GeoJSON();
var jsonSource_Tutorial1Streams_1 = new ol.source.Vector({
    attributions: ' ',
    format: format_Tutorial1Streams_1
});var lyr_Tutorial1Streams_1 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_Tutorial1Streams_1, 
    style: style_Tutorial1Streams_1,
    interactive: true,
    title: "Tutorial1:Streams"
});

function getTutorial1Streams_1Json(geojson) {
    var features_Tutorial1Streams_1 = format_Tutorial1Streams_1.readFeatures(geojson);
    jsonSource_Tutorial1Streams_1.addFeatures(features_Tutorial1Streams_1);
}
var format_Tutorial1District_2 = new ol.format.GeoJSON();
var jsonSource_Tutorial1District_2 = new ol.source.Vector({
    attributions: ' ',
    format: format_Tutorial1District_2
});var lyr_Tutorial1District_2 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_Tutorial1District_2, 
    style: style_Tutorial1District_2,
    interactive: true,
    title: "Tutorial1:District"
});

function getTutorial1District_2Json(geojson) {
    var features_Tutorial1District_2 = format_Tutorial1District_2.readFeatures(geojson);
    jsonSource_Tutorial1District_2.addFeatures(features_Tutorial1District_2);
}
var format_Tutorial1Road_3 = new ol.format.GeoJSON();
var jsonSource_Tutorial1Road_3 = new ol.source.Vector({
    attributions: ' ',
    format: format_Tutorial1Road_3
});var lyr_Tutorial1Road_3 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_Tutorial1Road_3, 
    style: style_Tutorial1Road_3,
    interactive: true,
    title: "Tutorial1:Road"
});

function getTutorial1Road_3Json(geojson) {
    var features_Tutorial1Road_3 = format_Tutorial1Road_3.readFeatures(geojson);
    jsonSource_Tutorial1Road_3.addFeatures(features_Tutorial1Road_3);
}
var format_Tutorial1Major_Towns_4 = new ol.format.GeoJSON();
var jsonSource_Tutorial1Major_Towns_4 = new ol.source.Vector({
    attributions: ' ',
    format: format_Tutorial1Major_Towns_4
});var lyr_Tutorial1Major_Towns_4 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_Tutorial1Major_Towns_4, 
    style: style_Tutorial1Major_Towns_4,
    interactive: true,
    title: "Tutorial1:Major_Towns"
});

function getTutorial1Major_Towns_4Json(geojson) {
    var features_Tutorial1Major_Towns_4 = format_Tutorial1Major_Towns_4.readFeatures(geojson);
    jsonSource_Tutorial1Major_Towns_4.addFeatures(features_Tutorial1Major_Towns_4);
}

lyr_GoogleMaps_0.setVisible(true);lyr_Tutorial1Streams_1.setVisible(true);lyr_Tutorial1District_2.setVisible(true);lyr_Tutorial1Road_3.setVisible(true);lyr_Tutorial1Major_Towns_4.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Tutorial1Streams_1,lyr_Tutorial1District_2,lyr_Tutorial1Road_3,lyr_Tutorial1Major_Towns_4];
lyr_Tutorial1Streams_1.set('fieldAliases', {'FID_': 'FID_', 'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'STNET_': 'STNET_', 'STNET_ID': 'STNET_ID', 'ST_NET2_': 'ST_NET2_', 'ST_NET2_ID': 'ST_NET2_ID', 'CODE': 'CODE', 'NAME': 'NAME', });
lyr_Tutorial1District_2.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'Area': 'Area', 'District': 'District', 'Sinhalese': 'Sinhalese', 'SL_Tamils': 'SL_Tamils', 'Ind_Tamils': 'Ind_Tamils', 'Moor': 'Moor', 'Burgher': 'Burgher', 'Malay': 'Malay', 'Other': 'Other', 'Male': 'Male', 'Female': 'Female', 'Pop1963': 'Pop1963', 'Pop1971': 'Pop1971', 'Pop1981_': 'Pop1981_', 'Pop2001_': 'Pop2001_', 'Pop2012': 'Pop2012', 'Sin_2012': 'Sin_2012', 'In_Tam2012': 'In_Tam2012', 'Sl_Tam2012': 'Sl_Tam2012', 'Mus_2012': 'Mus_2012', 'Other_2012': 'Other_2012', });
lyr_Tutorial1Road_3.set('fieldAliases', {'ROAD_ID': 'ROAD_ID', 'CODE': 'CODE', 'CLASS': 'CLASS', });
lyr_Tutorial1Major_Towns_4.set('fieldAliases', {'ID': 'ID', 'NAME': 'NAME', });
lyr_Tutorial1Streams_1.set('fieldImages', {'FID_': '', 'FNODE_': '', 'TNODE_': '', 'LPOLY_': '', 'RPOLY_': '', 'LENGTH': '', 'STNET_': '', 'STNET_ID': '', 'ST_NET2_': '', 'ST_NET2_ID': '', 'CODE': '', 'NAME': '', });
lyr_Tutorial1District_2.set('fieldImages', {'PROVINCE_N': 'TextEdit', 'Area': 'TextEdit', 'District': 'TextEdit', 'Sinhalese': 'TextEdit', 'SL_Tamils': 'TextEdit', 'Ind_Tamils': 'TextEdit', 'Moor': 'TextEdit', 'Burgher': 'TextEdit', 'Malay': 'TextEdit', 'Other': 'TextEdit', 'Male': 'TextEdit', 'Female': 'TextEdit', 'Pop1963': 'TextEdit', 'Pop1971': 'TextEdit', 'Pop1981_': 'Range', 'Pop2001_': 'Range', 'Pop2012': 'Range', 'Sin_2012': 'Range', 'In_Tam2012': 'Range', 'Sl_Tam2012': 'Range', 'Mus_2012': 'Range', 'Other_2012': 'Range', });
lyr_Tutorial1Road_3.set('fieldImages', {'ROAD_ID': 'TextEdit', 'CODE': 'Range', 'CLASS': 'TextEdit', });
lyr_Tutorial1Major_Towns_4.set('fieldImages', {'ID': '', 'NAME': '', });
lyr_Tutorial1Streams_1.set('fieldLabels', {'FID_': 'no label', 'FNODE_': 'no label', 'TNODE_': 'no label', 'LPOLY_': 'no label', 'RPOLY_': 'no label', 'LENGTH': 'no label', 'STNET_': 'no label', 'STNET_ID': 'no label', 'ST_NET2_': 'no label', 'ST_NET2_ID': 'no label', 'CODE': 'no label', 'NAME': 'inline label', });
lyr_Tutorial1District_2.set('fieldLabels', {'PROVINCE_N': 'no label', 'Area': 'no label', 'District': 'no label', 'Sinhalese': 'no label', 'SL_Tamils': 'no label', 'Ind_Tamils': 'no label', 'Moor': 'no label', 'Burgher': 'no label', 'Malay': 'no label', 'Other': 'no label', 'Male': 'no label', 'Female': 'no label', 'Pop1963': 'no label', 'Pop1971': 'no label', 'Pop1981_': 'no label', 'Pop2001_': 'no label', 'Pop2012': 'no label', 'Sin_2012': 'no label', 'In_Tam2012': 'no label', 'Sl_Tam2012': 'no label', 'Mus_2012': 'no label', 'Other_2012': 'no label', });
lyr_Tutorial1Road_3.set('fieldLabels', {'ROAD_ID': 'no label', 'CODE': 'no label', 'CLASS': 'inline label', });
lyr_Tutorial1Major_Towns_4.set('fieldLabels', {'ID': 'no label', 'NAME': 'header label', });
lyr_Tutorial1Major_Towns_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
var wms_layers = [];

var format_Italia__0 = new ol.format.GeoJSON();
var features_Italia__0 = format_Italia__0.readFeatures(json_Italia__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Italia__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Italia__0.addFeatures(features_Italia__0);
var lyr_Italia__0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Italia__0, 
                style: style_Italia__0,
                popuplayertitle: 'Italia — _',
                interactive: false,
                title: '<img src="styles/legend/Italia__0.png" /> Italia — _'
            });
var format_2_1 = new ol.format.GeoJSON();
var features_2_1 = format_2_1.readFeatures(json_2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_1.addFeatures(features_2_1);
var lyr_2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2_1, 
                style: style_2_1,
                popuplayertitle: 'Италия 2',
                interactive: true,
    title: 'Италия 2<br />\
    <img src="styles/legend/2_1_0.png" /> 3,9 - 6,1<br />\
    <img src="styles/legend/2_1_1.png" /> 6,1 - 10,9<br />\
    <img src="styles/legend/2_1_2.png" /> 10,9 - 15,8<br />\
    <img src="styles/legend/2_1_3.png" /> 15,8 - 25,7<br />\
    <img src="styles/legend/2_1_4.png" /> 25,7 - 28,8<br />' });
var format_1_2 = new ol.format.GeoJSON();
var features_1_2 = format_1_2.readFeatures(json_1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_2.addFeatures(features_1_2);
var lyr_1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1_2, 
                style: style_1_2,
                popuplayertitle: 'Италия 1',
                interactive: true,
    title: 'Италия 1<br />\
    <img src="styles/legend/1_2_0.png" /> 3,9 - 6,1<br />\
    <img src="styles/legend/1_2_1.png" /> 6,1 - 10,9<br />\
    <img src="styles/legend/1_2_2.png" /> 10,9 - 15,8<br />\
    <img src="styles/legend/1_2_3.png" /> 15,8 - 25,7<br />\
    <img src="styles/legend/1_2_4.png" /> 25,7 - 28,8<br />' });

lyr_Italia__0.setVisible(true);lyr_2_1.setVisible(true);lyr_1_2.setVisible(true);
var layersList = [lyr_Italia__0,lyr_2_1,lyr_1_2];
lyr_Italia__0.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_2_1.set('fieldAliases', {'id': 'id', 'name': 'Город', 'X': 'Долгота', 'Y': 'Широта', 'population': 'Население', 'export volume': 'Объём экспорта', 'unemployment rate': 'Уровень безработицы', });
lyr_1_2.set('fieldAliases', {'id': 'id', 'name': 'Город', 'X': 'Долгота', 'Y': 'Широта', 'population': 'Население', 'export volume': 'Объём экспорта', 'unemployment rate': 'Уровень безработицы', });
lyr_Italia__0.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_2_1.set('fieldImages', {'id': 'Hidden', 'name': 'TextEdit', 'X': 'Hidden', 'Y': 'Hidden', 'population': 'Range', 'export volume': 'TextEdit', 'unemployment rate': 'TextEdit', });
lyr_1_2.set('fieldImages', {'id': 'Hidden', 'name': 'TextEdit', 'X': 'Hidden', 'Y': 'Hidden', 'population': 'Range', 'export volume': 'Hidden', 'unemployment rate': 'TextEdit', });
lyr_Italia__0.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_2_1.set('fieldLabels', {'name': 'inline label - always visible', 'population': 'inline label - always visible', 'export volume': 'inline label - always visible', 'unemployment rate': 'hidden field', });
lyr_1_2.set('fieldLabels', {'name': 'hidden field', 'population': 'hidden field', 'unemployment rate': 'inline label - always visible', });
lyr_1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
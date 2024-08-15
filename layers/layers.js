var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PETATPN_1 = new ol.format.GeoJSON();
var features_PETATPN_1 = format_PETATPN_1.readFeatures(json_PETATPN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PETATPN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETATPN_1.addFeatures(features_PETATPN_1);
var lyr_PETATPN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PETATPN_1, 
                style: style_PETATPN_1,
                popuplayertitle: "PETA TPN",
                interactive: true,
                title: '<img src="styles/legend/PETATPN_1.png" /> PETA TPN'
            });
var format_KawasanJentik_2 = new ol.format.GeoJSON();
var features_KawasanJentik_2 = format_KawasanJentik_2.readFeatures(json_KawasanJentik_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanJentik_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanJentik_2.addFeatures(features_KawasanJentik_2);
var lyr_KawasanJentik_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanJentik_2, 
                style: style_KawasanJentik_2,
                popuplayertitle: "Kawasan Jentik",
                interactive: true,
                title: '<img src="styles/legend/KawasanJentik_2.png" /> Kawasan Jentik'
            });
var format_TempatPerindukanNyamuk_3 = new ol.format.GeoJSON();
var features_TempatPerindukanNyamuk_3 = format_TempatPerindukanNyamuk_3.readFeatures(json_TempatPerindukanNyamuk_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatPerindukanNyamuk_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatPerindukanNyamuk_3.addFeatures(features_TempatPerindukanNyamuk_3);
var lyr_TempatPerindukanNyamuk_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatPerindukanNyamuk_3, 
                style: style_TempatPerindukanNyamuk_3,
                popuplayertitle: "Tempat Perindukan Nyamuk",
                interactive: true,
                title: '<img src="styles/legend/TempatPerindukanNyamuk_3.png" /> Tempat Perindukan Nyamuk'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_PETATPN_1.setVisible(true);lyr_KawasanJentik_2.setVisible(true);lyr_TempatPerindukanNyamuk_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PETATPN_1,lyr_KawasanJentik_2,lyr_TempatPerindukanNyamuk_3];
lyr_PETATPN_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_KawasanJentik_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TempatPerindukanNyamuk_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_PETATPN_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_KawasanJentik_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_TempatPerindukanNyamuk_3.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_PETATPN_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_KawasanJentik_2.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TempatPerindukanNyamuk_3.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TempatPerindukanNyamuk_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
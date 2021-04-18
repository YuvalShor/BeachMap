var wms_layers = [];


        var lyr_googlemaps_0 = new ol.layer.Tile({
            'title': 'google maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_gis_osm_pois_free_1_1 = new ol.format.GeoJSON();
var features_gis_osm_pois_free_1_1 = format_gis_osm_pois_free_1_1.readFeatures(json_gis_osm_pois_free_1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gis_osm_pois_free_1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gis_osm_pois_free_1_1.addFeatures(features_gis_osm_pois_free_1_1);
var lyr_gis_osm_pois_free_1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gis_osm_pois_free_1_1, 
                style: style_gis_osm_pois_free_1_1,
                interactive: true,
    title: 'gis_osm_pois_free_1<br />\
    <img src="styles/legend/gis_osm_pois_free_1_1_0.png" /> attraction<br />\
    <img src="styles/legend/gis_osm_pois_free_1_1_1.png" /> bar<br />\
    <img src="styles/legend/gis_osm_pois_free_1_1_2.png" /> biergarten<br />\
    <img src="styles/legend/gis_osm_pois_free_1_1_3.png" /> cafe<br />\
    <img src="styles/legend/gis_osm_pois_free_1_1_4.png" /> camp_site<br />\
    <img src="styles/legend/gis_osm_pois_free_1_1_5.png" /> caravan_site<br />\
    <img src="styles/legend/gis_osm_pois_free_1_1_6.png" /> cinema<br />\
    <img src="styles/legend/gis_osm_pois_free_1_1_7.png" /> dog_park<br />\
    <img src="styles/legend/gis_osm_pois_free_1_1_8.png" /> fast_food<br />\
    <img src="styles/legend/gis_osm_pois_free_1_1_9.png" /> food_court<br />\
    <img src="styles/legend/gis_osm_pois_free_1_1_10.png" /> gift_shop<br />\
    <img src="styles/legend/gis_osm_pois_free_1_1_11.png" /> guesthouse<br />\
    <img src="styles/legend/gis_osm_pois_free_1_1_12.png" /> hostel<br />\
    <img src="styles/legend/gis_osm_pois_free_1_1_13.png" /> hotel<br />\
    <img src="styles/legend/gis_osm_pois_free_1_1_14.png" /> ice_rink<br />\
    <img src="styles/legend/gis_osm_pois_free_1_1_15.png" /> mall<br />\
    <img src="styles/legend/gis_osm_pois_free_1_1_16.png" /> motel<br />\
    <img src="styles/legend/gis_osm_pois_free_1_1_17.png" /> museum<br />\
    <img src="styles/legend/gis_osm_pois_free_1_1_18.png" /> nightclub<br />\
    <img src="styles/legend/gis_osm_pois_free_1_1_19.png" /> park<br />\
    <img src="styles/legend/gis_osm_pois_free_1_1_20.png" /> picnic_site<br />\
    <img src="styles/legend/gis_osm_pois_free_1_1_21.png" /> playground<br />\
    <img src="styles/legend/gis_osm_pois_free_1_1_22.png" /> pub<br />\
    <img src="styles/legend/gis_osm_pois_free_1_1_23.png" /> restaurant<br />\
    <img src="styles/legend/gis_osm_pois_free_1_1_24.png" /> theatre<br />\
    <img src="styles/legend/gis_osm_pois_free_1_1_25.png" /> theme_park<br />\
    <img src="styles/legend/gis_osm_pois_free_1_1_26.png" /> viewpoint<br />\
    <img src="styles/legend/gis_osm_pois_free_1_1_27.png" /> zoo<br />'
        });
var format_beaches_2 = new ol.format.GeoJSON();
var features_beaches_2 = format_beaches_2.readFeatures(json_beaches_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_beaches_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_beaches_2.addFeatures(features_beaches_2);
var lyr_beaches_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_beaches_2, 
                style: style_beaches_2,
                interactive: true,
                title: '<img src="styles/legend/beaches_2.png" /> beaches'
            });

lyr_googlemaps_0.setVisible(true);lyr_gis_osm_pois_free_1_1.setVisible(false);lyr_beaches_2.setVisible(true);
var layersList = [lyr_googlemaps_0,lyr_gis_osm_pois_free_1_1,lyr_beaches_2];
lyr_gis_osm_pois_free_1_1.set('fieldAliases', {'osm_id': 'osm_id', 'fclass': 'fclass', 'name': 'name', });
lyr_beaches_2.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'sea': 'sea', });
lyr_gis_osm_pois_free_1_1.set('fieldImages', {'osm_id': 'TextEdit', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_beaches_2.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'sea': 'TextEdit', });
lyr_gis_osm_pois_free_1_1.set('fieldLabels', {'osm_id': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_beaches_2.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'name': 'no label', 'sea': 'no label', });
lyr_beaches_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
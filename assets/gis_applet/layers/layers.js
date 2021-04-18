var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': 'מפת ישראל',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
    title: 'אטרקציות<br />\
    <img src="styles/legend/_1_0.png" /> אולם תאטרון<br />\
    <img src="styles/legend/_1_1.png" /> אטרקציה<br />\
    <img src="styles/legend/_1_2.png" /> אכסניה<br />\
    <img src="styles/legend/_1_3.png" /> אתר פיקניק<br />\
    <img src="styles/legend/_1_4.png" /> אתר קמפינג<br />\
    <img src="styles/legend/_1_5.png" /> בית הארחה<br />\
    <img src="styles/legend/_1_6.png" /> בית מלון<br />\
    <img src="styles/legend/_1_7.png" /> בית קפה<br />\
    <img src="styles/legend/_1_8.png" /> בר<br />\
    <img src="styles/legend/_1_9.png" /> גן חיות<br />\
    <img src="styles/legend/_1_10.png" /> הוסטל<br />\
    <img src="styles/legend/_1_11.png" /> חנות מתנות<br />\
    <img src="styles/legend/_1_12.png" /> מוזיאון<br />\
    <img src="styles/legend/_1_13.png" /> מועדון לילה<br />\
    <img src="styles/legend/_1_14.png" /> מסעדה<br />\
    <img src="styles/legend/_1_15.png" /> נקודת תצפית<br />\
    <img src="styles/legend/_1_16.png" /> פאב<br />\
    <img src="styles/legend/_1_17.png" /> פארק<br />\
    <img src="styles/legend/_1_18.png" /> קולנוע<br />\
    <img src="styles/legend/_1_19.png" /> קניון<br />\
    <img src="styles/legend/_1_20.png" /> רשת מזון מהיר<br />'
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> חופים'
            });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr__2];
lyr__1.set('fieldAliases', {'fclass': 'fclass', 'name': 'name', });
lyr__2.set('fieldAliases', {'fid': 'fid', 'name': 'שם החוף', 'sea': 'ים', 'city': 'יישוב', 'allowed': 'מותר לרחצה', });
lyr__1.set('fieldImages', {'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr__2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'sea': 'TextEdit', 'city': 'TextEdit', 'allowed': 'CheckBox', });
lyr__1.set('fieldLabels', {'fclass': 'no label', 'name': 'no label', });
lyr__2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'sea': 'no label', 'city': 'no label', 'allowed': 'no label', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
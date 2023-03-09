var wms_layers = [];

var format_Colombia_0 = new ol.format.GeoJSON();
var features_Colombia_0 = format_Colombia_0.readFeatures(json_Colombia_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colombia_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colombia_0.addFeatures(features_Colombia_0);
var lyr_Colombia_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Colombia_0, 
                style: style_Colombia_0,
                interactive: false,
                title: '<img src="styles/legend/Colombia_0.png" /> Colombia'
            });
var format_Departamentos_1 = new ol.format.GeoJSON();
var features_Departamentos_1 = format_Departamentos_1.readFeatures(json_Departamentos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_1.addFeatures(features_Departamentos_1);
var lyr_Departamentos_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_1, 
                style: style_Departamentos_1,
                interactive: false,
                title: '<img src="styles/legend/Departamentos_1.png" /> Departamentos'
            });
var format_Municipios_2 = new ol.format.GeoJSON();
var features_Municipios_2 = format_Municipios_2.readFeatures(json_Municipios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_2.addFeatures(features_Municipios_2);
var lyr_Municipios_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipios_2, 
                style: style_Municipios_2,
                interactive: true,
                title: '<img src="styles/legend/Municipios_2.png" /> Municipios'
            });

lyr_Colombia_0.setVisible(false);lyr_Departamentos_1.setVisible(false);lyr_Municipios_2.setVisible(true);
var layersList = [lyr_Colombia_0,lyr_Departamentos_1,lyr_Municipios_2];
lyr_Colombia_0.set('fieldAliases', {'GID_0': 'GID_0', 'NAME_0': 'Pais', });
lyr_Departamentos_1.set('fieldAliases', {'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'Departamento', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', });
lyr_Municipios_2.set('fieldAliases', {'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'Departamento', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'Municipio', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_Colombia_0.set('fieldImages', {'GID_0': 'Hidden', 'NAME_0': 'TextEdit', });
lyr_Departamentos_1.set('fieldImages', {'GID_0': 'Hidden', 'NAME_0': 'Hidden', 'GID_1': 'Hidden', 'NAME_1': 'TextEdit', 'VARNAME_1': 'Hidden', 'NL_NAME_1': 'Hidden', 'TYPE_1': 'Hidden', 'ENGTYPE_1': 'Hidden', 'CC_1': 'Hidden', 'HASC_1': 'Hidden', });
lyr_Municipios_2.set('fieldImages', {'GID_0': 'Hidden', 'NAME_0': 'Hidden', 'GID_1': 'Hidden', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'Hidden', 'GID_2': 'Hidden', 'NAME_2': 'TextEdit', 'VARNAME_2': 'Hidden', 'NL_NAME_2': 'Hidden', 'TYPE_2': 'Hidden', 'ENGTYPE_2': 'Hidden', 'CC_2': 'Hidden', 'HASC_2': 'Hidden', });
lyr_Colombia_0.set('fieldLabels', {'NAME_0': 'inline label', });
lyr_Departamentos_1.set('fieldLabels', {'NAME_1': 'inline label', });
lyr_Municipios_2.set('fieldLabels', {'NAME_1': 'inline label', 'NAME_2': 'inline label', });
lyr_Municipios_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
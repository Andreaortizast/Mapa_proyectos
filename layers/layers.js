var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Positronretina_1 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: "",
                interactive: true,
    title: '<br />\
    <img src="styles/legend/_2_0.png" /> CONSERVACION AVDA. LO ESPEJO COMUNA DE LO ESPEJO<br />\
    <img src="styles/legend/_2_1.png" /> CONSERVACION AVDA.PDTE SALVADOR ALLENDE - COMUNA<br />\
    <img src="styles/legend/_2_2.png" /> CONSERVACION CALZADAS ETAPA IV (MANVU)<br />\
    <img src="styles/legend/_2_3.png" /> CONSERVACION CALZADAS V COMUNA DE LO ESPEJO<br />\
    <img src="styles/legend/_2_4.png" /> CONSERVACION DE VEREDAS LO SIERRA A<br />\
    <img src="styles/legend/_2_5.png" /> CONSERVACION DE VEREDAS SANTA ANITA - JOSE MARIA CARO ll<br />\
    <img src="styles/legend/_2_6.png" /> CONSERVACION DE VEREDAS VILLA SUR - JOSE MARIA CARO<br />\
    <img src="styles/legend/_2_7.png" /> CONSTRUCCIÓN DE CICLOVÍAS INTERCOMUNAL DE GRAN SANTIAGO<br />\
    <img src="styles/legend/_2_8.png" /> INSTALACION DE LUMINARIAS EJE CENTRAL<br />\
    <img src="styles/legend/_2_9.png" /> LUMINARIAS PEATONALES 19 SUR Y PÍO XI OBRA DE CONFIANZA QMB<br />\
    <img src="styles/legend/_2_10.png" /> MEJORAMIENTO DEL ENTORNO DE GIMNASIO MUNICIPAL<br />\
    <img src="styles/legend/_2_11.png" /> MEJORAMIENTO ESPACIO PÚBLICO AV. CENTRAL ETAPA (EJE CÍVICO)<br />\
    <img src="styles/legend/_2_12.png" /> NORMALIZACIÓN ILUMINACIÓN ESTADIO CLARA ESTRELLA, COMUNA LO ESPEJO<br />\
    <img src="styles/legend/_2_13.png" /> REPOSICION DE VEREDAS LO SIERRA COMUNA DE LO ESPEJO<br />\
    <img src="styles/legend/_2_14.png" /> REPOSICION DE VEREDAS SECTOR LAS TURBINAS - UNIDAD VECINAL 37 B<br />\
    <img src="styles/legend/_2_15.png" /> REPOSICION DE VEREDAS UV 37-C, SECTOR 09<br />\
    <img src="styles/legend/_2_16.png" /> REPOSICION DE VEREDAS UV 37-C, SECTOR 10<br />\
    <img src="styles/legend/_2_17.png" /> REPOSICION DE VEREDAS UV 37-C, SECTOR 11<br />\
    <img src="styles/legend/_2_18.png" /> REPOSICION DE VEREDAS UV 37-C, SECTOR 12<br />\
    <img src="styles/legend/_2_19.png" /> REPOSICION DE VEREDAS UV 37-C, SECTOR 13<br />\
    <img src="styles/legend/_2_20.png" /> REPOSICION DE VEREDAS UV 37-C, SECTOR 14<br />\
    <img src="styles/legend/_2_21.png" /> REPOSICION DE VEREDAS UV 37-C, SECTOR 15<br />\
    <img src="styles/legend/_2_22.png" /> REPOSICION DE VEREDAS UV 37-C, SECTOR 16<br />\
    <img src="styles/legend/_2_23.png" /> REPOSICION DE VEREDAS UV 37-C, SECTOR 17<br />\
    <img src="styles/legend/_2_24.png" /> REPOSICION DE VEREDAS UV 37-C, SECTOR 18<br />'
        });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: "",
                interactive: true,
    title: '<br />\
    <img src="styles/legend/_3_0.png" /> AQUISICIÓN INTALACIÓN CÁMARAS DE TELEPROTECCIÓN<br />\
    <img src="styles/legend/_3_1.png" /> CONSTRUCCIÓN, SEÑALIZACIÓN Y DEMARCACIÓN DE RESALTOS REDUCTORES DE VELOCIDAD, COMUNA DE LO ESPEJO<br />\
    <img src="styles/legend/_3_2.png" /> REPOSICIÓN DE 37 CÁMARAS Y ADQUISICIÓN DE 22 NUEVOS PUNTOS DE TELEVIGILANCIA, LO ESPEJO<br />\
    <img src="styles/legend/_3_3.png" /> REPOSICIÓN DE DEMARCACIÓN VIAL UNIDAD VECINAL 27, 28, 29, 30, 31, 32, 34, 35 Y 36 COMUNA DE LO ESPEJO<br />\
    <img src="styles/legend/_3_4.png" /> REPOSICIÓN DE DEMARCACIÓN VIAL UNIDAD VECINAL 37A, 37B Y 37C COMUNA DE LO ESPEJO<br />'
        });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: "",
                interactive: true,
    title: '<br />\
    <img src="styles/legend/_4_0.png" /> [CSV] MEJORAMIENTO ESPACIO PÚBLICO CONDOMINIO VALENZUELA LLANOS<br />\
    <img src="styles/legend/_4_1.png" /> [CSV] MEJORAMIENTO ESPACIO PÚBLICO EJE CÍVICO<br />\
    <img src="styles/legend/_4_2.png" /> [CSV] MEJORAMIENTO ESPACIO PÚBLICO PIERRE DUBOIS<br />\
    <img src="styles/legend/_4_3.png" /> [CSV] MEJORAMIENTO RUTAS PEATONALES CALETERA VESPUCIO<br />\
    <img src="styles/legend/_4_4.png" /> ADQUISICION DE CENTRAL DE RADIO<br />\
    <img src="styles/legend/_4_5.png" /> ADQUISICIÓN E INSTALACIÓN DE CÁMARAS DE TELEPROTECCIÓN<br />\
    <img src="styles/legend/_4_6.png" /> CONSERVACIÓN 2023 ESCUELA ALICIA ARIZTÍA<br />\
    <img src="styles/legend/_4_7.png" /> CONSERVACIÓN 2023 ESCUELA SANTA ADRIANA<br />\
    <img src="styles/legend/_4_8.png" /> CONSERVACION ACERAS Y CALZADAS ENTORNOS ESCOLARES, RECOLETA, LO ESPEJO, PUENTE ALTO Y MAIPÚ<br />\
    <img src="styles/legend/_4_9.png" /> CONSERVACION DE INFRAESTRUCTURA COLEGIO HERNAN OLGUIN<br />\
    <img src="styles/legend/_4_10.png" /> CONSERVACIÓN DE INFRAESTRUCTURA ESCUELA BLUE STAR COLLEGE<br />\
    <img src="styles/legend/_4_11.png" /> CONSERVACIÓN DE INFRAESTRUCTURA LICEO TENIENTE FRANCISCO MERY AGUIRRE<br />\
    <img src="styles/legend/_4_12.png" /> CONSERVACIÓN ESCUELA ACAPULCO, LO ESPEJO<br />\
    <img src="styles/legend/_4_13.png" /> CONSERVACIÓN ESCUELA BÁSICA ALICIA ARIZTÍA DE SILVA<br />\
    <img src="styles/legend/_4_14.png" /> CONSERVACIÓN ESCUELA BÁSICA BERNARDO O´HIGGINS, LO ESPEJO<br />\
    <img src="styles/legend/_4_15.png" /> CONSERVACIÓN ESCUELA BÁSICA RAÚL SÁEZ<br />\
    <img src="styles/legend/_4_16.png" /> CONSERVACIÓN ESCUELA CLARA ESTRELLA<br />\
    <img src="styles/legend/_4_17.png" /> CONSERVACIÓN ESCUELA ESPECIAL TAMARUGAL, LO ESPEJO<br />\
    <img src="styles/legend/_4_18.png" /> CONSERVACIÓN ESCUELA REPÚBLICA DE FILIPINAS<br />\
    <img src="styles/legend/_4_19.png" /> CONSERVACIÓN ESCUELA REPÚBLICA DE INDONESIA<br />\
    <img src="styles/legend/_4_20.png" /> CONSERVACIÓN ESCUELA SANTA ADRIANA, LO ESPEJO<br />\
    <img src="styles/legend/_4_21.png" /> CONSERVACIÓN ESCUELA TAMARUGAL<br />\
    <img src="styles/legend/_4_22.png" /> CONSERVACIÓN JARDÍN INFANTIL HUELEMU<br />\
    <img src="styles/legend/_4_23.png" /> CONSERVACIÓN JARDÍN INFANTIL HUELEMU (EMERGENCIA)<br />\
    <img src="styles/legend/_4_24.png" /> CONSERVACIÓN JARDIN INFANTIL MANITOS DE COLORES (EMERGENCIA)<br />\
    <img src="styles/legend/_4_25.png" /> CONSERVACION JARDIN INFANTIL MI MUNDO EN MINIATURA<br />\
    <img src="styles/legend/_4_26.png" /> CONSERVACION JARDIN INFANTIL PEQUENOS GIGANTES<br />\
    <img src="styles/legend/_4_27.png" /> CONSERVACIÓN JARDÍN INFANTIL PEQUEÑOS GIGANTES (EMERGENCIA)<br />\
    <img src="styles/legend/_4_28.png" /> CONSERVACION JARDIN INFANTIL RENACER POR UN SUENO<br />\
    <img src="styles/legend/_4_29.png" /> CONSERVACIÓN JARDÍN MIS PRIMEROS PASOS<br />\
    <img src="styles/legend/_4_30.png" /> CONSERVACIÓN JARDÍN MIS PRIMEROS PASOS (EMERGENCIA)<br />\
    <img src="styles/legend/_4_31.png" /> CONSERVACIÓN LICEO POLIVALENTE CARDENAL JOSÉ MARÍA CARO 110 COMUNA LO ESPEJO<br />\
    <img src="styles/legend/_4_32.png" /> CONSERVACION PARQUE LAS TURBINAS COMUNA DE LO ESPEJO<br />\
    <img src="styles/legend/_4_33.png" /> CONSERVACION SALA CUNA Y JARDÍN INFANTIL ESTRELLITAS DE LA MAÑANA<br />\
    <img src="styles/legend/_4_34.png" /> CONSTRUCCION CANCHA BABYFUTBOL PERSEO<br />\
    <img src="styles/legend/_4_35.png" /> CONSTRUCCION CANCHA DE PASTO SINTETICO EDUARDO FREI<br />\
    <img src="styles/legend/_4_36.png" /> CONSTRUCCION CANCHA PASTO SINTETICO C.D. SOBERANIA<br />\
    <img src="styles/legend/_4_37.png" /> CONSTRUCCION CENTRO CULTURAL COMUNA DE LO ESPEJO<br />\
    <img src="styles/legend/_4_38.png" /> CONSTRUCCION CENTRO VETERINARIO MUNICIPAL<br />\
    <img src="styles/legend/_4_39.png" /> CONSTRUCCION CONJUNTO VIVIENDAS TUTELADAS DE ADULTO MAYOR, COMUNA DE LO ESPEJO<br />\
    <img src="styles/legend/_4_40.png" /> CONSTRUCCIÓN DE CENTRO COMUNITARIO DE CUIDADOS Y PROTECCIÓN CON ENFOQUE EN INCLUSIÓN<br />\
    <img src="styles/legend/_4_41.png" /> CONSTRUCCIÓN DE MULTICANCHA PARQUE LANDAETA<br />\
    <img src="styles/legend/_4_42.png" /> CONSTRUCCION MERCADO MUNICIPAL COMUNITARIO CRESOL<br />\
    <img src="styles/legend/_4_43.png" /> CONSTRUCCIÓN PARQUE LANDAETA<br />\
    <img src="styles/legend/_4_44.png" /> CONSTRUCCIÓN PARQUE PABLO NERUDA<br />\
    <img src="styles/legend/_4_45.png" /> CONSTRUCCIÓN PLAZA HUASCO<br />\
    <img src="styles/legend/_4_46.png" /> CONSTRUCCIÓN RECINTO DEPORTIVO JÚPITER<br />\
    <img src="styles/legend/_4_47.png" /> HABILITACIÓN DE CONTINGENCIA DE DEPENDENCIAS MUNICIPALES (JUZGADOS DE POLICÍA LOCAL)<br />\
    <img src="styles/legend/_4_48.png" /> HABILITACIÓN DE ESPACIO PÚBLICO SEGURO, PISTA DE PATINAJE GUADALUPE UV31 EDUARDO FREI CON GUADALUPE<br />\
    <img src="styles/legend/_4_49.png" /> HABILITACIÓN LABORATORIO COMUNAL<br />\
    <img src="styles/legend/_4_50.png" /> HABILITACIÓN OFICINA RECUPERACIÓN DE BARRIOS<br />\
    <img src="styles/legend/_4_51.png" /> HABILITACION SALAS TEA<br />\
    <img src="styles/legend/_4_52.png" /> MEJORAMIENTO DE INSTALACIONES ELÉCTRICAS COLEGIO HERNAN OLGUIN<br />\
    <img src="styles/legend/_4_53.png" /> MEJORAMIENTO DE PLAZAS PARA EL FORTALECIMIENTO DE LA IDENTIDAD BARRIAL<br />\
    <img src="styles/legend/_4_54.png" /> MEJORAMIENTO ENTORNO ESCUELA ESPECIAL TAMARUGAL<br />\
    <img src="styles/legend/_4_55.png" /> MEJORAMIENTO ESPACIO PÚBLICO 21 SUR COMUNA DE LO ESPEJO<br />\
    <img src="styles/legend/_4_56.png" /> MEJORAMIENTO ESPACIO PUBLICO GIL DE CASTRO UV 37-B<br />\
    <img src="styles/legend/_4_57.png" /> MEJORAMIENTO ESPACIO PUBLICO MARIELA SALGADO COMUNA DE LO ESPEJO<br />\
    <img src="styles/legend/_4_58.png" /> MEJORAMIENTO ESPACIO PUBLICO MONTERREY<br />\
    <img src="styles/legend/_4_59.png" /> MEJORAMIENTO ESPACIO PUBLICO PASAJE 24, EN UV 24, POBLACION SANTA ADRIANA<br />\
    <img src="styles/legend/_4_60.png" /> MEJORAMIENTO ESPACIO PUBLICO PLATABANDA EDUARDO FREI COMUNA DE LO ESPEJO<br />\
    <img src="styles/legend/_4_61.png" /> MEJORAMIENTO ESPACIO PUBLICO SALVADOR ALLENDE COMUNA DE .LO ESPEJO<br />\
    <img src="styles/legend/_4_62.png" /> MEJORAMIENTO ESPACIO PUBLICO SANTA CECILIA UV 37 B COMUNA LO ESPEJO (MAUSOLEO)<br />\
    <img src="styles/legend/_4_63.png" /> MEJORAMIENTO ESPACIO PUBLICO UV 36, PLATABANDA PASAJE 25 SUR<br />\
    <img src="styles/legend/_4_64.png" /> MEJORAMIENTO ESPACIO PÚBLICO VILLA SANTA OLGA<br />\
    <img src="styles/legend/_4_65.png" /> MEJORAMIENTO ESPACIOS PÚBLICOS UV 35 (PMU ADMINISTRACIÓN DIRECTA)<br />\
    <img src="styles/legend/_4_66.png" /> MEJORAMIENTO ESPACIOS PÚBLICOS UV 36, PASAJE 17 Y 19 SUR<br />\
    <img src="styles/legend/_4_67.png" /> MEJORAMIENTO GALPÓN ESCUELA BERNARDO O\'HIGGINS<br />\
    <img src="styles/legend/_4_68.png" /> MEJORAMIENTO GIMNASIO ESCUELA SALOMÓN SACK<br />\
    <img src="styles/legend/_4_69.png" /> MEJORAMIENTO INTERIOR GIMNASIO MUNICIPAL<br />\
    <img src="styles/legend/_4_70.png" /> MEJORAMIENTO MULTICANCHA C.D. ZABALA<br />\
    <img src="styles/legend/_4_71.png" /> MEJORAMIENTO MULTICANCHA CONDOMINIO LOS LEBRELES<br />\
    <img src="styles/legend/_4_72.png" /> MEJORAMIENTO MULTICANCHA JUVENTUD 2000<br />\
    <img src="styles/legend/_4_73.png" /> MEJORAMIENTO MULTICANCHA LAS PALMERAS<br />\
    <img src="styles/legend/_4_74.png" /> MEJORAMIENTO MULTICANCHA LO SIERRA A<br />\
    <img src="styles/legend/_4_75.png" /> MEJORAMIENTO MULTICANCHA LOS COPIHUES<br />\
    <img src="styles/legend/_4_76.png" /> MEJORAMIENTO MULTICANCHA UNIDAD VECINAL N°31<br />\
    <img src="styles/legend/_4_77.png" /> MEJORAMIENTO MULTICANCHA Y ESPACIO PÚBLICO UNIDAD VECINAL N°35<br />\
    <img src="styles/legend/_4_78.png" /> MEJORAMIENTO PAVIMENTO 6 MULTICANCHAS<br />\
    <img src="styles/legend/_4_79.png" /> MEJORAMIENTO PLATABANDA ACAPULCO UV 29<br />\
    <img src="styles/legend/_4_80.png" /> MEJORAMIENTO PLATABANDA BUENAVENTURA 6 PONIENTE COMUNA DE LO ESPEJO<br />\
    <img src="styles/legend/_4_81.png" /> MEJORAMIENTO PLATABANDA GABRIELA MISTRAL COMUNA DE LO ESPEJO<br />\
    <img src="styles/legend/_4_82.png" /> MEJORAMIENTO PLATABANDA LINCOLN COMUNA DE LO ESPEJO<br />\
    <img src="styles/legend/_4_83.png" /> MEJORAMIENTO PLATABANDA PIO XII<br />\
    <img src="styles/legend/_4_84.png" /> MEJORAMIENTO PLATABANDAS CALLE FERRARI E INTERSECCIONES (PMU DE ADMINISTRACION DIRECTA)<br />\
    <img src="styles/legend/_4_85.png" /> MEJORAMIENTO PLAZA ALTAIR<br />\
    <img src="styles/legend/_4_86.png" /> MEJORAMIENTO PLAZA AUGUSTO DHALMAR COMUNA LO ESPEJO<br />\
    <img src="styles/legend/_4_87.png" /> MEJORAMIENTO PLAZA BUENAVENTURA<br />\
    <img src="styles/legend/_4_88.png" /> MEJORAMIENTO PLAZA CAMPECHE COMUNA DE LO ESPEJO<br />\
    <img src="styles/legend/_4_89.png" /> MEJORAMIENTO PLAZA CRESOL COMUNA DE LO ESPEJO<br />\
    <img src="styles/legend/_4_90.png" /> MEJORAMIENTO PLAZA FERROCARRIL COMUNA DE LO ESPEJO<br />\
    <img src="styles/legend/_4_91.png" /> MEJORAMIENTO PLAZA GABRIELA MISTRAL<br />\
    <img src="styles/legend/_4_92.png" /> MEJORAMIENTO PLAZA LA ALEGRÍA<br />\
    <img src="styles/legend/_4_93.png" /> MEJORAMIENTO PLAZA LA AMISTAD<br />\
    <img src="styles/legend/_4_94.png" /> MEJORAMIENTO PLAZA LA HABANA<br />\
    <img src="styles/legend/_4_95.png" /> MEJORAMIENTO PLAZA LIMITE URBANO<br />\
    <img src="styles/legend/_4_96.png" /> MEJORAMIENTO PLAZA MANUEL RODRIGUEZ COMUNA DE LO ESPEJO<br />\
    <img src="styles/legend/_4_97.png" /> MEJORAMIENTO PLAZA UNIDAD VECINAL 31, COMUNA DE LO ESPEJO (MAUSOLEO)<br />\
    <img src="styles/legend/_4_98.png" /> MEJORAMIENTO RUTA PEATONAL PABLO  NERUDA<br />\
    <img src="styles/legend/_4_99.png" /> MEJORAMIENTO SALA MULTIUSO<br />\
    <img src="styles/legend/_4_100.png" /> MEJORAMIENTO SEGURIDAD ESCUELA BLUE STAR COLLEGE<br />\
    <img src="styles/legend/_4_101.png" /> PLATABANDA SUSTENTABLE CLUB DEL ADULTO MAYOR MARÍA JESÚS (CONSTRUCCIÓN PLATABANDA AUGUSTO D’HALMAR TRAMO 2)<br />\
    <img src="styles/legend/_4_102.png" /> PLATABANDA SUSTENTABLE COMITÉ DE ADELANTO SOCIAL Y CULTURAL DEPORTIVO Y DE SEGURIDAD MANDIOLA Y COMPAÑÍA (CONSTRUCCIÓN PLATABANDA AUGUSTO D’HALMAR TRAMO 1)<br />\
    <img src="styles/legend/_4_103.png" /> PLAZA SUSTENTABLE JUNTA DE VECINOS PUEBLO LO ESPEJO UNIDAD VECINAL 37-A<br />\
    <img src="styles/legend/_4_104.png" /> PROVISIÓN E INSTALACIÓN CIERRE PERIMETAL VESPUCIO GUADALUPE<br />\
    <img src="styles/legend/_4_105.png" /> PROVISIÓN E INSTALACIÓN DE CONTAINERS<br />\
    <img src="styles/legend/_4_106.png" /> RECUPERACION MULTICANCHA SANTA CECILIA<br />\
    <img src="styles/legend/_4_107.png" /> RECUPERACIÓN PLATABANDA ADOLFO LOPEZ MATEO II<br />\
    <img src="styles/legend/_4_108.png" /> REMODELACIÓN CAMARINES Y SSHH ESTADIO CLARA ESTRELLA<br />\
    <img src="styles/legend/_4_109.png" /> REPOSICIÓN CANCHA CLUB DEPORTIVO SANTA OLGA<br />\
    <img src="styles/legend/_4_110.png" /> REPOSICION CANCHA DE BABY FUTBOL CD LOS 56 UNIDOS<br />\
    <img src="styles/legend/_4_111.png" /> REPOSICION CONSULTORIO JULIO ACUNA PINZON (JAP)<br />\
    <img src="styles/legend/_4_112.png" /> REPOSICIÓN CUBIERTA ASBESTO CEMENTO LICEO POLIVALENTE N°133<br />\
    <img src="styles/legend/_4_113.png" /> REPOSICION DE OCTAVA COMPANIA DE BOMBEROS METROPOLITANA<br />\
    <img src="styles/legend/_4_114.png" /> REPOSICION ESTADIO CLARA ESTRELLA<br />\
    <img src="styles/legend/_4_115.png" /> REPOSICIÓN SANITARIA CONDOMINIO DE VIVIENDA SOCIAL VALENZUELA LLANOS<br />\
    <img src="styles/legend/_4_116.png" /> SPD RECUPERACION DE ESPACIO PUBLICO PEDRO PRADO<br />'
        });
var format_LmiteComunal_5 = new ol.format.GeoJSON();
var features_LmiteComunal_5 = format_LmiteComunal_5.readFeatures(json_LmiteComunal_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LmiteComunal_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LmiteComunal_5.addFeatures(features_LmiteComunal_5);
var lyr_LmiteComunal_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LmiteComunal_5, 
                style: style_LmiteComunal_5,
                popuplayertitle: "Límite Comunal",
                interactive: false,
                    title: '<img src="styles/legend/LmiteComunal_5.png" /> Límite Comunal'
                });
var format_UnidadesVecinales_6 = new ol.format.GeoJSON();
var features_UnidadesVecinales_6 = format_UnidadesVecinales_6.readFeatures(json_UnidadesVecinales_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnidadesVecinales_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesVecinales_6.addFeatures(features_UnidadesVecinales_6);
var lyr_UnidadesVecinales_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesVecinales_6, 
                style: style_UnidadesVecinales_6,
                popuplayertitle: "Unidades Vecinales",
                interactive: false,
                    title: '<img src="styles/legend/UnidadesVecinales_6.png" /> Unidades Vecinales'
                });

lyr_GoogleSatellite_0.setVisible(true);lyr_Positronretina_1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr_LmiteComunal_5.setVisible(true);lyr_UnidadesVecinales_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Positronretina_1,lyr__2,lyr__3,lyr__4,lyr_LmiteComunal_5,lyr_UnidadesVecinales_6];
lyr__2.set('fieldAliases', {'COD_SIG': 'COD_SIG', 'NOMBRE_2': 'NOMBRE_2', 'FINAN_': 'FINAN_', 'LINEA': 'LINEA', 'CATEGORIA': 'CATEGORIA', 'COD': 'COD', 'ID': 'ID', 'MONTO': 'MONTO', 'RES': 'RES', 'ANO': 'ANO', 'CICLO_V': 'CICLO_V', 'ESTADO': 'ESTADO', 'DET_ESTADO': 'DET_ESTADO', });
lyr__3.set('fieldAliases', {'id': 'id', 'NOMBRE': 'NOMBRE', 'COD_SIG': 'COD_SIG', 'FINAN_': 'FINAN_', 'LINEA': 'LINEA', 'CATEGORIA': 'CATEGORIA', 'COD': 'COD', 'ID_1': 'ID_1', 'MONTO': 'MONTO', 'RES': 'RES', 'ANO': 'ANO', 'CICLO_V': 'CICLO_V', 'ESTADO': 'ESTADO', 'DET_ESTADO': 'DET_ESTADO', 'field_14': 'field_14', });
lyr__4.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'COD_SIG': 'COD_SIG', 'FINAN_': 'FINAN_', 'LINEA': 'LINEA', 'CATEGORIA': 'CATEGORIA', 'COD': 'COD', 'ID': 'ID', 'MONTO': 'MONTO', 'RES': 'RES', 'ANO': 'ANO', 'CICLO_V': 'CICLO_V', 'ESTADO': 'ESTADO', 'DET_ESTADO': 'DET_ESTADO', });
lyr_LmiteComunal_5.set('fieldAliases', {'FID': 'FID', 'REGION': 'REGION', 'NOM_REGION': 'NOM_REGION', 'PROVINCIA': 'PROVINCIA', 'NOM_PROVIN': 'NOM_PROVIN', 'COMUNA': 'COMUNA', 'NOM_COMUNA': 'NOM_COMUNA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'CUT': 'CUT', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'GlobalID': 'GlobalID', });
lyr_UnidadesVecinales_6.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'T_COM_NOM': 'T_COM_NOM', 'ID': 'ID', 'OBJECTID_2': 'OBJECTID_2', 'T_COM': 'T_COM', 'UV_CARTO': 'UV_CARTO', 'T_UV_NOM': 'T_UV_NOM', 'T_REG_CA': 'T_REG_CA', 'T_REG_NOM': 'T_REG_NOM', 'T_PROV_CA': 'T_PROV_CA', 'T_PROV_NOM': 'T_PROV_NOM', 'T_ID_UV_CA': 'T_ID_UV_CA', 'UV': 'UV', 'UVFID_1': 'UVFID_1', 'UVLayer': 'UVLayer', 'UVPaperSpa': 'UVPaperSpa', 'UVSubClass': 'UVSubClass', 'UVLinetype': 'UVLinetype', 'UVEntityHa': 'UVEntityHa', 'UVPOBLACI�': 'UVPOBLACI�', });
lyr__2.set('fieldImages', {'COD_SIG': 'TextEdit', 'NOMBRE_2': 'TextEdit', 'FINAN_': 'TextEdit', 'LINEA': 'TextEdit', 'CATEGORIA': 'TextEdit', 'COD': 'TextEdit', 'ID': 'TextEdit', 'MONTO': 'TextEdit', 'RES': 'TextEdit', 'ANO': 'TextEdit', 'CICLO_V': 'TextEdit', 'ESTADO': 'TextEdit', 'DET_ESTADO': 'TextEdit', });
lyr__3.set('fieldImages', {'id': 'TextEdit', 'NOMBRE': 'TextEdit', 'COD_SIG': 'TextEdit', 'FINAN_': 'TextEdit', 'LINEA': 'TextEdit', 'CATEGORIA': 'TextEdit', 'COD': 'TextEdit', 'ID_1': 'TextEdit', 'MONTO': 'TextEdit', 'RES': 'TextEdit', 'ANO': 'TextEdit', 'CICLO_V': 'TextEdit', 'ESTADO': 'TextEdit', 'DET_ESTADO': 'TextEdit', 'field_14': 'TextEdit', });
lyr__4.set('fieldImages', {'NOMBRE': 'TextEdit', 'COD_SIG': 'TextEdit', 'FINAN_': 'TextEdit', 'LINEA': 'TextEdit', 'CATEGORIA': 'TextEdit', 'COD': 'TextEdit', 'ID': 'TextEdit', 'MONTO': 'TextEdit', 'RES': 'TextEdit', 'ANO': 'TextEdit', 'CICLO_V': 'TextEdit', 'ESTADO': 'TextEdit', 'DET_ESTADO': 'TextEdit', });
lyr_LmiteComunal_5.set('fieldImages', {'FID': 'Range', 'REGION': 'TextEdit', 'NOM_REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'NOM_PROVIN': 'TextEdit', 'COMUNA': 'TextEdit', 'NOM_COMUNA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'CUT': 'Range', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'GlobalID': 'TextEdit', });
lyr_UnidadesVecinales_6.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'T_COM_NOM': 'TextEdit', 'ID': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'T_COM': 'TextEdit', 'UV_CARTO': 'TextEdit', 'T_UV_NOM': 'TextEdit', 'T_REG_CA': 'TextEdit', 'T_REG_NOM': 'TextEdit', 'T_PROV_CA': 'TextEdit', 'T_PROV_NOM': 'TextEdit', 'T_ID_UV_CA': 'TextEdit', 'UV': 'TextEdit', 'UVFID_1': 'Range', 'UVLayer': 'TextEdit', 'UVPaperSpa': 'TextEdit', 'UVSubClass': 'TextEdit', 'UVLinetype': 'TextEdit', 'UVEntityHa': 'TextEdit', 'UVPOBLACI�': 'TextEdit', });
lyr__2.set('fieldLabels', {'COD_SIG': 'no label', 'NOMBRE_2': 'inline label - always visible', 'FINAN_': 'inline label - always visible', 'LINEA': 'inline label - always visible', 'CATEGORIA': 'inline label - always visible', 'COD': 'inline label - always visible', 'ID': 'inline label - always visible', 'MONTO': 'inline label - always visible', 'RES': 'inline label - always visible', 'ANO': 'inline label - always visible', 'CICLO_V': 'inline label - always visible', 'ESTADO': 'inline label - always visible', 'DET_ESTADO': 'inline label - always visible', });
lyr__3.set('fieldLabels', {'id': 'no label', 'NOMBRE': 'inline label - always visible', 'COD_SIG': 'no label', 'FINAN_': 'inline label - always visible', 'LINEA': 'inline label - always visible', 'CATEGORIA': 'inline label - always visible', 'COD': 'inline label - always visible', 'ID_1': 'inline label - always visible', 'MONTO': 'inline label - always visible', 'RES': 'inline label - always visible', 'ANO': 'inline label - always visible', 'CICLO_V': 'inline label - always visible', 'ESTADO': 'inline label - always visible', 'DET_ESTADO': 'inline label - always visible', 'field_14': 'no label', });
lyr__4.set('fieldLabels', {'NOMBRE': 'inline label - always visible', 'COD_SIG': 'inline label - always visible', 'FINAN_': 'inline label - always visible', 'LINEA': 'inline label - always visible', 'CATEGORIA': 'inline label - always visible', 'COD': 'inline label - always visible', 'ID': 'inline label - always visible', 'MONTO': 'inline label - always visible', 'RES': 'inline label - always visible', 'ANO': 'inline label - always visible', 'CICLO_V': 'inline label - always visible', 'ESTADO': 'inline label - always visible', 'DET_ESTADO': 'inline label - always visible', });
lyr_LmiteComunal_5.set('fieldLabels', {'FID': 'no label', 'REGION': 'no label', 'NOM_REGION': 'no label', 'PROVINCIA': 'no label', 'NOM_PROVIN': 'no label', 'COMUNA': 'no label', 'NOM_COMUNA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'CUT': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'GlobalID': 'no label', });
lyr_UnidadesVecinales_6.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'T_COM_NOM': 'no label', 'ID': 'no label', 'OBJECTID_2': 'no label', 'T_COM': 'no label', 'UV_CARTO': 'no label', 'T_UV_NOM': 'no label', 'T_REG_CA': 'no label', 'T_REG_NOM': 'no label', 'T_PROV_CA': 'no label', 'T_PROV_NOM': 'no label', 'T_ID_UV_CA': 'no label', 'UV': 'no label', 'UVFID_1': 'no label', 'UVLayer': 'no label', 'UVPaperSpa': 'no label', 'UVSubClass': 'no label', 'UVLinetype': 'no label', 'UVEntityHa': 'no label', 'UVPOBLACI�': 'no label', });
lyr_UnidadesVecinales_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
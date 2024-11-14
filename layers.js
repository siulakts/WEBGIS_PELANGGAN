ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([101.343300, -1.972731, 101.369141, -1.958912]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_1 = format_ADMINISTRASIKECAMATAN_AR_50K_1.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_1);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_1,
                popuplayertitle: "ADMINISTRASIKECAMATAN_AR_50K",
                interactive: false,
    title: 'ADMINISTRASIKECAMATAN_AR_50K<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_0.png" /> <br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_1.png" /> AIRHANGAT<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_2.png" /> AIRHANGAT BARAT<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_3.png" /> AIRHANGAT TIMUR<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_4.png" /> BATANGMERANGIN<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_5.png" /> BUKITKERMAN<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_6.png" /> DANAUKERINCI<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_7.png" /> DEPATI TUJUH<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_8.png" /> GUNUNGKERINCI<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_9.png" /> GUNUNGRAYA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_10.png" /> GUNUNGTUJUH<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_11.png" /> KAYUARO<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_12.png" /> KAYUARO BARAT<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_13.png" /> KELILINGDANAU<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_14.png" /> SITUNJAULAUT<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_15.png" /> SIULAK<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_16.png" /> SIULAKMUKAI<br />'
        });
var format_PipaEksisting_2 = new ol.format.GeoJSON();
var features_PipaEksisting_2 = format_PipaEksisting_2.readFeatures(json_PipaEksisting_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PipaEksisting_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PipaEksisting_2.addFeatures(features_PipaEksisting_2);
var lyr_PipaEksisting_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PipaEksisting_2, 
                style: style_PipaEksisting_2,
                popuplayertitle: "Pipa Eksisting",
                interactive: true,
                title: '<img src="styles/legend/PipaEksisting_2.png" /> Pipa Eksisting'
            });
var format_JUMLAHHUNI_3 = new ol.format.GeoJSON();
var features_JUMLAHHUNI_3 = format_JUMLAHHUNI_3.readFeatures(json_JUMLAHHUNI_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JUMLAHHUNI_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JUMLAHHUNI_3.addFeatures(features_JUMLAHHUNI_3);
var lyr_JUMLAHHUNI_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JUMLAHHUNI_3, 
                style: style_JUMLAHHUNI_3,
                popuplayertitle: "JUMLAH HUNI",
                interactive: true,
    title: 'JUMLAH HUNI<br />\
    <img src="styles/legend/JUMLAHHUNI_3_0.png" /> 1<br />\
    <img src="styles/legend/JUMLAHHUNI_3_1.png" /> 2<br />\
    <img src="styles/legend/JUMLAHHUNI_3_2.png" /> 3<br />\
    <img src="styles/legend/JUMLAHHUNI_3_3.png" /> 4<br />\
    <img src="styles/legend/JUMLAHHUNI_3_4.png" /> 5<br />\
    <img src="styles/legend/JUMLAHHUNI_3_5.png" /> 6<br />\
    <img src="styles/legend/JUMLAHHUNI_3_6.png" /> 7<br />\
    <img src="styles/legend/JUMLAHHUNI_3_7.png" /> 8<br />\
    <img src="styles/legend/JUMLAHHUNI_3_8.png" /> 15<br />\
    <img src="styles/legend/JUMLAHHUNI_3_9.png" /> <br />'
        });
var format_KONDISIMETER_4 = new ol.format.GeoJSON();
var features_KONDISIMETER_4 = format_KONDISIMETER_4.readFeatures(json_KONDISIMETER_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KONDISIMETER_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KONDISIMETER_4.addFeatures(features_KONDISIMETER_4);
var lyr_KONDISIMETER_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KONDISIMETER_4, 
                style: style_KONDISIMETER_4,
                popuplayertitle: "KONDISI METER",
                interactive: true,
    title: 'KONDISI METER<br />\
    <img src="styles/legend/KONDISIMETER_4_0.png" /> Standar<br />\
    <img src="styles/legend/KONDISIMETER_4_1.png" /> Tertimbun<br />\
    <img src="styles/legend/KONDISIMETER_4_2.png" /> <br />'
        });
var format_MEREKMETER_5 = new ol.format.GeoJSON();
var features_MEREKMETER_5 = format_MEREKMETER_5.readFeatures(json_MEREKMETER_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MEREKMETER_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MEREKMETER_5.addFeatures(features_MEREKMETER_5);
var lyr_MEREKMETER_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MEREKMETER_5, 
                style: style_MEREKMETER_5,
                popuplayertitle: "MEREK METER",
                interactive: true,
    title: 'MEREK METER<br />\
    <img src="styles/legend/MEREKMETER_5_0.png" /> Akurat<br />\
    <img src="styles/legend/MEREKMETER_5_1.png" /> Amico<br />\
    <img src="styles/legend/MEREKMETER_5_2.png" /> Aquindo<br />\
    <img src="styles/legend/MEREKMETER_5_3.png" /> Barindo<br />\
    <img src="styles/legend/MEREKMETER_5_4.png" /> BR<br />\
    <img src="styles/legend/MEREKMETER_5_5.png" /> HDPE<br />\
    <img src="styles/legend/MEREKMETER_5_6.png" /> ISO<br />\
    <img src="styles/legend/MEREKMETER_5_7.png" /> Itron<br />\
    <img src="styles/legend/MEREKMETER_5_8.png" /> Linflow<br />\
    <img src="styles/legend/MEREKMETER_5_9.png" /> Liron<br />\
    <img src="styles/legend/MEREKMETER_5_10.png" /> Onda<br />\
    <img src="styles/legend/MEREKMETER_5_11.png" /> Ultimag<br />\
    <img src="styles/legend/MEREKMETER_5_12.png" /> <br />'
        });
var format_POSISIMETERAN_6 = new ol.format.GeoJSON();
var features_POSISIMETERAN_6 = format_POSISIMETERAN_6.readFeatures(json_POSISIMETERAN_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_POSISIMETERAN_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POSISIMETERAN_6.addFeatures(features_POSISIMETERAN_6);
var lyr_POSISIMETERAN_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POSISIMETERAN_6, 
                style: style_POSISIMETERAN_6,
                popuplayertitle: "POSISI METERAN",
                interactive: true,
    title: 'POSISI METERAN<br />\
    <img src="styles/legend/POSISIMETERAN_6_0.png" /> <br />\
    <img src="styles/legend/POSISIMETERAN_6_1.png" /> Belakang<br />\
    <img src="styles/legend/POSISIMETERAN_6_2.png" /> Depan<br />\
    <img src="styles/legend/POSISIMETERAN_6_3.png" /> di Dalam<br />\
    <img src="styles/legend/POSISIMETERAN_6_4.png" /> Samping<br />'
        });
var format_SUMBERAIR_7 = new ol.format.GeoJSON();
var features_SUMBERAIR_7 = format_SUMBERAIR_7.readFeatures(json_SUMBERAIR_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SUMBERAIR_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMBERAIR_7.addFeatures(features_SUMBERAIR_7);
var lyr_SUMBERAIR_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMBERAIR_7, 
                style: style_SUMBERAIR_7,
                popuplayertitle: "SUMBER AIR",
                interactive: true,
    title: 'SUMBER AIR<br />\
    <img src="styles/legend/SUMBERAIR_7_0.png" /> IPAS Desa<br />\
    <img src="styles/legend/SUMBERAIR_7_1.png" /> Tidak Ada<br />\
    <img src="styles/legend/SUMBERAIR_7_2.png" /> <br />'
        });
var format_BANGUNAN_PELANGGAN_8 = new ol.format.GeoJSON();
var features_BANGUNAN_PELANGGAN_8 = format_BANGUNAN_PELANGGAN_8.readFeatures(json_BANGUNAN_PELANGGAN_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BANGUNAN_PELANGGAN_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_PELANGGAN_8.addFeatures(features_BANGUNAN_PELANGGAN_8);
var lyr_BANGUNAN_PELANGGAN_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNAN_PELANGGAN_8, 
                style: style_BANGUNAN_PELANGGAN_8,
                popuplayertitle: "BANGUNAN_PELANGGAN",
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN_PELANGGAN_8.png" /> BANGUNAN_PELANGGAN'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_50K_1.setVisible(true);lyr_PipaEksisting_2.setVisible(true);lyr_JUMLAHHUNI_3.setVisible(true);lyr_KONDISIMETER_4.setVisible(true);lyr_MEREKMETER_5.setVisible(true);lyr_POSISIMETERAN_6.setVisible(true);lyr_SUMBERAIR_7.setVisible(true);lyr_BANGUNAN_PELANGGAN_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ADMINISTRASIKECAMATAN_AR_50K_1,lyr_PipaEksisting_2,lyr_JUMLAHHUNI_3,lyr_KONDISIMETER_4,lyr_MEREKMETER_5,lyr_POSISIMETERAN_6,lyr_SUMBERAIR_7,lyr_BANGUNAN_PELANGGAN_8];
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PipaEksisting_2.set('fieldAliases', {'id': 'id', 'Diameter': 'Diameter', 'Jenis': 'Jenis', 'Length': 'Length', 'Kedalaman': 'Kedalaman', 'Tahun Pasa': 'Tahun Pasa', 'Pelaksana': 'Pelaksana', 'Sumber Dan': 'Sumber Dan', 'Jenis Jari': 'Jenis Jari', 'Nomor Asb': 'Nomor Asb', 'Nomor SPT': 'Nomor SPT', 'Foto Pipa': 'Foto Pipa', 'Foto Konek': 'Foto Konek', 'Penggambar': 'Penggambar', 'LAYER': 'LAYER', });
lyr_JUMLAHHUNI_3.set('fieldAliases', {'DATA UMUM': 'DATA UMUM', 'ID_2': 'ID_2', 'Nama Pada': 'Nama Pada', 'Nama Pemil': 'Nama Pemil', 'Nama Pengh': 'Nama Pengh', 'Alamat': 'Alamat', 'Kecamatan': 'Kecamatan', 'Telp/Hp': 'Telp/Hp', 'Nomor Samb': 'Nomor Samb', 'Kondisi Ba': 'Kondisi Ba', 'Jenis Bang': 'Jenis Bang', 'Status Ban': 'Status Ban', 'DATA TEKNI': 'DATA TEKNI', 'Meter Air': 'Meter Air', 'Posisi Met': 'Posisi Met', 'Kondisi Me': 'Kondisi Me', 'Merk Meter': 'Merk Meter', 'Segel Mete': 'Segel Mete', 'Box Meter': 'Box Meter', 'Jenis Pipa': 'Jenis Pipa', 'Diameter P': 'Diameter P', 'Koneksi da': 'Koneksi da', 'Kondisi Pi': 'Kondisi Pi', 'DATA SOSIA': 'DATA SOSIA', 'Jumlah Pen': 'Jumlah Pen', 'Sumber Air': 'Sumber Air', 'Keluhan Pe': 'Keluhan Pe', 'Catatan': 'Catatan', 'Y': 'Y', 'X': 'X', 'Photo Ruma': 'Photo Ruma', 'Photo Mete': 'Photo Mete', 'Koord.Lok': 'Koord.Lok', });
lyr_KONDISIMETER_4.set('fieldAliases', {'DATA UMUM': 'DATA UMUM', 'ID_2': 'ID_2', 'Nama Pada': 'Nama Pada', 'Nama Pemil': 'Nama Pemil', 'Nama Pengh': 'Nama Pengh', 'Alamat': 'Alamat', 'Kecamatan': 'Kecamatan', 'Telp/Hp': 'Telp/Hp', 'Nomor Samb': 'Nomor Samb', 'Kondisi Ba': 'Kondisi Ba', 'Jenis Bang': 'Jenis Bang', 'Status Ban': 'Status Ban', 'DATA TEKNI': 'DATA TEKNI', 'Meter Air': 'Meter Air', 'Posisi Met': 'Posisi Met', 'Kondisi Me': 'Kondisi Me', 'Merk Meter': 'Merk Meter', 'Segel Mete': 'Segel Mete', 'Box Meter': 'Box Meter', 'Jenis Pipa': 'Jenis Pipa', 'Diameter P': 'Diameter P', 'Koneksi da': 'Koneksi da', 'Kondisi Pi': 'Kondisi Pi', 'DATA SOSIA': 'DATA SOSIA', 'Jumlah Pen': 'Jumlah Pen', 'Sumber Air': 'Sumber Air', 'Keluhan Pe': 'Keluhan Pe', 'Catatan': 'Catatan', 'Y': 'Y', 'X': 'X', 'Photo Ruma': 'Photo Ruma', 'Photo Mete': 'Photo Mete', 'Koord.Lok': 'Koord.Lok', });
lyr_MEREKMETER_5.set('fieldAliases', {'DATA UMUM': 'DATA UMUM', 'ID_2': 'ID_2', 'Nama Pada': 'Nama Pada', 'Nama Pemil': 'Nama Pemil', 'Nama Pengh': 'Nama Pengh', 'Alamat': 'Alamat', 'Kecamatan': 'Kecamatan', 'Telp/Hp': 'Telp/Hp', 'Nomor Samb': 'Nomor Samb', 'Kondisi Ba': 'Kondisi Ba', 'Jenis Bang': 'Jenis Bang', 'Status Ban': 'Status Ban', 'DATA TEKNI': 'DATA TEKNI', 'Meter Air': 'Meter Air', 'Posisi Met': 'Posisi Met', 'Kondisi Me': 'Kondisi Me', 'Merk Meter': 'Merk Meter', 'Segel Mete': 'Segel Mete', 'Box Meter': 'Box Meter', 'Jenis Pipa': 'Jenis Pipa', 'Diameter P': 'Diameter P', 'Koneksi da': 'Koneksi da', 'Kondisi Pi': 'Kondisi Pi', 'DATA SOSIA': 'DATA SOSIA', 'Jumlah Pen': 'Jumlah Pen', 'Sumber Air': 'Sumber Air', 'Keluhan Pe': 'Keluhan Pe', 'Catatan': 'Catatan', 'Y': 'Y', 'X': 'X', 'Photo Ruma': 'Photo Ruma', 'Photo Mete': 'Photo Mete', 'Koord.Lok': 'Koord.Lok', });
lyr_POSISIMETERAN_6.set('fieldAliases', {'DATA UMUM': 'DATA UMUM', 'ID_2': 'ID_2', 'Nama Pada': 'Nama Pada', 'Nama Pemil': 'Nama Pemil', 'Nama Pengh': 'Nama Pengh', 'Alamat': 'Alamat', 'Kecamatan': 'Kecamatan', 'Telp/Hp': 'Telp/Hp', 'Nomor Samb': 'Nomor Samb', 'Kondisi Ba': 'Kondisi Ba', 'Jenis Bang': 'Jenis Bang', 'Status Ban': 'Status Ban', 'DATA TEKNI': 'DATA TEKNI', 'Meter Air': 'Meter Air', 'Posisi Met': 'Posisi Met', 'Kondisi Me': 'Kondisi Me', 'Merk Meter': 'Merk Meter', 'Segel Mete': 'Segel Mete', 'Box Meter': 'Box Meter', 'Jenis Pipa': 'Jenis Pipa', 'Diameter P': 'Diameter P', 'Koneksi da': 'Koneksi da', 'Kondisi Pi': 'Kondisi Pi', 'DATA SOSIA': 'DATA SOSIA', 'Jumlah Pen': 'Jumlah Pen', 'Sumber Air': 'Sumber Air', 'Keluhan Pe': 'Keluhan Pe', 'Catatan': 'Catatan', 'Y': 'Y', 'X': 'X', 'Photo Ruma': 'Photo Ruma', 'Photo Mete': 'Photo Mete', 'Koord.Lok': 'Koord.Lok', });
lyr_SUMBERAIR_7.set('fieldAliases', {'DATA UMUM': 'DATA UMUM', 'ID_2': 'ID_2', 'Nama Pada': 'Nama Pada', 'Nama Pemil': 'Nama Pemil', 'Nama Pengh': 'Nama Pengh', 'Alamat': 'Alamat', 'Kecamatan': 'Kecamatan', 'Telp/Hp': 'Telp/Hp', 'Nomor Samb': 'Nomor Samb', 'Kondisi Ba': 'Kondisi Ba', 'Jenis Bang': 'Jenis Bang', 'Status Ban': 'Status Ban', 'DATA TEKNI': 'DATA TEKNI', 'Meter Air': 'Meter Air', 'Posisi Met': 'Posisi Met', 'Kondisi Me': 'Kondisi Me', 'Merk Meter': 'Merk Meter', 'Segel Mete': 'Segel Mete', 'Box Meter': 'Box Meter', 'Jenis Pipa': 'Jenis Pipa', 'Diameter P': 'Diameter P', 'Koneksi da': 'Koneksi da', 'Kondisi Pi': 'Kondisi Pi', 'DATA SOSIA': 'DATA SOSIA', 'Jumlah Pen': 'Jumlah Pen', 'Sumber Air': 'Sumber Air', 'Keluhan Pe': 'Keluhan Pe', 'Catatan': 'Catatan', 'Y': 'Y', 'X': 'X', 'Photo Ruma': 'Photo Ruma', 'Photo Mete': 'Photo Mete', 'Koord.Lok': 'Koord.Lok', });
lyr_BANGUNAN_PELANGGAN_8.set('fieldAliases', {'DATA UMUM': 'DATA UMUM', 'ID_2': 'ID_2', 'Nama Pada': 'Nama Pada', 'Nama Pemil': 'Nama Pemil', 'Nama Pengh': 'Nama Pengh', 'Alamat': 'Alamat', 'Kecamatan': 'Kecamatan', 'Telp/Hp': 'Telp/Hp', 'Nomor Samb': 'Nomor Samb', 'Kondisi Ba': 'Kondisi Ba', 'Jenis Bang': 'Jenis Bang', 'Status Ban': 'Status Ban', 'DATA TEKNI': 'DATA TEKNI', 'Meter Air': 'Meter Air', 'Posisi Met': 'Posisi Met', 'Kondisi Me': 'Kondisi Me', 'Merk Meter': 'Merk Meter', 'Segel Mete': 'Segel Mete', 'Box Meter': 'Box Meter', 'Jenis Pipa': 'Jenis Pipa', 'Diameter P': 'Diameter P', 'Koneksi da': 'Koneksi da', 'Kondisi Pi': 'Kondisi Pi', 'DATA SOSIA': 'DATA SOSIA', 'Jumlah Pen': 'Jumlah Pen', 'Sumber Air': 'Sumber Air', 'Keluhan Pe': 'Keluhan Pe', 'Catatan': 'Catatan', 'Y': 'Y', 'X': 'X', 'Photo Ruma': 'Photo Ruma', 'Photo Mete': 'Photo Mete', 'Koord.Lok': 'Koord.Lok', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PipaEksisting_2.set('fieldImages', {'id': 'TextEdit', 'Diameter': 'TextEdit', 'Jenis': 'TextEdit', 'Length': 'TextEdit', 'Kedalaman': 'TextEdit', 'Tahun Pasa': 'Range', 'Pelaksana': 'TextEdit', 'Sumber Dan': 'TextEdit', 'Jenis Jari': 'TextEdit', 'Nomor Asb': 'TextEdit', 'Nomor SPT': 'TextEdit', 'Foto Pipa': 'TextEdit', 'Foto Konek': 'TextEdit', 'Penggambar': 'TextEdit', 'LAYER': 'TextEdit', });
lyr_JUMLAHHUNI_3.set('fieldImages', {'DATA UMUM': 'TextEdit', 'ID_2': 'TextEdit', 'Nama Pada': 'TextEdit', 'Nama Pemil': 'TextEdit', 'Nama Pengh': 'TextEdit', 'Alamat': 'TextEdit', 'Kecamatan': 'TextEdit', 'Telp/Hp': 'TextEdit', 'Nomor Samb': 'TextEdit', 'Kondisi Ba': 'TextEdit', 'Jenis Bang': 'TextEdit', 'Status Ban': 'TextEdit', 'DATA TEKNI': 'TextEdit', 'Meter Air': 'TextEdit', 'Posisi Met': 'TextEdit', 'Kondisi Me': 'TextEdit', 'Merk Meter': 'TextEdit', 'Segel Mete': 'TextEdit', 'Box Meter': 'TextEdit', 'Jenis Pipa': 'TextEdit', 'Diameter P': 'TextEdit', 'Koneksi da': 'TextEdit', 'Kondisi Pi': 'TextEdit', 'DATA SOSIA': 'TextEdit', 'Jumlah Pen': 'TextEdit', 'Sumber Air': 'TextEdit', 'Keluhan Pe': 'TextEdit', 'Catatan': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Photo Ruma': 'TextEdit', 'Photo Mete': 'TextEdit', 'Koord.Lok': 'TextEdit', });
lyr_KONDISIMETER_4.set('fieldImages', {'DATA UMUM': 'TextEdit', 'ID_2': 'TextEdit', 'Nama Pada': 'TextEdit', 'Nama Pemil': 'TextEdit', 'Nama Pengh': 'TextEdit', 'Alamat': 'TextEdit', 'Kecamatan': 'TextEdit', 'Telp/Hp': 'TextEdit', 'Nomor Samb': 'TextEdit', 'Kondisi Ba': 'TextEdit', 'Jenis Bang': 'TextEdit', 'Status Ban': 'TextEdit', 'DATA TEKNI': 'TextEdit', 'Meter Air': 'TextEdit', 'Posisi Met': 'TextEdit', 'Kondisi Me': 'TextEdit', 'Merk Meter': 'TextEdit', 'Segel Mete': 'TextEdit', 'Box Meter': 'TextEdit', 'Jenis Pipa': 'TextEdit', 'Diameter P': 'TextEdit', 'Koneksi da': 'TextEdit', 'Kondisi Pi': 'TextEdit', 'DATA SOSIA': 'TextEdit', 'Jumlah Pen': 'TextEdit', 'Sumber Air': 'TextEdit', 'Keluhan Pe': 'TextEdit', 'Catatan': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Photo Ruma': 'TextEdit', 'Photo Mete': 'TextEdit', 'Koord.Lok': 'TextEdit', });
lyr_MEREKMETER_5.set('fieldImages', {'DATA UMUM': 'TextEdit', 'ID_2': 'TextEdit', 'Nama Pada': 'TextEdit', 'Nama Pemil': 'TextEdit', 'Nama Pengh': 'TextEdit', 'Alamat': 'TextEdit', 'Kecamatan': 'TextEdit', 'Telp/Hp': 'TextEdit', 'Nomor Samb': 'TextEdit', 'Kondisi Ba': 'TextEdit', 'Jenis Bang': 'TextEdit', 'Status Ban': 'TextEdit', 'DATA TEKNI': 'TextEdit', 'Meter Air': 'TextEdit', 'Posisi Met': 'TextEdit', 'Kondisi Me': 'TextEdit', 'Merk Meter': 'TextEdit', 'Segel Mete': 'TextEdit', 'Box Meter': 'TextEdit', 'Jenis Pipa': 'TextEdit', 'Diameter P': 'TextEdit', 'Koneksi da': 'TextEdit', 'Kondisi Pi': 'TextEdit', 'DATA SOSIA': 'TextEdit', 'Jumlah Pen': 'TextEdit', 'Sumber Air': 'TextEdit', 'Keluhan Pe': 'TextEdit', 'Catatan': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Photo Ruma': 'TextEdit', 'Photo Mete': 'TextEdit', 'Koord.Lok': 'TextEdit', });
lyr_POSISIMETERAN_6.set('fieldImages', {'DATA UMUM': 'TextEdit', 'ID_2': 'TextEdit', 'Nama Pada': 'TextEdit', 'Nama Pemil': 'TextEdit', 'Nama Pengh': 'TextEdit', 'Alamat': 'TextEdit', 'Kecamatan': 'TextEdit', 'Telp/Hp': 'TextEdit', 'Nomor Samb': 'TextEdit', 'Kondisi Ba': 'TextEdit', 'Jenis Bang': 'TextEdit', 'Status Ban': 'TextEdit', 'DATA TEKNI': 'TextEdit', 'Meter Air': 'TextEdit', 'Posisi Met': 'TextEdit', 'Kondisi Me': 'TextEdit', 'Merk Meter': 'TextEdit', 'Segel Mete': 'TextEdit', 'Box Meter': 'TextEdit', 'Jenis Pipa': 'TextEdit', 'Diameter P': 'TextEdit', 'Koneksi da': 'TextEdit', 'Kondisi Pi': 'TextEdit', 'DATA SOSIA': 'TextEdit', 'Jumlah Pen': 'TextEdit', 'Sumber Air': 'TextEdit', 'Keluhan Pe': 'TextEdit', 'Catatan': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Photo Ruma': 'TextEdit', 'Photo Mete': 'TextEdit', 'Koord.Lok': 'TextEdit', });
lyr_SUMBERAIR_7.set('fieldImages', {'DATA UMUM': 'TextEdit', 'ID_2': 'TextEdit', 'Nama Pada': 'TextEdit', 'Nama Pemil': 'TextEdit', 'Nama Pengh': 'TextEdit', 'Alamat': 'TextEdit', 'Kecamatan': 'TextEdit', 'Telp/Hp': 'TextEdit', 'Nomor Samb': 'TextEdit', 'Kondisi Ba': 'TextEdit', 'Jenis Bang': 'TextEdit', 'Status Ban': 'TextEdit', 'DATA TEKNI': 'TextEdit', 'Meter Air': 'TextEdit', 'Posisi Met': 'TextEdit', 'Kondisi Me': 'TextEdit', 'Merk Meter': 'TextEdit', 'Segel Mete': 'TextEdit', 'Box Meter': 'TextEdit', 'Jenis Pipa': 'TextEdit', 'Diameter P': 'TextEdit', 'Koneksi da': 'TextEdit', 'Kondisi Pi': 'TextEdit', 'DATA SOSIA': 'TextEdit', 'Jumlah Pen': 'TextEdit', 'Sumber Air': 'TextEdit', 'Keluhan Pe': 'TextEdit', 'Catatan': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Photo Ruma': 'TextEdit', 'Photo Mete': 'TextEdit', 'Koord.Lok': 'TextEdit', });
lyr_BANGUNAN_PELANGGAN_8.set('fieldImages', {'DATA UMUM': '', 'ID_2': '', 'Nama Pada': '', 'Nama Pemil': '', 'Nama Pengh': '', 'Alamat': '', 'Kecamatan': '', 'Telp/Hp': '', 'Nomor Samb': '', 'Kondisi Ba': '', 'Jenis Bang': '', 'Status Ban': '', 'DATA TEKNI': '', 'Meter Air': '', 'Posisi Met': '', 'Kondisi Me': '', 'Merk Meter': '', 'Segel Mete': '', 'Box Meter': '', 'Jenis Pipa': '', 'Diameter P': '', 'Koneksi da': '', 'Kondisi Pi': '', 'DATA SOSIA': '', 'Jumlah Pen': '', 'Sumber Air': '', 'Keluhan Pe': '', 'Catatan': '', 'Y': '', 'X': '', 'Photo Ruma': '', 'Photo Mete': '', 'Koord.Lok': '', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldLabels', {'KDPPUM': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'KDPBPS': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'LUASWH': 'inline label - always visible', 'UUPP': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'KDEBPS': 'inline label - always visible', 'KDEPUM': 'inline label - always visible', 'KDCBPS': 'inline label - always visible', 'KDCPUM': 'inline label - always visible', 'KDBBPS': 'inline label - always visible', 'KDBPUM': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WIADKD': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WIADKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WIADKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WIADPR': 'inline label - always visible', 'TIPADM': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', });
lyr_PipaEksisting_2.set('fieldLabels', {'id': 'inline label - always visible', 'Diameter': 'inline label - always visible', 'Jenis': 'inline label - always visible', 'Length': 'inline label - always visible', 'Kedalaman': 'inline label - always visible', 'Tahun Pasa': 'inline label - always visible', 'Pelaksana': 'inline label - always visible', 'Sumber Dan': 'inline label - always visible', 'Jenis Jari': 'inline label - always visible', 'Nomor Asb': 'inline label - always visible', 'Nomor SPT': 'inline label - always visible', 'Foto Pipa': 'inline label - always visible', 'Foto Konek': 'inline label - always visible', 'Penggambar': 'inline label - always visible', 'LAYER': 'inline label - always visible', });
lyr_JUMLAHHUNI_3.set('fieldLabels', {'DATA UMUM': 'hidden field', 'ID_2': 'inline label - always visible', 'Nama Pada': 'hidden field', 'Nama Pemil': 'hidden field', 'Nama Pengh': 'hidden field', 'Alamat': 'hidden field', 'Kecamatan': 'hidden field', 'Telp/Hp': 'hidden field', 'Nomor Samb': 'hidden field', 'Kondisi Ba': 'hidden field', 'Jenis Bang': 'hidden field', 'Status Ban': 'hidden field', 'DATA TEKNI': 'hidden field', 'Meter Air': 'hidden field', 'Posisi Met': 'hidden field', 'Kondisi Me': 'hidden field', 'Merk Meter': 'hidden field', 'Segel Mete': 'hidden field', 'Box Meter': 'hidden field', 'Jenis Pipa': 'hidden field', 'Diameter P': 'hidden field', 'Koneksi da': 'hidden field', 'Kondisi Pi': 'hidden field', 'DATA SOSIA': 'hidden field', 'Jumlah Pen': 'inline label - always visible', 'Sumber Air': 'hidden field', 'Keluhan Pe': 'hidden field', 'Catatan': 'hidden field', 'Y': 'hidden field', 'X': 'hidden field', 'Photo Ruma': 'hidden field', 'Photo Mete': 'hidden field', 'Koord.Lok': 'hidden field', });
lyr_KONDISIMETER_4.set('fieldLabels', {'DATA UMUM': 'hidden field', 'ID_2': 'inline label - always visible', 'Nama Pada': 'hidden field', 'Nama Pemil': 'hidden field', 'Nama Pengh': 'hidden field', 'Alamat': 'hidden field', 'Kecamatan': 'hidden field', 'Telp/Hp': 'hidden field', 'Nomor Samb': 'hidden field', 'Kondisi Ba': 'hidden field', 'Jenis Bang': 'hidden field', 'Status Ban': 'hidden field', 'DATA TEKNI': 'hidden field', 'Meter Air': 'hidden field', 'Posisi Met': 'hidden field', 'Kondisi Me': 'inline label - always visible', 'Merk Meter': 'hidden field', 'Segel Mete': 'hidden field', 'Box Meter': 'hidden field', 'Jenis Pipa': 'hidden field', 'Diameter P': 'hidden field', 'Koneksi da': 'hidden field', 'Kondisi Pi': 'hidden field', 'DATA SOSIA': 'hidden field', 'Jumlah Pen': 'hidden field', 'Sumber Air': 'hidden field', 'Keluhan Pe': 'hidden field', 'Catatan': 'hidden field', 'Y': 'hidden field', 'X': 'hidden field', 'Photo Ruma': 'hidden field', 'Photo Mete': 'hidden field', 'Koord.Lok': 'hidden field', });
lyr_MEREKMETER_5.set('fieldLabels', {'DATA UMUM': 'hidden field', 'ID_2': 'inline label - visible with data', 'Nama Pada': 'hidden field', 'Nama Pemil': 'hidden field', 'Nama Pengh': 'hidden field', 'Alamat': 'hidden field', 'Kecamatan': 'hidden field', 'Telp/Hp': 'hidden field', 'Nomor Samb': 'hidden field', 'Kondisi Ba': 'hidden field', 'Jenis Bang': 'hidden field', 'Status Ban': 'hidden field', 'DATA TEKNI': 'hidden field', 'Meter Air': 'hidden field', 'Posisi Met': 'hidden field', 'Kondisi Me': 'hidden field', 'Merk Meter': 'inline label - always visible', 'Segel Mete': 'hidden field', 'Box Meter': 'hidden field', 'Jenis Pipa': 'hidden field', 'Diameter P': 'hidden field', 'Koneksi da': 'hidden field', 'Kondisi Pi': 'hidden field', 'DATA SOSIA': 'hidden field', 'Jumlah Pen': 'hidden field', 'Sumber Air': 'hidden field', 'Keluhan Pe': 'hidden field', 'Catatan': 'hidden field', 'Y': 'hidden field', 'X': 'hidden field', 'Photo Ruma': 'hidden field', 'Photo Mete': 'hidden field', 'Koord.Lok': 'hidden field', });
lyr_POSISIMETERAN_6.set('fieldLabels', {'DATA UMUM': 'hidden field', 'ID_2': 'inline label - always visible', 'Nama Pada': 'hidden field', 'Nama Pemil': 'hidden field', 'Nama Pengh': 'hidden field', 'Alamat': 'hidden field', 'Kecamatan': 'hidden field', 'Telp/Hp': 'hidden field', 'Nomor Samb': 'hidden field', 'Kondisi Ba': 'hidden field', 'Jenis Bang': 'hidden field', 'Status Ban': 'hidden field', 'DATA TEKNI': 'hidden field', 'Meter Air': 'hidden field', 'Posisi Met': 'inline label - always visible', 'Kondisi Me': 'hidden field', 'Merk Meter': 'hidden field', 'Segel Mete': 'hidden field', 'Box Meter': 'hidden field', 'Jenis Pipa': 'hidden field', 'Diameter P': 'hidden field', 'Koneksi da': 'hidden field', 'Kondisi Pi': 'hidden field', 'DATA SOSIA': 'hidden field', 'Jumlah Pen': 'hidden field', 'Sumber Air': 'hidden field', 'Keluhan Pe': 'hidden field', 'Catatan': 'hidden field', 'Y': 'hidden field', 'X': 'hidden field', 'Photo Ruma': 'hidden field', 'Photo Mete': 'hidden field', 'Koord.Lok': 'hidden field', });
lyr_SUMBERAIR_7.set('fieldLabels', {'DATA UMUM': 'hidden field', 'ID_2': 'inline label - always visible', 'Nama Pada': 'hidden field', 'Nama Pemil': 'hidden field', 'Nama Pengh': 'hidden field', 'Alamat': 'hidden field', 'Kecamatan': 'hidden field', 'Telp/Hp': 'hidden field', 'Nomor Samb': 'hidden field', 'Kondisi Ba': 'hidden field', 'Jenis Bang': 'hidden field', 'Status Ban': 'hidden field', 'DATA TEKNI': 'hidden field', 'Meter Air': 'hidden field', 'Posisi Met': 'hidden field', 'Kondisi Me': 'hidden field', 'Merk Meter': 'hidden field', 'Segel Mete': 'hidden field', 'Box Meter': 'hidden field', 'Jenis Pipa': 'hidden field', 'Diameter P': 'hidden field', 'Koneksi da': 'hidden field', 'Kondisi Pi': 'hidden field', 'DATA SOSIA': 'hidden field', 'Jumlah Pen': 'hidden field', 'Sumber Air': 'inline label - always visible', 'Keluhan Pe': 'hidden field', 'Catatan': 'hidden field', 'Y': 'hidden field', 'X': 'hidden field', 'Photo Ruma': 'hidden field', 'Photo Mete': 'hidden field', 'Koord.Lok': 'hidden field', });
lyr_BANGUNAN_PELANGGAN_8.set('fieldLabels', {'DATA UMUM': 'inline label - always visible', 'ID_2': 'inline label - always visible', 'Nama Pada': 'inline label - always visible', 'Nama Pemil': 'inline label - always visible', 'Nama Pengh': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Telp/Hp': 'inline label - always visible', 'Nomor Samb': 'inline label - always visible', 'Kondisi Ba': 'inline label - always visible', 'Jenis Bang': 'inline label - always visible', 'Status Ban': 'inline label - always visible', 'DATA TEKNI': 'inline label - always visible', 'Meter Air': 'inline label - always visible', 'Posisi Met': 'inline label - always visible', 'Kondisi Me': 'inline label - always visible', 'Merk Meter': 'inline label - always visible', 'Segel Mete': 'inline label - always visible', 'Box Meter': 'inline label - always visible', 'Jenis Pipa': 'inline label - always visible', 'Diameter P': 'inline label - always visible', 'Koneksi da': 'inline label - always visible', 'Kondisi Pi': 'inline label - always visible', 'DATA SOSIA': 'inline label - always visible', 'Jumlah Pen': 'inline label - always visible', 'Sumber Air': 'inline label - always visible', 'Keluhan Pe': 'inline label - always visible', 'Catatan': 'inline label - always visible', 'Y': 'inline label - always visible', 'X': 'inline label - always visible', 'Photo Ruma': 'inline label - always visible', 'Photo Mete': 'inline label - always visible', 'Koord.Lok': 'inline label - always visible', });
lyr_BANGUNAN_PELANGGAN_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
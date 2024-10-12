Ext.define('pegawai.store.Pegawai', {
    extend: 'Ext.data.Store',

    requires: [
       'pegawai.model.Pegawai',
       'Ext.data.proxy.Ajax',
       'Ext.data.reader.Json'
   ],

    alias: 'store.pegawai',
    id: 'PersonTableStore',
    autoLoad: true,

    model: 'pegawai.model.Pegawai',


    proxy: {
        type: 'ajax',
        url : 'http://localhost:8000/api/listpegawai',
        reader: {
            type: 'json',
            rootProperty:'data',
        }
    }
});
Ext.define('pegawai.model.Pegawai', {
    extend: 'pegawai.model.Base',

    requires: [
        'Ext.data.field.Integer',
        'Ext.data.field.String'
    ],

    fields: [
        {
            type: 'int',
            name: 'IDPEGAWAI'
        },
        {
            type: 'string',
            name: 'NAMA'
        },
        {
            type: 'string',
            name: 'ALAMAT'
        },
        {
            type: 'string',
            name: 'JENISKELAMIN'
        },
        {
            type: 'string',
            name: 'TGLLAHIR'
        },
        {
            type: 'string',
            name: 'NOTELPON'
        },
        {
            type: 'string',
            name: 'FOTO'
        }
    ]
});
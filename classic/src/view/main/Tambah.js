Ext.define('pegawai.view.main.Tambah', {
    extend: 'Ext.window.Window',
    xtype: 'direct-named',
    // controller: 'directnamed',
    alias: 'widget.viewtambah',

    requires: [
        'Ext.form.field.Text'
    ],

    title: 'Tambah Data Pegawai',
    width: 360,
    bodyPadding: 5,
    modal: true,

    items: [{
        xtype: 'textfield',
        fieldLabel: 'Nama Lengkap',
        id: 'nama',
        name: 'nama',
        value: '',
        allowBlank: false,
        maxLength: 30,
        enforceMaxLength: true
    }, {
        xtype: 'textareafield',
        name: 'alamat',
        fieldLabel: 'Alamat',
        id: 'alamat',
        value: ''
    }, {
        xtype: 'radiofield',
        name: 'radio1',
        value: 'radiovalue1',
        fieldLabel: 'Jenis Kelamin',
        id: 'jeniskelamin',
        boxLabel: 'Laki-Laki'
    }, {
        xtype: 'radiofield',
        name: 'radio1',
        value: 'radiovalue2',
        id: 'jeniskelamin2',
        fieldLabel: '',
        labelSeparator: '',
        hideEmptyLabel: false,
        boxLabel: 'Perempuan'
    }, {
        xtype: 'datefield',
        name: 'tgllahir',
        fieldLabel: 'Tanggal Lahir',
        id: 'tgllahir',
    }, {
        xtype: 'textfield',
        fieldLabel: 'No Telpon',
        id: 'notelpon',
        name: 'notelpon',
        value: '',
        allowBlank: false,
        maxLength: 30,
        enforceMaxLength: true
    }, {
        xtype: 'filefield',
        id: 'foto',
        name: 'foto',
        fieldLabel: 'Foto Pegawai'
    },],

    buttons: [{
        text: 'Send',
        formBind: true,
        listeners: {
            click: 'onFormTambahSubmit'
        }
    }]
});
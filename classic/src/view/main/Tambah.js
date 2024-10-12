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
    }, 
    {
        xtype: 'radiogroup',
        fieldLabel: 'Jenis Kelamin',
        columns: 1,
        name: 'jeniskelamin',
        id: 'jeniskelamin',
        items: [
            { boxLabel: 'L', inputValue: 1 },
            { boxLabel: 'P', inputValue: 2, checked: true },
            
        ]
    },
    // {
    //     xtype: 'radiofield',
    //     name: 'jeniskelamin',
    //     value: 'L',
    //     fieldLabel: 'Jenis Kelamin',
    //     id: 'jeniskelamin',
    //     boxLabel: 'Laki-Laki',
    //     checked: true
    // }, {
    //     xtype: 'radiofield',
    //     name: 'jeniskelamin2',
    //     value: 'P',
    //     id: 'jeniskelamin2',
    //     fieldLabel: '',
    //     labelSeparator: '',
    //     hideEmptyLabel: false,
    //     boxLabel: 'Perempuan'
    // }, 
    {
        xtype: 'datefield',
        name: 'tgllahir',
        fieldLabel: 'Tanggal Lahir',
        id: 'tgllahir',
    }, {
        xtype: 'numberfield',
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
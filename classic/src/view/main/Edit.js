Ext.define('pegawai.view.main.Edit', {
    extend: 'Ext.window.Window',
    xtype: 'edit-form',

    controller: 'main',

    title: 'Edit Pegawai',
    bodyPadding: 5,
    frame: true,
    width: 360,
    modal: true,
    id: 'dataRecForm',
    // defaultType: 'numberfield',

    fieldDefaults: {
        labelWidth: 110,
        anchor: '100%'
    },

    items: [
        {
            xtype: 'hiddenfield',
            fieldLabel: 'ID',
            id: 'dataid',
            name: 'dataid',
            value: '',
            allowBlank: false,
            maxLength: 30,
            enforceMaxLength: true
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Nama Lengkap',
            id: 'datanama',
            name: 'nama',
            value: '',
            allowBlank: false,
            maxLength: 30,
            enforceMaxLength: true
        }, {
            xtype: 'textareafield',
            name: 'alamat',
            fieldLabel: 'Alamat',
            id: 'dataalamat',
            value: ''
        }, {
            xtype: 'radiofield',
            name: 'jeniskelamin',
            value: 'L',
            fieldLabel: 'Jenis Kelamin',
            id: 'datajeniskelamin',
            boxLabel: 'Laki-Laki'
        }, {
            xtype: 'radiofield',
            name: 'jeniskelamin2',
            value: 'P',
            id: 'jeniskelamin2',
            fieldLabel: '',
            labelSeparator: '',
            hideEmptyLabel: false,
            boxLabel: 'Perempuan'
        }, {
            xtype: 'datefield',
            name: 'tgllahir',
            fieldLabel: 'Tanggal Lahir',
            id: 'datatgllahir',
        }, {
            xtype: 'textfield',
            fieldLabel: 'No Telpon',
            id: 'datanotelpon',
            name: 'notelpon',
            value: '',
            allowBlank: false,
            maxLength: 30,
            enforceMaxLength: true
        }, {
            xtype: 'filefield',
            id: 'datafoto',
            name: 'foto',
            fieldLabel: 'Foto Pegawai'
        },],
    buttons: [{
        text: 'Update',
        handler: 'onUpdate'
    }, {
        text: 'Delete',
        handler: 'onDelete'
    }, {
        text: 'Cancel',
        handler: 'onCancel'
    }]

});



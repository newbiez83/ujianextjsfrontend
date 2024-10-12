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
            xtype: 'textfield',
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
        name: 'radio1',
        value: 'radiovalue1',
        fieldLabel: 'Jenis Kelamin',
        id: 'datajeniskelamin',
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

    // items: [{
    //     xtype: 'container',
    //     layout: 'form',
    //     items: [{
    //         xtype: 'textfield',
    //         fieldLabel: 'ID No', 
    //         name: 'upd_id',
    //         id: 'upd_id',
    //         labelAlign: 'top',
    //         cls: 'field-margin',
    //         flex: 1
    //     }, {
    //         xtype: 'textfield',
    //         fieldLabel: 'Name', 
    //         name: 'upd_name',
    //         id: 'upd_name',
    //         labelAlign: 'top',
    //         cls: 'field-margin',
    //         flex: 1
    //     }, {
    //         xtype: 'textfield',
    //         fieldLabel: 'Email',  
    //         name: 'upd_email',
    //         id: 'upd_email',
    //         labelAlign: 'top',
    //         cls: 'field-margin',
    //         flex: 1
    //     }]
        
    // }],
    buttons: [{
        text   : 'Update',
        handler: 'onUpdate'
    }, {
        text   : 'Delete',
        handler: 'onDelete'
    }, {
        text   : 'Cancel',
        handler: 'onCancel'
    }]

});    



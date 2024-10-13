/**
 * This view is an example list of people.
 */

Ext.define('pegawai.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    id: 'dataList',

    requires: [
        'pegawai.store.Pegawai',
         'Ext.grid.Panel',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.grid.column.Boolean',
        'Ext.view.Table',
        'Ext.form.Panel',
        'Ext.form.field.TextArea',
        'Ext.button.Button',
    ],

    title: 'List Data Pegawai',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    store: {
        type: 'pegawai'
    },
    
    plugins: 'gridfilters',

    columns: [
        { 
            text: 'ID',  
            dataIndex: 'IDPEGAWAI' 

        },
        { 
            text: 'NAMA', 
            dataIndex: 'NAMA', 
            flex: 1,
            filter: true,
            // filter: {
            //     type: 'string',
            //     value: 5
            // }
        },
        { text: 'ALAMAT', dataIndex: 'ALAMAT', flex: 1 },
        { text: 'DEPARTEMEN', dataIndex: 'NAMADEPARTEMEN', flex: 1 },
        { text: 'POSISI', dataIndex: 'NAMAPOSISI', flex: 1 },
        { text: 'GAJI', dataIndex: 'GAJINYA', flex: 1 },
        { 
            text: 'JENIS KELAMIN', 
            
            dataIndex: 'JENISKELAMIN', 
            flex: 1, 
        },
        { text: 'TGL LAHIR', dataIndex: 'TGLLAHIR', flex: 1 },
        { text: 'NOTELPON', dataIndex: 'NOTELPON', flex: 1 },
        
            // {
            //     xtype: 'actioncolumn',
        
            //     width: 30,
            //     sortable: false,
            //     menuDisabled: true,
            //     items: [{
            //         iconCls: 'x-fa fa-trash',
            //         tooltip: 'Hapus Data',
            //         handler: 'onDeleteBttnClick',
            //         // listeners:{
            //         //     click :"onDeleteBttnClick"
            //         //   }
            //     }]}
    ],

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            id:'infoBioTextId',
            items: [
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-plus',
                    handler: 'openTambah',
                },
            ]
        }
    ],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
    },

    listeners: {
        select: 'onItemEditClick'
    }
});

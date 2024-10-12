/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */

function isEmptyTextField(choice) {
  var isEmpty = false;
  if (choice == 1) {
    if (Ext.getCmp('nama').getValue() != "") {
      if (Ext.getCmp('alamat').getValue() != "") {
        if (Ext.getCmp('tgllahir').getValue() != "") {
          isEmpty = true;
          console.log('Checked All TextField Not Null');
        }
      }

    }
  }
  else if (choice == 2) {
    if (Ext.getCmp('nama').getValue() != "") {
      if (Ext.getCmp('alamat').getValue() != "") {
        if (Ext.getCmp('tgllahir').getValue() != "") {
          isEmpty = true;
          console.log('Checked All TextField Not Null');
        }
      }
    }
  }


  return isEmpty;
}

function clearAllText(choice) {
  if (choice == 1) {
    Ext.getCmp('nama').setValue("");
    Ext.getCmp('alamat').setValue("");
    Ext.getCmp('jeniskelamin').setValue("");
    Ext.getCmp('tgllahir').setValue("");
    Ext.getCmp('notelpon').setValue("");
    Ext.getCmp('foto').setValue("");
    // Ext.getCmp('nameNameId').setValue("");
    // Ext.getCmp('nameAgeId').setValue("");
    // Ext.getCmp('nameBioId').setValue("");
    // Ext.getCmp('infoBioTextId').setValue("");
    // Ext.getCmp('infoPanelId').getStore().load();
    // Ext.getCmp('infoPanelId').getSelectionModel().deselectAll();
    setSharedData();
  }
  else if (choice == 2) {
    Ext.getCmp('nama').setValue("");
    Ext.getCmp('alamat').setValue("");
    Ext.getCmp('jeniskelamin').setValue("");
    Ext.getCmp('tgllahir').setValue("");
    Ext.getCmp('notelpon').setValue("");
    Ext.getCmp('foto').setValue("");
    setSharedData();
  }

}

function createNewPerson(nama, alamat, jeniskelamin, tgllahir, notelpon, foto) {
  Ext.Ajax.request({
    url: 'http://localhost:8000/api/tambahdatapegawai/',
    method: 'POST',
    params: {
      NAMA: nama,
      ALAMAT: alamat,
      JENISKELAMIN: jeniskelamin,
      TGLLAHIR: tgllahir,
      NOTELPON: notelpon,
      FOTO: foto,
    },
    success: false,
    failure: function () { console.log('failure'); }
  });

}

function deleteExistingPerson(_id) {
  Ext.Ajax.request({
    url: 'http://localhost:8000/api/hapuspegawai/' + _id,
    method: 'POST',
    params: {
      _method: 'DELETE',

    },
    success: true,
    failure: function () { console.log('failure'); }
  });

}

Ext.define('pegawai.view.main.MainController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.main',



  onFormTambahSubmit: function (button, e, eOpts) {
    console.log("Create Button Activated");
    if (isEmptyTextField(2)) {
      var createNama = Ext.getCmp('nama').getValue();
      var createAlamat = Ext.getCmp('alamat').getValue();
      var createJeniskelamin = Ext.getCmp('jeniskelamin').getValue();
      var createTgllahir = Ext.getCmp('tgllahir').getValue();
      var createNotelpon = Ext.getCmp('notelpon').getValue();
      var createFoto = Ext.getCmp('foto').getValue();
      createNewPerson(createNama, createAlamat, createJeniskelamin, createTgllahir, createNotelpon, createFoto);
      clearAllText(2);
      clearAllText(1);
      Ext.Msg.alert('Waiting...', 'Data Berhasil Masuk...');

      this.getView().destroy();
      
    }
    else {
      Ext.Msg.alert('Pemberitahuan', 'Data Masih Kosong.');
    }

  },

  openTambah: function () {
    Ext.widget('viewtambah').show();
  },

  onItemEditClick: function (grid, record, item, index, e, eOpts) {
    var form = Ext.create('pegawai.view.main.Edit');

    Ext.getCmp('dataid').setValue(record.data.IDPEGAWAI);
    Ext.getCmp('datanama').setValue(record.data.NAMA);
    Ext.getCmp('dataalamat').setValue(record.data.ALAMAT);
    Ext.getCmp('datajeniskelamin').setValue(record.data.JENISKELAMIN);
    Ext.getCmp('datatgllahir').setValue(record.data.TGLLAHIR);
    Ext.getCmp('datanotelpon').setValue(record.data.NOTELPON);
    Ext.getCmp('datafoto').setValue(record.data.FOTO);
    form.show();
  },

  onDelete: function () {

    var id = Ext.getCmp('dataid').getValue();

    Ext.MessageBox.confirm('Confirm', 'Yakin akan menghapus data?', function (btn) {
      if (btn == 'yes') {

        deleteExistingPerson(id);
        Ext.Msg.alert('Waiting...', 'Data Berhasil Dihapus...');      

      }
    });

    this.getView().destroy();
  },



  // onItemSelected: function (sender, record) {
  //     Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
  // },

  onCancel: function () {
    this.getView().destroy();
  },

  onConfirm: function (choice) {
    if (choice === 'yes') {
      //
    }
  }
});

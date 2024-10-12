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

function isSelectedGrid() {
  var isSelected = false;
  if (Ext.getCmp('infoPanelId').getSelectionModel().hasSelection()) {
    isSelected = true;
  }
  return isSelected;
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

Ext.define('SharedData', {
  singleton: true,

  id: "None",
  name: "None",
  age: -1,
  bio: "None"

});


function setSharedData() {
  SharedData.id = none;
  SharedData.name = "None";
  SharedData.age = none;
  SharedData.bio = "None";
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
    }
    else {
      Ext.Msg.alert('Pemberitahuan', 'Data Masih Kosong.');
    }

  },

  onDeleteBttnClick: function (button, e, eOpts) {

    console.log("Delete Button Activated");
    // if(isSelectedGrid())
    // {
    deleteExistingPerson(SharedData.id);
    Ext.Msg.alert('Deleting...', 'The selected person has been deleted!!!');
    clearAllText(1);

    // }
    // else {
    //   Ext.Msg.alert('Non-Selected Person', 'Please select a person.');
    // }


  },

  openTambah: function () {
    Ext.widget('viewtambah').show();
  },

  onItemEditClick: function (grid, record, item, index, e, eOpts) {
    console.log(record.data);
  },

  onUpdateBttnClick: function (button, e, eOpts) {
    console.log("Update Button Activated");
    if (isSelectedGrid()) {
      if (isEmptyTextField(1)) {
        var updateName = Ext.getCmp('nameNameId').getValue();
        var updateAge = Ext.getCmp('nameAgeId').getValue();
        var updateBio = Ext.getCmp('nameBioId').getValue();
        updateExistingPerson(SharedData.id, updateName, updateAge, updateBio)
        Ext.Msg.alert('Up-To-Date', 'You have already updated a person Information.');
        Ext.getCmp('infoPanelId').getSelectionModel().deselectAll();
        clearAllText(1);
      }
      else {
        Ext.Msg.alert('Not Filled Informations', 'Please fill all information to update.');
      }
    }
    else {
      Ext.Msg.alert('Non-Selected Person', 'Please select a person.');
    }


  },

  onItemSelected: function (sender, record) {

    Ext.getCmp('infoBioTextId').setValue(record.data.IDPEGAWAI);

    SharedData.IDPEGAWAI = record.data.IDPEGAWAI;
    // SharedData.name=record.data.name;
    // SharedData.age=record.data.age;
    // SharedData.bio=record.data.bio;

    //Ext.Msg.confirm('Information of That Person', 'Do you want to change something about this person?','onConfirm',this);
    Ext.Msg.confirm('Information of That Person', 'Do you want to change something about this person?', function (choice) {
      if (choice === 'yes') {
        Ext.getCmp('IDPEGAWAI').setValue(record.data.IDPEGAWAI);
        // Ext.getCmp('nameAgeId').setValue(record.data.age);
        // Ext.getCmp('nameBioId').setValue(record.data.bio);

      }

    });

  },

  // onItemSelected: function (sender, record) {
  //     Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
  // },

  onConfirm: function (choice) {
    if (choice === 'yes') {
      //
    }
  }
});

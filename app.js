// import idb from "idb";

// await idb.open();

// const dbPromise = idb.open("perpustakaan", 1, (upgradeDb) => {
//   if (!upgradeDb.objectStoreNames.contains("buku")) {
//     const peopleOS = upgradeDb.createObjectStore("buku", { keyPath: "isbn" });
//     peopleOS.createIndex("judul", "judul", { unique: false });
//     peopleOS.createIndex("nomorIndux", "nomorIndux", { unique: true });
//   }
// });

// const dbPromise = idb.open("perpustakaan", 2, (upgradeDb) => {
//     switch (upgradeDb.oldVersion) {
//         case 0:
//             upgradeDb.createObjectStore('buku', {keyPath: 'isbn'});
//         case 1:
//         let bukuStore = upgradeDb.transaction.objectStore('buku');
//         bukuStore.createIndex('tahun', '')
//     }
// })

// dbPromise
//   .then((db) => {
//     let tx = db.transaction("buku", "readwrite");
//     let store = tx.objectStore("buku");
//     let item = {
//       judul: "Menjadi Android Developer Expert (MADE)",
//       isbn: 123456789,
//       description:
//         "Belajar pemrograman Android di Dicoding dengan modul online dan buku.",
//       created: new Date().getTime(),
//     };
//     store.put(item, 123456789);
//     return tx.complete;
//   })
//   .then(() => {
//     console.log("buku disimpan");
//   })
//   .catch(() => {
//     console.log("buku gagal disimpan");
//   });

// // dbPromise
// //   .then((db) => {
// //     let tx = db.transaction("buku", "readonly");
// //     let store = tx.objectStore("buku");
// //     return store.getAll();
// //   })
// //   .then((items) => {
// //     console.log("Data yang diambil: ");
// //     console.log(items);
// //   });

// dbPromise
//   .then((db) => {
//     var tx = db.transaction("store", "readwrite");
//     var store = tx.objectStore("store");
//     store.delete;
//     return tx.transaction;
//   })
//   .then(() => {
//     console.log("item deleted");
//   });

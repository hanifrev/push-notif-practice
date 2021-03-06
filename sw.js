// Periksa service worker
if (!("serviceWorker" in navigator)) {
  console.log("Service worker tidak didukung browser ini.");
} else {
  registerServiceWorker();
}
// Register service worker
function registerServiceWorker() {
  return navigator.serviceWorker
    .register("service-worker.js")
    .then(function (registration) {
      console.log("Registrasi service worker berhasil.");
      return registration;
    })
    .catch(function (err) {
      console.error("Registrasi service worker gagal.", err);
    });
}

// Periksa fitur Notification API
if ("Notification" in window) {
  requestPermission();
} else {
  console.error("Browser tidak mendukung notifikasi.");
}

// Meminta ijin menggunakan Notification API
function requestPermission() {
  Notification.requestPermission().then(function (result) {
    if (result === "denied") {
      console.log("Fitur notifikasi tidak diijinkan.");
      return;
    } else if (result === "default") {
      console.error("Pengguna menutup kotak dialog permintaan ijin.");
      return;
    }

    console.log("Fitur notifikasi diijinkan.");
  });
}

//////////////
if ("PushManager" in window) {
  navigator.serviceWorker.getRegistration().then(function (registration) {
    registration.pushManager
      .subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(
          "BGB31DQXfUM2_MuNrk6z9QeeHYTVt8gPJlIwWOTpkVlpekas616p70XtDdK436s6d1O0C4ORcFLmWWId737DbSU"
        ),
      })
      .then(function (subscribe) {
        console.log(
          "Berhasil melakukan subscribe dengan endpoint: ",
          subscribe.endpoint
        );
        console.log(
          "Berhasil melakukan subscribe dengan p256dh key: ",
          btoa(
            String.fromCharCode.apply(
              null,
              new Uint8Array(subscribe.getKey("p256dh"))
            )
          )
        );
        console.log(
          "Berhasil melakukan subscribe dengan auth key: ",
          btoa(
            String.fromCharCode.apply(
              null,
              new Uint8Array(subscribe.getKey("auth"))
            )
          )
        );
      })
      .catch(function (e) {
        console.error("Tidak dapat melakukan subscribe ", e.message);
      });
  });
}

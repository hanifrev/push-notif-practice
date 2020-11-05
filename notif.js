function showNotifikasiSederhana() {
  const title = "Notifikasi Sederhana";
  const options = {
    body: "Ini adalah konten notifikasi. \nBisa menggunakan baris baru.",
    requireInteraction: true,
    icon: "/icon.png",
    badge: "/icon.png",
  };
  if (Notification.permission === "granted") {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.showNotification(title, options);
    });
  } else {
    console.error("FItur notifikasi tidak diijinkan.");
  }
}

function showNotifikasiIkon() {
  const title = "Notifikasi Sederhana";
  const options = {
    body: "Ini adalah konten notifikasi dengan gambar ikon.",
    icon: "/icon.png",
  };
  if (Notification.permission === "granted") {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.showNotification(title, options);
    });
  } else {
    console.error("Fitur notifikasi tidak diijinkan.");
  }
}

function showNotifikasiActions() {
  const title = "Notifikasi dengan Actions";
  const options = {
    body: "Ini adalah konten notifikasi dengan pilihan actions.",
    tag: "mg-1",
    renotify: true,
    actions: [
      {
        action: "yes-action",
        title: "Ya",
      },
      {
        action: "no-action",
        title: "Tidak",
      },
    ],
  };
  if (Notification.permission === "granted") {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.showNotification(title, options);
    });
  } else {
    console.error("Fitur notifikasi tidak diijinkan.");
  }
}

function silentNotif() {
  const title = "Silent Man";
  const options = {
    silent: true,
    body: "i am the black wizard",
    icon: "/icon.png",
    image: "/back.jpg",
    actions: [
      {
        action: "yes-action",
        title: "Yes",
      },
      {
        action: "no-action",
        title: "Tidak",
      },
    ],
  };

  if (Notification.permission === "granted") {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.showNotification(title, options);
    });
  } else {
    console.log("fitus notifikasi tdk diijinkan");
  }
}

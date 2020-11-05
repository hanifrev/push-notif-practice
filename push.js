var webPush = require("web-push");

const vapidKeys = {
  publicKey:
    "BGB31DQXfUM2_MuNrk6z9QeeHYTVt8gPJlIwWOTpkVlpekas616p70XtDdK436s6d1O0C4ORcFLmWWId737DbSU",
  privateKey: "oCHDe56SqI-lID0QJDs8ogSOqcXYJzstuR7tiSDMwpQ",
};

webPush.setVapidDetails(
  "mailto:example@yourdomain.org",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
var pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/easadUbvAgc:APA91bHnXaFPoSXkHhSNVvuMx7H4Lx4yluEsXgnt9q1KgI_Lv95G2oQLQ6ukBcakr9LnPcFDzipYcH1VbEex5ekuSs9TAXHKI0gF50D_DY4vV0k43bVwu9_jm9LXDDD2Td-f82QI51so",
  keys: {
    p256dh:
      "BMssLsXJUA0VC6HNUF1t64aRlVSnqDiWlRkq7Gj+QrpaW7Uj+/3JRbRcBDX/r9KxlcPOntvA7TaU4HxM/VqJiqw=",
    auth: "M1HGV7ljruXGz8dmx712tw==",
  },
};
var payload = "Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!";

var options = {
  gcmAPIKey: "757589259160",
  TTL: 60,
};
webPush.sendNotification(pushSubscription, payload, options);

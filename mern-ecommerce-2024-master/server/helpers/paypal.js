const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AXuH2i6x4bNrB83Rh811qhbTjGElJsYD8j6E7_6x7WER4obuzDgQNI6gxKMiIxrlZQ5P0aWRKY2dR2jA",
  client_secret: "EDMqdR_CNe9bcf0FE3XWM6kIVLsbKlKAbvyXBwlAKg6k5_hkfgegyAoiMhGLjuDQea6YmPfLL-ACkqwZ",
});

module.exports = paypal;

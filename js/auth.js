const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby0GZvateiAL9c4XoFxtS4i0JJEbN6njZJ6GBYeqxAHmePiw76UybBhIPl27V9046Vg7g/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzbpXIi3cAUbEesls5ujfbpawZ7Dr1LepcOUJIs7bgUNT6IHTczBrsNgVC0EWxLEYyGaA/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}

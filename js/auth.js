const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwLiweO0ftYVNVXDHJIFiSzBOhAAp78_wwT2tuPcEnprUrV-mdFalDMi6-lF6tqM7Ib/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}

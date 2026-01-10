const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwdADvhTO2OiJC2FFD97gF2MOvIiWF2i0xZsp2C0Hkk4DEbmY5xb87h_kEqzpytzeNVAQ/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}

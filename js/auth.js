const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyVyeYeT-Sra2imwVCFzy1LIC1l4Y4gvTw3jR8j0nRvi3IzzEapyh0Y08dKOnrYzd2cLg/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}

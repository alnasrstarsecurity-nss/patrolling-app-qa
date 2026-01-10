const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbznWMbC3gLxqwuW1KRNhDt_o4cJz4HAvUJq-2q009G5fTNOv7z-7bcvN2-cwuVkBuUuWg/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}

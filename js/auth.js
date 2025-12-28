const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw8hlg9oJtDSR26dJkeDwwkUByAxrru9dNe1oHYTN0FpYOiFVPDVZVPiyms_dFlm1BTzg/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}

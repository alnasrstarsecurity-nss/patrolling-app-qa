const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxK4ei0xe7kGPSgE8GSupveuMS8z0B-SbfN7ipmvtgr1Euh_QfstQxAu5qeQQ5WxIqBtw/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}

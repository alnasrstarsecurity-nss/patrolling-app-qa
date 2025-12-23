const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzvAWecOPSamtqvU8VGZKn8ek_Sie-atbrcSdMb8MQBOCFBo3CUbKURVYgxk5qQgHdS3g/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}

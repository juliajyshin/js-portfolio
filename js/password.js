
// PASSWORD PROTECTION SCRIPT

function TheLogin() {

var password = 'pepper';

if (this.document.login.pass.value == password) {
  top.location.href="apple-ios12.html";
}
else {
  window.alert("Incorrect password, please try again.");
  }
}


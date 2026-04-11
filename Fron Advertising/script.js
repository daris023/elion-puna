function register() {
  let data = new FormData();
  data.append("name", document.getElementById("name").value);
  data.append("email", document.getElementById("email").value);
  data.append("password", document.getElementById("password").value);

  fetch("register.php", {
    method: "POST",
    body: data
  }).then(res => res.text()).then(res => alert(res));
}

function login() {
  let data = new FormData();
  data.append("email", document.getElementById("email").value);
  data.append("password", document.getElementById("password").value);

  fetch("login.php", {
    method: "POST",
    body: data
  }).then(res => res.text()).then(res => {
    if(res === "success"){
      alert("Logged in");
      window.location = "pricing.html";
    } else {
      alert("Error login");
    }
  });
}

function buy(type, location, price) {
  let data = new FormData();
  data.append("type", type);
  data.append("location", location);
  data.append("price", price);

  fetch("buy.php", {
    method: "POST",
    body: data
  }).then(res => res.text()).then(res => {
    if(res === "login_required"){
      alert("Login first");
    } else {
      alert("Order completed");
    }
  });
}
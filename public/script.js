async function signup() {
  const username = document.getElementById("username-signup").value;
  const password = document.getElementById("password-signup").value;

  const response = await fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  const data = await response.json();
  console.log(data);
  document.getElementById("signup-mesg").innerHTML = data.message;
}
async function signin() {
  const username = document.getElementById("username-signin").value;
  const password = document.getElementById("password-signin").value;

  const response = await fetch("http://localhost:3000/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  const data = await response.json();
  console.log(data);
  document.getElementById("signin-mesg").innerHTML = data.message;

  localStorage.setItem("token", data.token);

  const mytodo = await fetch("http://localhost:3000/mytodo", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: data.token,
    },
  });
  const mytodos = await mytodo.json()
  document.getElementById("my-todo").innerHTML = mytodos.message;
}

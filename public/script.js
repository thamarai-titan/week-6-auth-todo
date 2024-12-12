async function signup() {
  const username = document.getElementById("username-signup").value
  const password = document.getElementById("password-signup").value

  const response = await fetch('http://localhost:3000/signup',{
    method:"POST",
    body: JSON.stringify({
        username:username,
        password:password
    })
  })
  const data = await response.json()
  console.log(data)
  document.getElementById("signup-mesg").innerHTML = data.message
  
}

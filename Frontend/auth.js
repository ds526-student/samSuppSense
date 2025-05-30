let pageCleared = false;

async function checkLogin() {

  const res = await fetch('/api/check-login', { credentials: 'include' });
  const data = await res.json();

  if (!data.loggedIn) {
    console.log("User is logged in");
    alert("you need to be logged in to view this page");
    window.location.href = "login.html";
  }
}


checkLogin();

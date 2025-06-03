async function checkLogin() {
  // call check Login and see if the user is loggedIn in
  const res = await fetch('/api/checkLogin', { credentials: 'include' });
  const data = await res.json();

  // if the user is not logged in
  if (!data.loggedIn) {
    // send a message to the console and the create an alert
    console.log("User is logged in");
    // alert("you need to be logged in to view this page");

    // redirect the user to the login page

    window.location.href = "login.html";
  }
}


checkLogin();

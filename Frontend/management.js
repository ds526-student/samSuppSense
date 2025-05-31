// add a listener on the logout button
document.getElementById('logout_button').addEventListener('click', async () => {
  try {
    // send a request the to the server to logout
    const logoutResponse = await fetch('/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!logoutResponse.ok) {
      throw new Error('Logout failed');
    }

    const logoutResult = await logoutResponse.json();
    // notify the user that logout was successful
    if (logoutResult.success) {
      alert('Logout successful');
      window.location.href = 'index.html';
    } else { // alert the user that the logout was unsuccessful
      alert('Logout failed: ' + logoutResult.message);
    }
  } catch (error) {
    console.error(error);
  }
});

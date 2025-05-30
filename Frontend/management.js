document.getElementById('logout_button').addEventListener('click', async () => {
  try {
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

    if (logoutResult.success) {
      alert('Logout successful');
      window.location.href = 'index.html';
    } else {
      alert('Logout failed: ' + logoutResult.message);
    }
  } catch (error) {
    console.error(error);
  }
});

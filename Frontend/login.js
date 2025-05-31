
document.getElementById('login').addEventListener('click', async () => {
    const username = document.getElementById('usernameText').value;
    const password = document.getElementById('passwordText').value;

    try {
        // send login request to the server       
        const response = await fetch('/api/getLogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const loginResult = await response.json();
        // if the login is successful Redirect the user to the management page
        if (loginResult.success) {
            window.location.href = 'management.html';
            // Redirect to another page or perform other actions
        } else if (!loginResult.success) { // otherwise alert the user that it is wrong
            alert('Login failed: ' + loginResult.message);
        }
    } catch (error) {
        console.error(error);
        alert('Error logging in');
    }
});

document.getElementById('logout').addEventListener('click', async () => {
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

    }
});



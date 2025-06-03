function onScanSuccess(decodedText, decodedResult) {
    console.log(`Code matched = ${decodedText}`, decodedResult);

    // Autofill input and simulate a submit click
    const input = document.getElementById('inputText');
    input.value = decodedText;

    document.getElementById('submit').click();

}


function onScanFailure(error) {
    // handle scan failure, usually better to ignore and keep scanning.
    // for example:
    console.warn(`Code scan error = ${error}`);
}

let html5QrcodeScanner = new Html5QrcodeScanner(
    "qrCodeReader",
    { fps: 10, qrbox: { width: 250, height: 250 } },
  /* verbose= */ false);
html5QrcodeScanner.render(onScanSuccess, onScanFailure);

document.getElementById('submit').addEventListener('click', async () => {
    const barcode = document.getElementById('inputText').value;

    try {
        const response = await fetch('api/db/productSelect', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ barcode }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch product data');
        }

        const result = await response.json();
        localStorage.setItem('queryResult', JSON.stringify(result));
        window.location.href = 'results.html';
    } catch (error) {
        console.error(error);
        alert('Error fetching product data');
    }
});


// check the local storeage to see which theme is currently loaded
document.addEventListener('DOMContentLoaded', () => {

    // get a reference to the button
    const btn = document.getElementById('theme-toggle');
    if (btn) {
        // add a listener to the button gets pressed
        btn.addEventListener('click', () => {
            // create to see if the theme is dark mode
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            if (isDark) {
                // set theme to light mode
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
            } else {
                // set theme to dark mode
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
});

// add a listener to the show popup button
document.getElementById('toggle_button').addEventListener('click', async () => {
    // get a reference to the popup span
    const popup = document.getElementById("popup-content");
    popup.style.visibility = "visible";
});

// close the popup
document.getElementById('disable_button').addEventListener('click', async () => {
    // get a reference to the popup span
    const popup = document.getElementById("popup-content");
    popup.style.visibility = "hidden";

});


// change the theme if it is dark mode 
document.addEventListener('DOMContentLoaded', () => {
    // retreive the value for theme from local storeage
    const savedTheme = localStorage.getItem('theme');
    // if the theme is dark apply it
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
});




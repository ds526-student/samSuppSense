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
    { fps: 10, qrbox: {width: 250, height: 250} },
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

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme-toggle');
    if (btn) {
        btn.addEventListener('click', () => {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            if (isDark) {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
});
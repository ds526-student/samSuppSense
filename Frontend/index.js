document.getElementById('submit').addEventListener('click', async () => {
    const barcode = document.getElementById('inputText').value;
    
    try {
        const response = await fetch('http://localhost:3000/apiDb/productSelect', {
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
        console.log(queryResult);
        localStorage.setItem('queryResult', JSON.stringify(result));
        window.location.href = 'results.html';
    } catch (error) {
        console.error(error);
        alert('Error fetching product data');
    }
    });
// runs a select query when the submit button is clicked
document.getElementById("submit").addEventListener("click", () => {
    // get the barcode value from the input field
    const barcode = document.getElementById('inputText').value;

    fetch('http://localhost:3000/query', { // connects to port 3000, the same port as the server
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ barcode }) // sends the barcode value to the server
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // handles the response from the server
        alert(JSON.stringify(data)); // displays the response in an alert box
    })
    .catch(error => { // handles any errors that occur during the fetch
        console.error('Error:', error);
        alert('Error: ' + error.message);
    });
});
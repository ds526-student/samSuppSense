// runs a select query when the submit button is clicked
// document.getElementById("submit").addEventListener("click", () => {
//     // get the barcode value from the input field
//     const barcode = document.getElementById('inputText').value;

//     fetch('http://localhost:3000/query', { // connects to port 3000, the same port as the server
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ barcode }) // sends the barcode value to the server
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data); // handles the response from the server
//         alert(JSON.stringify(data)); // displays the response in an alert box
//         })
//         .catch(err => {
//             console.error('Error submitting input:', err);
//         });
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert('Error: ' + error.message);
    // });

    document.getElementById('submit').addEventListener('click', async () => {
        const barcode = document.getElementById('inputText').value;
      
        try {
          const response = await fetch('http://localhost:3000/api/query', {
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
    
    // document.getElementById("submit").addEventListener("click", () => {
    //     const input = document.getElementById("inputText").value;

    //     //send data to the backend
    //     fetch('/api/submit', {method: 'POST', headers: {'Content-Type': 'application/json'},
    //         //converts body string into json file 
    //         body: JSON.stringify({ userInput: input })
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         if (data.success) {
    //             //redirect manually on success
    //             window.location.href = 'results.html'; 
    //         } 
    //         else {
    //             alert("Something went wrong!");
    //         }
    //     })
    //     .catch(err => {
    //         console.error('Error submitting input:', err);
    //     });
    //     });
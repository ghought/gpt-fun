function newQuote() {
    fetch('/.netlify/functions/get-quote')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('quote').textContent = data.quote;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            document.getElementById('quote').textContent = 'Could not fetch a new quote.';
        });
}

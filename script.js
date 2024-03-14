function newQuote() {
    fetch('/.netlify/functions/get-quote')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quote').textContent = data.quote;
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            document.getElementById('quote').textContent = 'Failed to fetch quote.';
        });
}

document.getElementById('feedback-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const feedback = {
        name,
        email,
        message,
        timestamp: new Date().toISOString()
    };

    saveFeedback(feedback);

    alert('Thank you for your feedback!');
    document.getElementById('feedback-form').reset();
});

function saveFeedback(feedback) {
    fetch('feedback.json')
        .then(response => response.json())
        .then(data => {
            data.push(feedback);
            return data;
        })
        .then(data => {
            return JSON.stringify(data);
        })
        .then(jsonData => {
            return fetch('feedback.json', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: jsonData
            });
        })
        .catch(error => {
            console.error('Error saving feedback:', error);
        });
}
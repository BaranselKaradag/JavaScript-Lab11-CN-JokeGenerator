document.addEventListener('DOMContentLoaded', () => {
    const jokeContainer = document.getElementById('joke');
    const jokeButton = document.getElementById('new-joke');

    const generateJoke = () => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);

        xhr.onload = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                jokeContainer.innerHTML = response.value;
            } else {
                jokeContainer.innerHTML = 'Oops! Something went wrong. Please try again.';
            }
        };

        xhr.onerror = function () {
            jokeContainer.innerHTML = 'Unable to connect to the joke server.';
        };

        xhr.send();
    };

    // Add event listener to the button
    jokeButton.addEventListener('click', generateJoke);

    // Generate a joke on page load
    generateJoke();
});
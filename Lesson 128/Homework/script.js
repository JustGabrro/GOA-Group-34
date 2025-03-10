document.getElementById('generate-btn').addEventListener('click', function() {
    const selectedAnimal = document.querySelector('input[name="animal"]:checked');
    const imageContainer = document.getElementById('image-container');
    const imageElement = document.getElementById('animal-image');
    const errorMessage = document.getElementById('error-message');

    if (!selectedAnimal) {
        alert('Please select an animal');
        return;
    }

    const animal = selectedAnimal.value;
    let apiUrl = '';

    if (animal === 'cat') {
        apiUrl = 'https://api.thecatapi.com/v1/images/search';
    } else if (animal === 'dog') {
        apiUrl = 'https://dog.ceo/api/breeds/image/random';
    } else if (animal === 'fox') {
        apiUrl = 'https://randomfox.ca/floof/';
    }

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            let imageUrl = '';
            if (animal === 'cat') {
                imageUrl = data[0].url;
            } else if (animal === 'dog') {
                imageUrl = data.message;
            } else if (animal === 'fox') {
                imageUrl = data.image;
            }

            imageElement.src = imageUrl;
            imageElement.style.display = 'block';
            errorMessage.style.display = 'none';
        })
        .catch(error => {
            imageElement.style.display = 'none';
            errorMessage.style.display = 'block';
        });
});

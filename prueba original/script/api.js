document.getElementById('loadFoodsBtn').addEventListener('click', loadFoods);

function loadFoods() {
    const apiKey = '0SszegYk68VD3fMbYTV9ZOZ16RzZwO0x33sC2eaU'; // Reemplaza con tu clave de API de FoodData Central
    const apiUrl = `https://api.nal.usda.gov/fdc/v1/foods/list?api_key=${apiKey}&pageSize=10`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayFoods(data);
        })
        .catch(error => {
            console.error('Error al cargar los alimentos:', error);
        });
}

function displayFoods(foods) {
    const foodsContainer = document.getElementById('foodsContainer');
    foodsContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos alimentos

    foods.forEach(food => {
        const foodElement = document.createElement('div');
        foodElement.className = 'card mb-3';
        foodElement.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${food.description}</h5>
                <p class="card-text">ID: ${food.fdcId}</p>
                <p class="card-text">Data type: ${food.dataType}</p>
            </div>
        `;
        foodsContainer.appendChild(foodElement);
    });
}

const fruits = ['apple', 'orange', 'banana', 'grape'];

document.addEventListener('DOMContentLoaded', () => {
    renderFilteredFruits();
});

function renderFilteredFruits() {
    const filteredList = document.getElementById('filteredList');
    filteredList.innerHTML = '';

    const filteredFruits = fruits.filter(fruit => fruit.length > 5);

    filteredFruits.map(fruit => {
        const listItem = document.createElement('li');
        listItem.textContent = fruit;
        filteredList.appendChild(listItem);
    });
}

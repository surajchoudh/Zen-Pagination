const itemsPerPage = 5;
const data = [
    'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5',
    'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10',
    'Item 11', 'Item 12', 'Item 13', 'Item 14', 'Item 15'
];

const totalPages = Math.ceil(data.length / itemsPerPage);

const paginationContainer = document.getElementById('pagination');
const contentContainer = document.getElementById('content');

function displayData(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = data.slice(start, end);

    contentContainer.innerHTML = '';
    pageItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        contentContainer.appendChild(listItem);
    });
}

function createPaginationButtons() {
    paginationContainer.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('li');
        button.textContent = i;
        button.addEventListener('click', () => {
            displayData(i);
        });
        paginationContainer.appendChild(button);
    }
}

// Display the first page on load
displayData(1);

// Create pagination buttons
createPaginationButtons();
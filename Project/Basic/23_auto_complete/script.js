const searchTextElement = document.getElementById('searchText');
const searchButtonElement = document.getElementById('searchButton');
const autoCompleteResultsElement = document.querySelector('#autoCompleteResults');
const autoCompleteBodyElement = document.querySelector('#autoCompleteResults tbody');
const loadingElement = document.getElementById('loading');

const debounce = (callback, delay) => {
    let timeout;
    return () => {
        clearTimeout(timeout);
        timeout = setTimeout(callback, delay);
    }
}

const getData = (query) => {
    const searchURL = new URL('https://dummyjson.com/products/search');
    searchURL.searchParams.append('q', query);

    loadingElement.classList.add('show'); // Show loading animation

    return fetch(searchURL)
        .then(response => response.json())
        .then(result => {
            loadingElement.classList.remove('show'); // Hide loading animation
            const products = result.products;
            const mappedProducts = products.map(product => ({
                title: product.title,
                price: product.price,
                category: product.category,
                image: product.images[0],
            }));
            return mappedProducts;
        })
        .catch(error => {
            loadingElement.classList.remove('show'); // Hide loading animation
            console.error('Error fetching data:', error);
        });
}

const autoComplete = () => {
    const query = searchTextElement.value.trim();
    if (!query) {
        return;
    }

    getData(query)
        .then(products => {
            autoCompleteBodyElement.innerHTML = ''; // Clear previous results
            autoCompleteResultsElement.classList.add('show');
            products.forEach(product => {
                autoCompleteBodyElement.innerHTML += `<tr>
                    <td>${product.title}</td>
                    <td>$${product.price}</td>
                    <td>${product.category}</td>
                    <td><img src="${product.image}"></td>
                </tr>`;
            });
        });
}

searchTextElement.addEventListener('keyup', debounce(autoComplete, 1000));
searchButtonElement.addEventListener('click', autoComplete); // Trigger search on button click

autoCompleteResultsElement.addEventListener('click', () => {
    autoCompleteResultsElement.classList.remove('show');
});

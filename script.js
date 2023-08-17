// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here

function fetchData(url) {
            return fetch(url)
                .then(response => response.json())
                .catch(error => {
                    console.error(`Error fetching data from ${url}: ${error}`);
                });
        }

        function performAPICalls() {
            const startAll = performance.now();
            Promise.all(apiUrls.map(fetchData))
                .then(() => {
                    const endAll = performance.now();
                    const timeTakenAll = endAll - startAll;
                    document.getElementById('output-all').textContent = timeTakenAll.toFixed(2) + ' ms';
                });

            const startAny = performance.now();
            Promise.any(apiUrls.map(fetchData))
                .then(() => {
                    const endAny = performance.now();
                    const timeTakenAny = endAny - startAny;
                    document.getElementById('output-any').textContent = timeTakenAny.toFixed(2) + ' ms';
                });
        }

        performAPICalls();

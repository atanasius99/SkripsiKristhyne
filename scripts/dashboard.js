// This file contains the JavaScript code that handles the interactive features of the dashboard.

document.addEventListener('DOMContentLoaded', () => {
    const fetchDataButton = document.getElementById('fetch-data');
    const dataContainer = document.getElementById('data-container');

    fetchDataButton.addEventListener('click', () => {
        fetchData();
    });

    function fetchData() {
        // Simulate a data fetch with a timeout
        setTimeout(() => {
            const data = [
                { id: 1, name: 'Widget 1', value: Math.random() * 100 },
                { id: 2, name: 'Widget 2', value: Math.random() * 100 },
                { id: 3, name: 'Widget 3', value: Math.random() * 100 },
            ];
            updateDashboard(data);
        }, 1000);
    }

    function updateDashboard(data) {
        dataContainer.innerHTML = '';
        data.forEach(item => {
            const widget = document.createElement('div');
            widget.className = 'widget';
            widget.innerHTML = `<h3>${item.name}</h3><p>Value: ${item.value.toFixed(2)}</p>`;
            dataContainer.appendChild(widget);
        });
    }
});
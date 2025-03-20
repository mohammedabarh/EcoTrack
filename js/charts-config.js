// Chart.js Implementation
const impactChart = new Chart(document.getElementById('impactChart'), {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Carbon Footprint',
            data: [2.8, 2.6, 2.5, 2.3, 2.1, 2.0],
            borderColor: '#22c55e',
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

const activityChart = new Chart(document.getElementById('activityChart'), {
    type: 'doughnut',
    data: {
        labels: ['Recycling', 'Energy Saving', 'Water Conservation', 'Transportation'],
        datasets: [{
            data: [30, 25, 20, 25],
            backgroundColor: ['#22c55e', '#16a34a', '#15803d', '#166534']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});
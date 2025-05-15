// Function to save user preferences in localStorage
function savePreference(key, value) {
    localStorage.setItem(key, value);
}

// Function to retrieve user preferences from localStorage
function getPreference(key) {
    return localStorage.getItem(key);
}

// Apply saved background color on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedColor = getPreference('backgroundColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }
});

// Change background color and save preference
const submitButton = document.querySelector('input[type="submit"]');
submitButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission for demo purposes
    const newColor = '#f0f8ff'; // Light blue color
    document.body.style.transition = 'background-color 0.5s ease';
    document.body.style.backgroundColor = newColor;
    savePreference('backgroundColor', newColor);
});

// Add animation to table rows on hover
const tableRows = document.querySelectorAll('table tr');
tableRows.forEach((row) => {
    row.addEventListener('mouseover', () => {
        row.style.transition = 'transform 0.3s ease';
        row.style.transform = 'scale(1.05)';
    });

    row.addEventListener('mouseout', () => {
        row.style.transform = 'scale(1)';
    });
});
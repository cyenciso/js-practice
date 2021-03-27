const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// hex colors:
// # followed by six values
// A-F represent 10-15


// select elements necessary
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// create event listener for button
btn.addEventListener('click', () => {
    // create initial hex value
    let hexColor = '#';

    // you want to set up a loop that runs six times (to get your six values)
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    // targeting elements and change after loop runs
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
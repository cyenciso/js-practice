const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// target button
const btn = document.getElementById('btn');
// target span that represents color
const color = document.querySelector('.color');

// add an event listener to button
btn.addEventListener('click', () => {
    // get random number between 0 and 3 (array's last index)
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    // target body, target it's background-color, and set it to random number
    document.body.style.backgroundColor = colors[randomNumber];
    // also change span's text
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    // math.random gives you random numbers from 0 - almost 1 (but not 1)
    // use Math.floor to round down to nearest integer
    // use Math.random * length of array to get range needed
    return Math.floor(Math.random() * colors.length);
}
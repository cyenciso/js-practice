// select modal-btn, modal-overlay, close-btn elements
const openBtn = document.querySelector('.modal-btn');
const overlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

// listen for click events on modal-btn and close-btn
openBtn.addEventListener('click', () => {
    // when user clicks modal-btn, add .OPEN-MODAL to modal-overlay
    overlay.classList.add('open-modal');
});

closeBtn.addEventListener('click', () => {
    // when user clicks close-btn remove .OPEN-MODAL from modal-overlay
    overlay.classList.remove('open-modal');
});




function turnOn() {
    const light = document.getElementById('light');
    light.src = 'https://www.w3schools.com/js/pic_bulbon.gif';
    light.style.filter = 'drop-shadow(0 0 30px #ffe100)';
}

function turnOff() {
    const light = document.getElementById('light');
    light.src = 'https://www.w3schools.com/js/pic_bulboff.gif';
    light.style.filter = 'drop-shadow(0 0 10px #ffffff)';
}

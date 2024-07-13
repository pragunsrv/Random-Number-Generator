function generateRandomNumber() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    const errorElement = document.getElementById('error');
    
    if (isNaN(min) || isNaN(max) || min >= max) {
        errorElement.innerText = 'Please enter a valid range (min < max).';
        document.getElementById('result').innerText = '';
    } else {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        document.getElementById('result').innerText = `Random Number: ${randomNumber}`;
        errorElement.innerText = '';
    }
}

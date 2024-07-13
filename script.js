function generateRandomNumbers() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    const quantity = parseInt(document.getElementById('quantity').value);
    const errorElement = document.getElementById('error');
    const resultList = document.getElementById('resultList');
    
    if (isNaN(min) || isNaN(max) || min >= max || isNaN(quantity) || quantity <= 0) {
        errorElement.innerText = 'Please enter a valid range (min < max) and quantity (> 0).';
        resultList.innerHTML = '';
    } else {
        resultList.innerHTML = '';
        for (let i = 0; i < quantity; i++) {
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            const listItem = document.createElement('li');
            listItem.innerText = randomNumber;
            resultList.appendChild(listItem);
        }
        errorElement.innerText = '';
    }
}

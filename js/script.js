/* Plus Button */
plusButton = document.createElement('button');
plusButton.id = 'plus';
plusButton.innerHTML = 'UP +'
plusButton.classList.add('plus');
document.body.appendChild(plusButton);

/* Counter Div */
counterValue = document.createElement('div');
counterValue.id = 'counter';
counterValue.innerHTML = '0'
counterValue.classList.add('counter');
document.body.appendChild(counterValue);

/* Minus Button */
minusButton = document.createElement('button');
minusButton.id = 'minus';
minusButton.innerHTML = 'DOWN -'
minusButton.classList.add('minus');
/* document.body.insertBefore(minusButton,document.body.childNodes[2]); */
document.body.appendChild(minusButton);

/* Initial Value */
let count = 0;

/* Remove */
minusButton.addEventListener('click', () => {
    count--;
    counterValue.innerHTML = count;
});

/* Add */
plusButton.addEventListener('click', () => {
    count++;
    counterValue.innerHTML = count;
});
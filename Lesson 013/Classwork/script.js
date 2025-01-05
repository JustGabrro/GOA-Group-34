document.addEventListener('DOMContentLoaded', () => {
    const counterDisplay = document.getElementById('counterDisplay');
    const incrementBtn = document.getElementById('incrementBtn');
    const decrementBtn = document.getElementById('decrementBtn');
    const resetBtn = document.getElementById('resetBtn');

    const updateCounter = (value) => {
        counterDisplay.textContent = value;
        localStorage.setItem('counter', value);
    };

    const getCounter = () => {
        return parseInt(localStorage.getItem('counter')) || 0;
    };

    let counter = getCounter();
    updateCounter(counter);

    incrementBtn.addEventListener('click', () => {
        counter++;
        updateCounter(counter);
    });

    decrementBtn.addEventListener('click', () => {
        counter--;
        updateCounter(counter);
    });

    resetBtn.addEventListener('click', () => {
        counter = 0;
        updateCounter(counter);
    });
});

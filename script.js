document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.game button');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Game is loading...');
        });
    });
});

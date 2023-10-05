const listItems = document.querySelectorAll('.strikethrough');

listItems.forEach(item => {
    item.addEventListener('click', function() {
        if (item.classList.contains('strikethrough')) {
            item.classList.remove('strikethrough');
            item.style.textDecoration = 'line-through';
        } else {
            item.classList.add('strikethrough');
            item.style.textDecoration = 'none';
        }
    });
});
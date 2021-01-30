let gallery = document.querySelector('.gallery');
let imgContainers = document.querySelectorAll('.img-container');

imgContainers.forEach(imgContainer => {
    imgContainer.addEventListener('mousedown', function(e){
        e.preventDefault();
        if (!imgContainer.classList.contains('clicked-container')) {
            gallery.style.display = 'block';
            imgContainers.forEach(container => {
                container !== imgContainer ? container.style.display = 'none' : null;
            })
            imgContainer.classList.add('clicked-container');
        } else {
            gallery.style.display = 'grid';
            imgContainers.forEach(container => (
                container.style.display = 'block'
            ))
            imgContainer.classList.remove('clicked-container');
        }
    })
})
window.addEventListener('load', function(){
    var hideElement = document.querySelectorAll('.hideElement');
    for(var i = 0; i < 3; i++) {
        hideElement[i].addEventListener('mouseover', function(){
            this.children[1].style.display = 'block';
        })
        hideElement[i].addEventListener('mouseout', function(){
            this.children[1].style.display = 'none';
        })
    }
})
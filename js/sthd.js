window.addEventListener('load', function() {
    var leftNavWrapper = document.querySelector('.left-nav-wrapper')
    var nav = leftNavWrapper.querySelector('.left-nav-wrapper ul');
    var content = document.querySelector('.content-wrapper .content');
    nav.addEventListener('click', function(e) {
        var index = e.target.dataset.index;
        switch(index) {
            case '0':
                content.style.height = 700 + 'px';
                content.children[0].style.height = 700 + 'px';
                break;
            case '1':
                content.style.height = 1200 + 'px';
                content.children[1].style.height = 1200 + 'px';
                break;
            case '2':
                content.style.height = 2250 + 'px';
                content.children[2].style.height = 2250 + 'px';
                break;        
        }
    });
})
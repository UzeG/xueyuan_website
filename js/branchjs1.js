window.addEventListener('load', function() {
    var leftNavWrapper = document.querySelector('.left-nav-wrapper')
    var nav = leftNavWrapper.querySelector('.left-nav-wrapper ul');
    var icon = nav.querySelectorAll('span');
    var content = document.querySelector('.content-wrapper .content');
    nav.addEventListener('click', function(e) {
        for(var i = 0; i < nav.children.length; i++) {
            nav.children[i].className = '';
            icon[i].innerHTML = '';
        }
        var index = e.target.dataset.index;
        e.target.className = 'nav-changeStyle';
        icon[index].innerHTML = '&#xf105';
        // console.log(index);
        for(var i = 0; i < content.children.length; i++) {
            content.children[i].style.zIndex = '1';
        }
        content.children[index].style.zIndex = '2';
    });
    document.addEventListener('scroll', function() {
        console.log(window.pageYOffset);
        if(window.pageYOffset > 237) {
            leftNavWrapper.style.position = 'fixed';
        }
        else {
            leftNavWrapper.style.position = 'absolute';
        }
    })
})
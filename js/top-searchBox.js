window.addEventListener('load', function() {
    var text = document.querySelector('.top-searchBox input');
    // 获得焦点
    text.addEventListener('focus', function() {
        text.value = '';
    })
    // 失去焦点 onblur
    text.addEventListener('blur', function() {
        text.value = '请输入搜索内容';
    })
    // text.addEventListener('blur',function(){})
    document.addEventListener('keyup',function(e){
        if(e.keyCode === 83){
            text.focus();
        }
    })
})
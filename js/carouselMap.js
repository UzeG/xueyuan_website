window.addEventListener('load', function() {
    // 左右箭头
    var carouselMapContent = document.querySelector('.carouselMap-content');
    var arrow_left = document.querySelector('.arrow_left');
    var arrow_right = document.querySelector('.arrow_right');
    var img_step = carouselMapContent.offsetWidth;

    //鼠标移入和移出
    carouselMapContent.addEventListener('mouseenter', function() {
        arrow_left.style.display = 'block';
        arrow_right.style.display = 'block';
        // 停止播放
        clearInterval(timer);
        timer = null;
    })
    carouselMapContent.addEventListener('mouseleave', function() {
        arrow_left.style.display = 'none';
        arrow_right.style.display = 'none';
        // 开启自动播放
        timer = setInterval(function() {
            arrow_right.click();
        }, 5000);
    })

    
    var carouselMapOl = document.querySelector('.carouselMap-pointer');
    var carouselMapUl = document.querySelector('.carouselMap-img');

    // 动态生成选择图片的原点
    for(var i = 0; i < carouselMapUl.children.length; i++) {
        var pointerLi = document.createElement('li');
        // 记录当前pointerLi索引号
        pointerLi.setAttribute('index', i);
        carouselMapOl.appendChild(pointerLi);
        pointerLi.addEventListener('click', function() {
            for(var i = 0; i < carouselMapOl.children.length; i++) {
                carouselMapOl.children[i].className = '';
            }
            this.className = 'currentPointer';

            var img_index = this.getAttribute('index');
            num = img_index;
            circle = img_index;
            animate(carouselMapUl, -img_index * img_step);
        })
    }

    carouselMapOl.children[0].className = 'currentPointer';
    // 复制第一张图
    var first_img = carouselMapUl.children[0].cloneNode(true);
    carouselMapUl.appendChild(first_img);
    // 按下右箭头后事件
    var num = 0;
    var circle = 0;

    //节流阀
    var flag = true;
    //可以控制图片切换的速度，点击再快也会等本次动画做完才做下一次动画

    arrow_right.addEventListener('click', function() {
        if (flag) {
            flag = false; //关闭节流阀
            // 若到最后一张
            if(num == carouselMapUl.children.length - 1) {
                carouselMapUl.style.left = 0;
                num = 0;
            }
            num++;
            animate(carouselMapUl, -num * img_step, function(){
                flag = true;
            });
        
            circle++;
            if(circle == carouselMapOl.children.length) {
                circle = 0;
            }
            pointerChange();
        }
    })

    // 按下左箭头后事件
    arrow_left.addEventListener('click', function() {
        if(flag) {
            flag = false;
            if(num == 0) {
                num = carouselMapUl.children.length - 1;
                carouselMapUl.style.left = -num * img_step + 'px';
            }
            num--;
            animate(carouselMapUl, -num * img_step, function() {
                flag = true;
            });
            
            circle--;
            if(circle < 0) {
                circle = carouselMapOl.children.length - 1;
            }
            pointerChange();
        }
    })

    function pointerChange() {
        for(var i = 0; i < carouselMapOl.children.length; i++) {
            carouselMapOl.children[i].className = '';
        }
        carouselMapOl.children[circle].className = 'currentPointer';
    }


    // 自动播放
    var timer = setInterval(function() {
        arrow_right.click();
    }, 5000);
})
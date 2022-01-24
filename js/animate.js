// 步长 = (目标值 - 现在的位置) / 10
function animate(obj, target, callback) {

    // 避免bug
    clearInterval(obj.timer);

    obj.timer = setInterval(function() {
        if(obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // if(callback) {
            //     callback();
            // }
            callback && callback();
        }
        // step取整，防止达不到目标值
        var step = (target - obj.offsetLeft) / 10>=0 ? Math.ceil((target - obj.offsetLeft) / 10) : Math.floor((target - obj.offsetLeft) / 10);
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}
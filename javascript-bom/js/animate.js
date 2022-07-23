function animate(object, target, callback) {
  //每次进来先清除目标定时任务
  clearInterval(object.timer);
  //不介意定时任务使用变量接收，建议使用对象接收可以节省资源开支
  object.timer = setInterval(() => {
    //缓动动画每次移动的步长
    var setp = (target - object.offsetLeft) / 10;
    setp = setp > 0 ? Math.ceil(setp) : Math.floor(setp);
    if (object.offsetRight >= target) {
      clearInterval(object.timer);
      callback();
    }
    object.style.left = object.offsetLeft + setp + "px";
  }, 15);
}
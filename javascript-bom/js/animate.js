function animate(object, target, callback) {
  //每次进来先清除目标定时任务
  clearInterval(object.timer);
  //不介意定时任务使用变量接收，建议使用对象接收可以节省资源开支
  object.timer = setInterval(() => {
    //缓动动画每次移动的步长
    var setp = (target - object.offsetLeft) / 10;
    setp = setp > 0 ? Math.ceil(setp) : Math.floor(setp);
    if (object.offsetLeft == target) {
      clearInterval(object.timer);
      // if(callback){
      //   callback();
      // }
      //与上面if条件结果一致(简洁写法)
      callback && callback();
    }
    object.style.left = (object.offsetLeft + setp) + "px";
  }, 10);
}

var canvas = document.getElementById('myCanvas');

if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.beginPath();                // 开始路径绘制
    ctx.moveTo(20, 20);             // 设置路径起点，坐标为(20,20)
    ctx.lineTo(200, 20);            // 绘制一条到(200,20)的直线
    ctx.lineWidth = 1.0;            // 设置线宽
    ctx.strokeStyle = '#cc0000';    // 设置线的颜色
    ctx.stroke();                   // 进行线的着色，这时整条线才变的可见

    ctx.fillStyle = 'yellow';
    ctx.fillRect(50, 50, 200, 100);

    ctx.strokeRect(80, 80, 200, 100);

    ctx.clearRect(120, 60, 50, 50);
}
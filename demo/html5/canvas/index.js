var canvas = document.getElementById('myCanvas');

if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var myGradient = ctx.createLinearGradient(0, 0, 0, 160);
    myGradient.addColorStop(0, '#bababa');
    myGradient.addColorStop(1, '#636363');
    ctx.fillStyle = myGradient;
    ctx.fillRect(10, 10, 200, 100);
}
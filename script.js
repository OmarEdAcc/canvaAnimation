// HTML Canvas

// Canvas Setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 500;
requestAnimationFrame(draw);
sunMove = 50;
skyColor = 160;
wormMove = 100;
wormSize = 10;
wormThickness = 3;
colorWorm = "maroon";
bullet = 0;
bulletMove = 115;
bulletColor = "gold";
function draw() {
  // Sky
  ctx.fillStyle = "rgb(" + skyColor + "," + skyColor + "," + skyColor + ")";
  ctx.fillRect(0, 0, 400, 500);
  skyColor = skyColor - 0.5;
  if (skyColor < -380) {
    skyColor = 160;
  }
  // Sun
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(300, sunMove, 50, 0, 2 * Math.PI);
  ctx.fill();

  sunMove = sunMove + 0.5;

  if (sunMove >= 500) {
    sunMove = -100;
  }
  // ground
  ctx.fillStyle = "darkgreen";
  ctx.fillRect(0, 400, 400, 200);

  // grass

  ctx.strokeStyle = "darkgreen";
  ctx.beginPath();
  ctx.moveTo(300, 400);
  ctx.lineTo(300, 390);
  ctx.stroke();
  ctx.strokeStyle = "darkgreen";
  ctx.beginPath();
  ctx.moveTo(250, 400);
  ctx.lineTo(250, 390);
  ctx.stroke();
  ctx.strokeStyle = "darkgreen";
  ctx.beginPath();
  ctx.moveTo(200, 400);
  ctx.lineTo(200, 390);
  ctx.stroke();
  ctx.strokeStyle = "darkgreen";
  ctx.beginPath();
  ctx.moveTo(150, 400);
  ctx.lineTo(150, 390);
  ctx.stroke();
  ctx.strokeStyle = "darkgreen";
  ctx.beginPath();
  ctx.moveTo(100, 400);
  ctx.lineTo(100, 390);
  ctx.stroke();
  ctx.strokeStyle = "darkgreen";
  ctx.beginPath();
  ctx.moveTo(50, 400);
  ctx.lineTo(50, 390);
  ctx.stroke();
  ctx.strokeStyle = "darkgreen";
  ctx.beginPath();
  ctx.moveTo(350, 400);
  ctx.lineTo(350, 390);
  ctx.stroke();

  ctx.fillStyle = "brown";
  ctx.fillRect(0, 420, 400, 300);
  // Title
  ctx.fillStyle = "rgb(300,0,0)";
  ctx.font = "25px Arial";
  ctx.fillText("ART OF WAR", 20, 20);

  // Head
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(50, 290, 20, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(50, 300);
  ctx.lineTo(60, 300);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(55, 285);
  ctx.lineTo(60, 285);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(50, 310);
  ctx.lineTo(50, 360);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(50, 360);
  ctx.lineTo(30, 400);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(50, 360);
  ctx.lineTo(70, 400);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(50, 360);
  ctx.lineTo(70, 400);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(50, 340);
  ctx.lineTo(85, 330);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(50, 340);
  ctx.lineTo(20, 365);
  ctx.stroke();

  // Head
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(350, 290, 20, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(350, 295);
  ctx.lineTo(340, 300);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(340, 280);
  ctx.lineTo(340, 285);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(350, 310);
  ctx.lineTo(350, 360);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(350, 360);
  ctx.lineTo(330, 400);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(350, 360);
  ctx.lineTo(370, 400);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(350, 360);
  ctx.lineTo(370, 400);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(350, 340);
  ctx.lineTo(380, 360);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(350, 340);
  ctx.lineTo(320, 365);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.moveTo(80, 341);
  ctx.lineTo(80, 322);
  ctx.lineTo(115, 322);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.moveTo(105, 322);
  ctx.lineTo(105, 313);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = colorWorm;
  ctx.lineWidth = wormThickness;
  ctx.moveTo(wormMove + wormSize, 450);
  ctx.lineTo(wormMove, 450);
  ctx.stroke();

  wormThickness = wormThickness + 0.005;
  if (wormThickness > 7) {
    wormThickness = 7;
    colorWorm = "red";
  }
  wormSize = wormSize + 0.1;
  wormMove = wormMove + 0.6;
  if (wormMove > 400) {
    wormMove = -50;
  }

  bullet = bullet + 0.2;

  if (bullet > 100) {
    bulletMove = bulletMove + 3;
    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = bulletColor;
    ctx.moveTo(bulletMove, 322);
    ctx.lineTo(bulletMove + 12, 322);
    ctx.stroke();
  }
  if (bullet > 113) {
    bulletColor = "maroon";
  }

  requestAnimationFrame(draw);
}

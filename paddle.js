paddle =
{
    name: "paddle",
    x: 1,
    y: screenHeight / 2,
    width: 55,
    height: 55,
    speed: 1,
    bounce: true,
    color: "black"
}
function clearKey(e) {
    delete keysPressed[e.keyCode]
}
function movementControl(e) {
    keysPressed[e.keyCode] = true;
    console.log(e.key)
    if (keysPressed[39]) {
        paddle.x += 5 * paddle.speed
    }
    if (keysPressed[37]) {
        paddle.x -= 5 * paddle.speed
    }
    // if (keysPressed[38]) {
    //     paddle.y -= 5 * paddle.speed
    // }
    // if (keysPressed[40]) {
    //     paddle.y += 5 * paddle.speed
    // }

}
function paddleDraw()
{
    ctx.fillStyle = "black";
    ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height)
}
//functions

window.addEventListener("keydown", movementControl)
window.addEventListener("keyup", clearKey)
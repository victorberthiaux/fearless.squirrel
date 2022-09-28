function update()
{
    var delta = clock.getDelta(); // seconds.
    var moveDistance = 50 * delta; // 200 pixels per second
    var rotateAngle = Math.PI / 2 * delta * 2;   // pi/2 radians (90 degrees) per second

    if (keyboard.pressed("left"))
        player1.turnLeft(rotateAngle);
    if (keyboard.pressed("right"))
        player1.turnRight(rotateAngle);
    if (keyboard.pressed("up"))
        player1.accelerate(moveDistance);
    if (keyboard.pressed("down"))
        player1.decelerate(moveDistance);

    if (enemy1.position.y > -199 && enemy1.flag == 0)
        enemy1.movedown();
    else {
        enemy1.flag = 1;
    }
    if (enemy1.position.y < 199 && enemy1.flag == 1)
        enemy1.moveup();
    else {
        enemy1.flag = 0;
    }

    if (enemy2.position.y > -199 && enemy2.flag == 0)
        enemy2.movedown();
    else {
        enemy2.flag = 1;
    }
    if (enemy2.position.y < 199 && enemy2.flag == 1)
        enemy2.moveup();
    else {
        enemy2.flag = 0;
    }

    if (enemy3.position.y > -199 && enemy3.flag == 0)
        enemy3.movedown();
    else {
        enemy3.flag = 1;
    }
    if (enemy3.position.y < 199 && enemy3.flag == 1)
        enemy3.moveup();
    else {
        enemy3.flag = 0;
    }

    player1.move();
    controls.update();

}
player = document.getElementById("player");
playerX = 0;
playerY = 0;

step = 10;

food1 = document.getElementById("food1");
food_1_X = 400;
food_1_Y = 200;
food1.style.left = food_1_X + "px";
food1.style.top = food_1_Y + "px";

food2 = document.getElementById("food2");
food_2_X = 100;
food_2_Y = 200;
food2.style.top = food_2_X + "px";
food2.style.left = food_2_Y + "px";

food3 = document.getElementById("food3");
food_3_X = 300;
food_3_Y = 100;
food3.style.top = food_3_X + "px";
food3.style.left = food_3_Y + "px";

pointsCounter = 0;

points = document.getElementById("points");

document.addEventListener("keydown", function (event) {
    console.log(event.key);
    if (event.key == "w") {
        playerY = playerY - step;

    }


    if (event.key == "a") {
        playerX = playerX - step;

    }


    if (event.key == "s") {
        playerY = playerY + step;

    }


    if (event.key == "d") {
        playerX = playerX + step;

        player.style.top = playerX + "px"
        player.style.top = playerY + "px"
    }

    if (playerY == food_1_Y && playerX == food_1_X) {
        console.log("ESTAMOS EM CIMA DO FOOD 1!!!!!");
        food1.remove()
        player.style.backgroundColor = "blue";

        pointsCounter = pointsCounter + 1;
        points.innerHTML = "Pontos:" + pointsCounter);
    }
if (playerY == food_2_Y && playerX == food_2_X) {
    console.log("ESTAMOS EM CIMA DO FOOD 2!!!!!");
    food2.remove()
    player.style.backgroundColor = "green";

    pointsCounter = pointsCounter + 1;
    points.innerHTML = "Pontos:" + pointsCounter);
}

if (playerY == food_3_Y && playerX == food_3_X) {
    console.log("ESTAMOS EM CIMA DO FOOD 3!!!!!");
    food3.remove()
    player.style.backgroundColor = "hotpink";

    pointsCounter = pointsCounter + 1;
    points.innerHTML = "Pontos:" + pointsCounter);
});


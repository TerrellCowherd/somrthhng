function gameOver () {
    game.over(false)
}
function somethng () {
    _49ers = sprites.create(img`
. . . 3 3 3 3 . . . . . . . . . 
. . . . . . . 3 3 3 . . . . . . 
. . . . 3 3 3 3 3 3 3 . . . . . 
. . 3 3 3 3 3 3 3 3 3 3 3 . . . 
. . 3 3 3 3 . 3 . . 3 3 3 . . . 
. 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
. 3 . 3 3 3 3 3 3 3 3 3 3 . . . 
3 . . 3 3 . 3 . 3 3 3 3 . . . . 
3 . 3 3 . . 3 3 3 3 . 3 . . . . 
3 . 3 3 . 3 3 . . 3 3 . . . . . 
. 3 3 3 3 3 3 3 3 3 . . . . . . 
. . . 3 . . . 3 3 3 . . . . . . 
. . . 3 . 3 3 . . 3 . . . . . . 
. . . . 3 . . . . 3 . . . . . . 
. . . . . . . . . 3 . . . . . . 
. . . . . . . . . 3 . . . . . . 
`, SpriteKind.Enemy)
    _49ers.setPosition(scene.screenWidth(), Math.randomRange(0, scene.screenHeight()))
    extra_velocity = 0
    if (Math.percentChance(20)) {
        extra_velocity = Math.randomRange(0, 50)
    } else {
        extra_velocity = Math.randomRange(-16, 16)
    }
    _49ers.vx = -50 - 5 * info.score() - extra_velocity
    if (info.score() <= 20) {
        controller.moveSprite(spaceship, 100 - 2 * info.score(), 100 - 2 * info.score())
    }
}
function changeScore () {
    info.changeScoreBy(1)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    gameOver()
})
let extra_velocity = 0
let _49ers: Sprite = null
let spaceship: Sprite = null
spaceship = sprites.create(img`
. . . . . . . . . . . . . . . . 
f f f . . . . . . . . . . . . . 
f 1 1 f f . . . . . . . . . . . 
f 1 1 1 1 f . . . . . . . . . . 
. f 1 f f f f f f f f . . . . . 
. . f f 1 1 1 1 1 1 1 f f . . . 
. . . f 1 1 1 1 1 1 1 1 1 f . . 
. . . f 1 1 1 1 1 1 1 1 1 1 f . 
. . . f 1 1 1 1 1 1 1 1 1 f . . 
. . f f 1 1 1 1 1 1 1 f f . . . 
. f 1 f f f f f f f f . . . . . 
f 1 1 1 1 f . . . . . . . . . . 
f 1 1 f f . . . . . . . . . . . 
f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(spaceship)
spaceship.x = 8
spaceship.setFlag(SpriteFlag.StayInScreen, true)
info.setScore(0)
game.onUpdateInterval(2000, function () {
    changeScore()
})
game.onUpdateInterval(2000, function () {
    somethng()
})

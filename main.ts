let mySprite = 0
sprites.onOverlap(SpriteKind.Projectile, mySprite, function (sprite, otherSprite) {
    let projectile_player: Sprite = null
    bogey.destroy()
    info.changeScoreBy(1)
    sprites.destroy(projectile_player, effects.spray, 500)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`projectile`, spaceplane, 200, 0)
})
sprites.onOverlap(projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    bogey.destroy(effects.fire, 500)
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
})
let projectile = 0
let bogey: Sprite = null
let spaceplane: Sprite = null
spaceplane = sprites.create(assets.image`space plane`, SpriteKind.Player)
controller.moveSprite(spaceplane, 200, 200)
spaceplane.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(500, function () {
    bogey = sprites.create(assets.image`bogey`, SpriteKind.Enemy)
    bogey.setPosition(160, randint(5, 155))
    bogey.setVelocity(-100, 0)
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})

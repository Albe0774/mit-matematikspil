controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Number_of_jumps < Max_jumps) {
        Yndlings_figur.setVelocity(0, -175)
        Number_of_jumps += 1
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (Yndlings_figur.isHittingTile(CollisionDirection.Bottom)) {
        Number_of_jumps = 0
    }
    if (Yndlings_figur.tileKindAt(TileDirection.Bottom, assets.tile`Is tile`)) {
        Yndlings_figur.fx = 20
    }
    if (Yndlings_figur.tileKindAt(TileDirection.Bottom, assets.tile`Sne tile`)) {
        Yndlings_figur.fx = 100
    }
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    Yndlings_figur.vx = 50
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    Yndlings_figur.vx = -50
})
let mySprite: Sprite = null
let Max_jumps = 0
let Number_of_jumps = 0
let Yndlings_figur: Sprite = null
scene.setBackgroundImage(assets.image`Vinter Bagrund`)
Yndlings_figur = sprites.create(assets.image`Yndlings figur`, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`Vinter tilemap12`)
scene.cameraFollowSprite(Yndlings_figur)
Yndlings_figur.ay = 350
controller.configureRepeatEventDefaults(1, 1)
Number_of_jumps = 0
Max_jumps += 2
tiles.setCurrentTilemap(tilemap`Vinter tilemap12`)
game.onUpdate(function () {
    Yndlings_figur.setImage(assets.image`Yndlings figur`)
    if (Yndlings_figur.vy < 0) {
        Yndlings_figur.setImage(img`
            . . . . . . 9 9 9 . . . . . . . 
            . . . . . . 9 9 9 . 2 1 2 . . . 
            . . . . . . 9 9 2 2 2 2 2 . . . 
            . . . . . . 9 9 2 1 2 2 2 . . . 
            . . . . . . . . 2 2 7 7 2 . . . 
            . . . . . . . . 2 7 f f f f 6 6 
            . . . . . 5 5 f f f f f 1 f 6 6 
            . . . . . 5 5 f f f f f f f . . 
            . . . . . . . f f f f f f f . . 
            . . . . . . . f 3 f f f f f . . 
            . . . . . . . f f f f f f f . . 
            . . . . . . . f f f . . 4 4 . . 
            . . . . . . . 4 4 . . . 4 4 . . 
            . . . . . . . 4 4 . . . 4 . . . 
            . . . . . . . . 4 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    if (Yndlings_figur.vx < 0) {
        Yndlings_figur.image.flipX()
    }
})
game.onUpdate(function () {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
})

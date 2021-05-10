enum ActionKind {
    Walking,
    Idle,
    Jumping
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        . . f e 2 f f e e 2 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f f f f d d d 4 e f . . . 
        . . f d d d d f 2 2 2 f e f . . 
        . . f b b b b f 2 2 2 f 4 e . . 
        . . f b b b b f 5 4 4 f . . . . 
        . . . f c c f f f f f f . . . . 
        . . . . f f . . . f f f . . . . 
        `)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        ........................
        .....ffff...............
        ...fff22fff.............
        ..fff2222fff............
        .fffeeeeeefff...........
        .ffe222222eef...........
        .fe2ffffff2ef...........
        .ffffeeeeffff...........
        ffefbf44fbfeff..........
        fee41fddf14eef..........
        .ffffdddddeef...........
        fddddf444eef............
        fbbbbf2222f4e...........
        fbbbbf2222fd4...........
        .fccf45544f44...........
        ..ffffffff..............
        ....ff..ff..............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ......ffff..............
        ....fff22fff............
        ...fff2222fff...........
        ..fffeeeeeefff..........
        ..ffe222222eef..........
        ..fe2ffffff2ef..........
        ..ffffeeeeffff..........
        .ffefbf44fbfeff.........
        .fee41fddf14eef.........
        fdfeeddddd4eff..........
        fbffee444edd4e..........
        fbf4f2222edde...........
        fcf.f22cccee............
        .ff.f44cdc4f............
        ....fffddcff............
        .....fddcff.............
        ....cddc................
        ....cdc.................
        ....cc..................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        .......ff...............
        .....ff22ff.............
        ...fff2222fff...........
        ..fff222222fff..........
        ..fff222222fff..........
        ..feeeeeeeeeeff.........
        .ffe22222222eff.........
        .fffffeeeefffff.........
        fdfefbf44fbfeff.........
        fbfe41fddf14ef..........
        fbffe4dddd4efe..........
        fcfef22222f4e...........
        .ff4f44554f4e...........
        ....ffffffdde...........
        .11..ffffedde...........
        ..11......ee............
        ..11.....ccc............
        ..111...cc1cc...........
        ...111...c1c............
        ...11111.c1c............
        ....11111c1c............
        ......111c1c............
        `,img`
        ......ffff..............
        ....fff22fff............
        ...fff2222fff...........
        ..fffeeeeeefff..........
        ..ffe222222eef..........
        ..fe2ffffff2ef..........
        ..ffffeeeeffff......ccc.
        .ffefbf44fbfeff....cddc.
        .ffefbf44fbfeff...cddc..
        .fee4dddddd4eef.ccddc1..
        fdfeeddddd4eeffecddc11..
        fbffee4444ee4fddccc.11..
        fbf4f222222f1edde...11..
        fcf.f222222f44ee....11..
        .ff.f445544f........11..
        ....ffffffff.......11...
        .....ff..ff......1111...
        ................11111...
        ...............1111.....
        .1..........111111......
        .111...111111111........
        ...111111111............
        ........................
        ........................
        `,img`
        ......ffff..............
        ....fff22fff............
        ...fff2222fff...........
        ..fffeeeeeefff..........
        ..ffe222222eef..........
        ..fe2ffffff2ef..........
        ..ffffeeeeffff..........
        .ffefbf44fbfeff.........
        .fee41fddf14eef.........
        ..feeddddddeef..........
        ...fee4444eef...........
        ..e4f222222f4e..........
        ..4df222222fd4..........
        ..44f445544f44..........
        .....ffffff.............
        .....ff..ff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    100,
    false
    )
    pause(200)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        1 . . . . . . . . . . . . . . . 
        1 . . . . . . . . . . . . . . . 
        1 1 . . . . . . . . . . . . . 1 
        . 1 1 . . . . . . . . . . . . 1 
        . . 1 1 1 . . . . . . 1 1 1 1 . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, 0)
    pause(100)
    projectile.destroy()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . . f e d d f 1 4 d 4 e e f . 
        . . . . f d d d e e e e e f . . 
        . . . . f e 4 e d d 4 f . . . . 
        . . . . f 2 2 e d d e f . . . . 
        . . . f f 5 5 f e e f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `)
})
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f 4 f f 4 f . . . . . . 
    . . . . 4 f 4 4 f 4 . . . . . . 
    . . . . 4 f 4 4 f 4 . . . . . . 
    . . . . f 4 f f 4 f . . . . . . 
    . . . . f 4 f f 4 f . . . . . . 
    . . . . . 4 4 4 4 . . . . . . . 
    . . . 4 4 4 4 4 4 4 4 . . . . . 
    . . . 4 4 4 4 4 4 4 4 . . . . . 
    . . . 4 4 4 4 4 4 4 4 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite2.setPosition(149, 109)
animation.runImageAnimation(
mySprite2,
[img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c 1 b b b 1 b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b 1 f f 1 c b b b b f . . . . 
    f f 1 f f 1 f b b b b f c . . . 
    f f 2 2 2 2 f b b b b f c c . . 
    . f 2 2 2 2 b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `,img`
    . . f f f . . . . . . . . . . . 
    f f f c c . . . . . . . . f f f 
    f f c c c . c c . . . f c b b c 
    f f c 3 c c 3 c c f f b b b c . 
    f f c 3 b c 3 b c f b b c c c . 
    f c b b b b b b c f b c b c c . 
    c c 1 b b b 1 b c b b c b b c . 
    c b b b b b b b b b c c c b c . 
    c b 1 f f 1 c b b c c c c c . . 
    c f 1 f f 1 f b b b b f c . . . 
    f f f f f f f b b b b f c . . . 
    f f 2 2 2 2 f b b b b f c c . . 
    . f 2 2 2 2 2 b b b c f . . . . 
    . . f 2 2 2 b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . c c . c c . . . . . . . . 
    . . f 3 c c 3 c c c . . . . . . 
    . f c 3 b c 3 b c c c . . . . . 
    f c b b b b b b b b f f . . . . 
    c c 1 b b b 1 b b b f f . . . . 
    c b b b b b b b b c f f f . . . 
    c b 1 f f 1 c b b f f f f . . . 
    f f 1 f f 1 f b c c b b b . . . 
    f f f f f f f b f c c c c . . . 
    f f 2 2 2 2 f b f b b c c c . . 
    . f 2 2 2 2 2 b c c b b c . . . 
    . . f 2 2 2 b f f c c b b c . . 
    . . . f f f f f f f c c c c c . 
    . . . . . . . . . . . . c c c c 
    `,img`
    . f f f . . . . . . . . f f f . 
    f f c . . . . . . . f c b b c . 
    f c c . . . . . . f c b b c . . 
    c f . . . . . . . f b c c c . . 
    c f f . . . . . f f b b c c . . 
    f f f c c . c c f b c b b c . . 
    f f f c c c c c f b c c b c . . 
    . f c 3 c c 3 b c b c c c . . . 
    . c b 3 b c 3 b b c c c c . . . 
    c c b b b b b b b b c c . . . . 
    c 1 1 b b b 1 1 b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    f b c b b b c b b b b f . . . . 
    . f 1 f f f 1 b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `],
100,
true
)
mySprite2.follow(mySprite, 90)
let statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.setLabel("HP")
statusbar.attachToSprite(mySprite)
statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)

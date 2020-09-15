namespace SpriteKind {
    export const Coin = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.saplingOak, function (sprite, location) {
    game.over(true)
})
let key: Sprite = null
let mai_rap = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f f f f d d d d d e e f . . 
    . f d d d d f 4 4 4 e e f . . . 
    . f b b b b f 2 2 2 2 f 4 e . . 
    . f b b b b f 2 2 2 2 f d 4 . . 
    . . f c c f 4 5 5 4 4 f 4 4 . . 
    . . . f f f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mai_rap, 150, 150)
scene.setBackgroundColor(7)
tiles.setTilemap(tiles.createTilemap(hex`1000100001020101010101010101010101010101010001040000000000000000010101010100010001010100010101040000010101000100000101040101010101000101010001010000010001010101010001010104010101040000010101010000010101000101010101000101010004010103010001010101010001010000010100040104010101010000010000010101000101000101010100010100010101010001010001010101040000000101010000010100000004000001010004000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
    2 . 2 2 2 2 2 2 2 2 2 2 . . . . 
    2 . 2 . . . . . . . . . 2 2 . . 
    2 . 2 . 2 2 2 . 2 2 2 . . . 2 . 
    2 . 2 . . 2 2 . 2 2 2 2 2 . 2 . 
    2 . 2 2 . . 2 . 2 2 . 2 2 . 2 . 
    2 . 2 2 2 . . . 2 . 2 2 . . 2 2 
    2 . 2 2 2 2 2 . 2 2 2 . . 2 2 . 
    2 . 2 2 2 2 2 . 2 2 . . 2 2 . . 
    2 . 2 2 2 2 . . 2 . . 2 2 2 . 2 
    2 . 2 2 2 2 . 2 2 . 2 2 2 2 . 2 
    2 . 2 2 2 2 . . . . 2 2 2 . . 2 
    2 . . . . . . 2 2 . . . . . 2 2 
    2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 . 
    2 2 2 . . . . . . . . . . . . . 
    . . 2 2 2 2 2 2 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.builtin.brick,sprites.castle.rock0,sprites.castle.saplingOak,myTiles.tile1], TileScale.Sixteen))
tiles.placeOnRandomTile(mai_rap, sprites.castle.rock0)
scene.cameraFollowSprite(mai_rap)
for (let value of tiles.getTilesByType(myTiles.tile1)) {
    key = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . 5 5 . . 5 5 . . . . . 
        . . . . . 5 . . . . 5 . . . . . 
        . . . . . 5 . . . . 5 . . . . . 
        . . . . . 5 5 . . . 5 . . . . . 
        . . . . . . 5 5 . 5 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . 5 5 5 5 . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Coin)
    tiles.placeOnTile(key, value)
    tiles.setTileAt(value, myTiles.transparency16)
}
info.setScore(0)

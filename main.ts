namespace SpriteKind {
    export const Coin = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.saplingOak, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let ngoc: Sprite = null
let key: Sprite = null
let mai_rap = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f 1 1 1 1 f f . . 
    . f b 1 1 1 1 1 1 b f . 
    . f 1 1 1 1 1 1 1 1 f . 
    f d 1 1 1 1 1 1 1 1 d f 
    f d 1 1 1 1 1 1 1 1 d f 
    f d d d 1 1 1 1 d d d f 
    f b d b f d d f b d b f 
    f c d c f 1 1 f c d c f 
    . f b 1 1 1 1 1 1 f f f 
    f f f c d b 1 b c 1 1 1 
    1 1 1 c b f b f 1 b 1 b 
    `, SpriteKind.Player)
controller.moveSprite(mai_rap, 100, 100)
scene.setBackgroundColor(7)
tiles.setTilemap(tiles.createTilemap(hex`1000100001020101010101010101010101010101010001040000000000000000010101010100010001010100010101040000010101000105000101040101010101000101010001010000010001010101010501010104010101040000010101010000010101000101010101000101010004010103010001010101010001010000010100040104010101010000010000010101000101000101010100010100010101010001010001010101040000000101010000010100000004000001010004000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
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
    `, [myTiles.transparency16,sprites.builtin.brick,sprites.castle.rock0,sprites.castle.saplingOak,myTiles.tile1,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen))
tiles.placeOnRandomTile(mai_rap, sprites.castle.rock0)
scene.cameraFollowSprite(mai_rap)
for (let value of tiles.getTilesByType(myTiles.tile1)) {
    key = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . . 5 . . . . . . 5 . . . . 
        . . . . 5 . . . . . . 5 . . . . 
        . . . . 5 . . . . . . 5 . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Coin)
    tiles.placeOnTile(key, value)
    tiles.setTileAt(value, myTiles.transparency16)
}
info.setScore(0)
for (let value of tiles.getTilesByType(sprites.dungeon.collectibleBlueCrystal)) {
    ngoc = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 9 9 9 9 9 9 9 . . . . . 
        . . . 9 9 8 8 8 8 8 9 9 . . . . 
        . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
        . . 9 9 9 9 9 9 9 9 8 9 9 . . . 
        . . 9 9 9 9 9 9 9 9 8 9 9 . . . 
        . . 9 9 9 9 9 9 9 9 8 9 9 . . . 
        . . 9 9 9 9 9 9 9 9 8 9 9 . . . 
        . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
        . . 9 9 8 8 8 8 8 9 9 9 9 . . . 
        . . . 9 9 9 9 9 9 9 9 9 . . . . 
        . . . . 9 9 9 9 9 9 9 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(ngoc, value)
    tiles.setTileAt(value, myTiles.transparency16)
}

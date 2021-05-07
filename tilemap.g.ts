// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000050303030303030a0a03030303030302040101010101010101010101010101070401010101010101010101010101010704010101010101010101010101010107040101010101010101010101010101070401010101010101010101010101010704010101010101010101010101010107040101010101010101010101010101070401010101010101010101010101010704010101010101010101010101010107040101010101010101010101010101070401010101010101010101010101010704010101010101010101010101010107040101010101010101010101010101070401010101010101010101010101010706080808080808080808080808080809`, img`
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.stairSouth], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

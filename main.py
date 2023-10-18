def on_up_pressed():
    global Number_of_jumps
    if Number_of_jumps < Max_jumps:
        Yndlings_figur.set_velocity(0, -175)
        Number_of_jumps += 1
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_hit_wall(sprite, location):
    global Number_of_jumps
    if Yndlings_figur.is_hitting_tile(CollisionDirection.BOTTOM):
        Number_of_jumps = 0
    if Yndlings_figur.tile_kind_at(TileDirection.BOTTOM, assets.tile("""
        Is tile
    """)):
        Yndlings_figur.fx = 20
    if Yndlings_figur.tile_kind_at(TileDirection.BOTTOM, assets.tile("""
        Sne tile
    """)):
        Yndlings_figur.fx = 100
scene.on_hit_wall(SpriteKind.player, on_hit_wall)

def on_right_repeated():
    Yndlings_figur.vx = 50
controller.right.on_event(ControllerButtonEvent.REPEATED, on_right_repeated)

def on_left_repeated():
    Yndlings_figur.vx = -50
controller.left.on_event(ControllerButtonEvent.REPEATED, on_left_repeated)

Max_jumps = 0
Number_of_jumps = 0
Yndlings_figur: Sprite = None
scene.set_background_image(assets.image("""
    Vinter Bagrund
"""))
Yndlings_figur = sprites.create(assets.image("""
    Yndlings figur
"""), SpriteKind.player)
tiles.set_current_tilemap(tilemap("""
    Vinter tilemap
"""))
scene.camera_follow_sprite(Yndlings_figur)
Yndlings_figur.ay = 350
controller.configure_repeat_event_defaults(1, 1)
Number_of_jumps = 0
Max_jumps += 2
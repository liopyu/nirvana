# Cave Village Pitfall
# Made by GatKong
#tellraw @a ["",{"text":"gatpack/pitfall","color":"green"}]

gamerule commandBlockOutput false

fill ~-2 ~1 ~-1 ~2 ~56 ~1 minecraft:clay replace
fill ~-1 ~1 ~-2 ~1 ~56 ~2 minecraft:clay replace

fill ~-2 ~56 ~-1 ~-2 ~56 ~1 minecraft:grass_block replace
fill ~2 ~56 ~-1 ~2 ~56 ~1 minecraft:grass_block replace
fill ~-1 ~56 ~-2 ~1 ~56 ~-2 minecraft:grass_block replace
fill ~-1 ~56 ~2 ~1 ~56 ~2 minecraft:grass_block replace

fill ~-1 ~ ~ ~1 ~85 ~ minecraft:cave_air replace
fill ~ ~ ~-1 ~ ~85 ~1 minecraft:cave_air replace

fill ~-1 ~57 ~-1 ~-1 ~58 ~-1 minecraft:dark_oak_fence[east=false,north=false,south=false,waterlogged=false,west=false] replace
fill ~1 ~57 ~-1 ~1 ~58 ~-1 minecraft:dark_oak_fence[east=false,north=false,south=false,waterlogged=false,west=false] replace
fill ~-1 ~57 ~1 ~-1 ~58 ~1 minecraft:dark_oak_fence[east=false,north=false,south=false,waterlogged=false,west=false] replace
fill ~1 ~57 ~1 ~1 ~58 ~1 minecraft:dark_oak_fence[east=false,north=false,south=false,waterlogged=false,west=false] replace

setblock ~-1 ~59 ~-1 minecraft:dark_oak_trapdoor[facing=south,half=bottom,open=false,powered=false,waterlogged=false]
setblock ~-1 ~59 ~0 minecraft:dark_oak_trapdoor[facing=north,half=bottom,open=false,powered=false,waterlogged=false]
setblock ~-1 ~59 ~1 minecraft:dark_oak_trapdoor[facing=east,half=bottom,open=false,powered=false,waterlogged=false]
setblock ~0 ~59 ~1 minecraft:dark_oak_trapdoor[facing=west,half=bottom,open=false,powered=false,waterlogged=false]
setblock ~1 ~59 ~1 minecraft:dark_oak_trapdoor[facing=north,half=bottom,open=false,powered=false,waterlogged=false]
setblock ~1 ~59 ~0 minecraft:dark_oak_trapdoor[facing=south,half=bottom,open=false,powered=false,waterlogged=false]
setblock ~1 ~59 ~-1 minecraft:dark_oak_trapdoor[facing=west,half=bottom,open=false,powered=false,waterlogged=false]
setblock ~0 ~59 ~-1 minecraft:dark_oak_trapdoor[facing=east,half=bottom,open=false,powered=false,waterlogged=false]

setblock ~0 ~59 ~0 minecraft:dark_oak_slab[type=bottom,waterlogged=false]

setblock ~0 ~58 ~0 minecraft:spore_blossom

######### WIP LINE #########
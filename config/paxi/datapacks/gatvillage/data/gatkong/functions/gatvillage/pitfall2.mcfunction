# Cave Village Pitfall2
# Made by GatKong
#tellraw @a ["",{"text":"gatpack/pitfall2","color":"green"}]

gamerule commandBlockOutput false

fill ~-2 ~1 ~-1 ~2 ~66 ~1 minecraft:clay replace
fill ~-1 ~1 ~-2 ~1 ~66 ~2 minecraft:clay replace

fill ~-2 ~66 ~-1 ~-2 ~66 ~1 minecraft:grass_block replace
fill ~2 ~66 ~-1 ~2 ~66 ~1 minecraft:grass_block replace
fill ~-1 ~66 ~-2 ~1 ~66 ~-2 minecraft:grass_block replace
fill ~-1 ~66 ~2 ~1 ~66 ~2 minecraft:grass_block replace

fill ~-1 ~ ~ ~1 ~95 ~ minecraft:cave_air replace
fill ~ ~ ~-1 ~ ~95 ~1 minecraft:cave_air replace

fill ~-1 ~67 ~-1 ~-1 ~68 ~-1 minecraft:dark_oak_fence[east=false,north=false,south=false,waterlogged=false,west=false] replace
fill ~1 ~67 ~-1 ~1 ~68 ~-1 minecraft:dark_oak_fence[east=false,north=false,south=false,waterlogged=false,west=false] replace
fill ~-1 ~67 ~1 ~-1 ~68 ~1 minecraft:dark_oak_fence[east=false,north=false,south=false,waterlogged=false,west=false] replace
fill ~1 ~67 ~1 ~1 ~68 ~1 minecraft:dark_oak_fence[east=false,north=false,south=false,waterlogged=false,west=false] replace

setblock ~-1 ~69 ~-1 minecraft:dark_oak_trapdoor[facing=south,half=bottom,open=false,powered=false,waterlogged=false]
setblock ~-1 ~69 ~0 minecraft:dark_oak_trapdoor[facing=north,half=bottom,open=false,powered=false,waterlogged=false]
setblock ~-1 ~69 ~1 minecraft:dark_oak_trapdoor[facing=east,half=bottom,open=false,powered=false,waterlogged=false]
setblock ~0 ~69 ~1 minecraft:dark_oak_trapdoor[facing=west,half=bottom,open=false,powered=false,waterlogged=false]
setblock ~1 ~69 ~1 minecraft:dark_oak_trapdoor[facing=north,half=bottom,open=false,powered=false,waterlogged=false]
setblock ~1 ~69 ~0 minecraft:dark_oak_trapdoor[facing=south,half=bottom,open=false,powered=false,waterlogged=false]
setblock ~1 ~69 ~-1 minecraft:dark_oak_trapdoor[facing=west,half=bottom,open=false,powered=false,waterlogged=false]
setblock ~0 ~69 ~-1 minecraft:dark_oak_trapdoor[facing=east,half=bottom,open=false,powered=false,waterlogged=false]

setblock ~0 ~69 ~0 minecraft:dark_oak_slab[type=bottom,waterlogged=false]

setblock ~0 ~68 ~0 minecraft:spore_blossom

######### WIP LINE #########
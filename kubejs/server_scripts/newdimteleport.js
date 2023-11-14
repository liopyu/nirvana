/**
 * All dimensions (in order), including what effects to give upon travel
 *
 * @type {{dim: string, effects: string[], y: number, preferCenter?: boolean, teleportY?: number, onTeleport?: (event: Internal.LivingEntityHurtEventJS | Internal.SimplePlayerEventJS, by: number) => void}[]}
 */
const allDimensions = [
	{ dim: "minecraft:overworld", effects: ["minecraft:slow_falling"], y: 360 },
	{
		dim: "wabworldgen:tutorial", effects: ["minecraft:slow_falling"],
		y: 280,
		teleportY: 63,
		onTeleport: (event, _) => {
			if (event.player.block.id != "minecraft:water") {
			event.player.block.set('air')
			event.player.block.up.set('air')}
		}
	},
	{
		dim: "tectonicworld:tectonic",
		effects: ["minecraft:slow_falling"],
		y: 250,
		teleportY: 50,
		onTeleport: (event, _) => {
			event.player.block.set('air')
			event.player.block.up.set('air')
		}
	},
	{
		dim: "minecraft:the_nether",
		effects: ["minecraft:slow_falling", "minecraft:fire_resistance"],
		y: 300,
		teleportY: 80,
		onTeleport: (event, _) => {
			event.player.block.set('air')
			event.player.block.up.set('air')
		}
	},
	{
		dim: "minecraft:the_end",
		effects: ["minecraft:slow_falling"],
		y: 270,
		preferCenter: true,
	},
	{
		dim: "deepwhisperer:deep_space",
		effects: ["minecraft:slow_falling"],
		y: 310,
		teleportY: 80,
		onTeleport: (event, _) => {
			event.player.block.set('air')
			event.player.block.up.set('air')
		}
	},
	{ dim: "theabyss:the_abyss", effects: ["minecraft:slow_falling"], y: 200 },
];
/**
 * Options for teleporting
 * @type {{below: boolean, above: boolean}}
 */
const teleportOptions = {
	/** If the player should be teleported to the first dimension if they are in the last dimension and fall into the void */
	below: true,
	/** If the player should be teleported to the last dimension if they are in the first dimension and fly */
	above: false,
};

/**
 * Teleports the player to a different dimension based on the given dimension offset.
 *
 * @param {number} by - The offset indicating how many dimensions to move. Positive values move forward, negative values move backward.
 * @param {Internal.LivingEntityHurtEventJS | Internal.SimplePlayerEventJS} event - The event object.
 * @author tizu
 */
function teleport(by, event) {
	const { player } = event;
	let { x, z } = player;

	/** Current dimension */
	let current = player.level.dimension;
	/** Current dimension index */
	let currentIndex = allDimensions.findIndex((dim) => dim.dim == current);

	if (currentIndex == -1 || player.persistentData.teleporting == 1) return;

	currentIndex += by;

	if (currentIndex >= allDimensions.length && teleportOptions.below)
		currentIndex = 0;
	if (currentIndex < 0 && teleportOptions.above)
		currentIndex = allDimensions.length - 1;

	const thisDim = allDimensions[currentIndex];

	if (thisDim.preferCenter != undefined && thisDim.preferCenter) {
		x = 0;
		z = 0;
	}

	player.persistentData.teleporting = 1;
	player.teleportTo(
		thisDim.dim,
		x,
		thisDim.teleportY == undefined ? thisDim.y : thisDim.teleportY,
		z,
		0,
		0
	);

	if (thisDim.onTeleport) thisDim.onTeleport(event, by);

	let potion = player.potionEffects;
	thisDim.effects.forEach((effect) => {
		potion.add(effect, 500, 0, false, false);
	});
	Utils.server.schedule(1000, () => {
		event.player.persistentData.teleporting = 0;
	});
}

EntityEvents.hurt((event) => {
	const { player, source } = event;
	if (!event.entity.isPlayer()) return;

	if (player.persistentData.teleporting == 1) return;

	if (source.type == "outOfWorld" && player.y < -64) {
		teleport(1, event);
		event.cancel();
	}
});

PlayerEvents.loggedIn((event) => {
	event.player.persistentData.teleporting = 0;
});

PlayerEvents.tick((event) => {
	const { player } = event;
	const { y } = player;

	let pData = player.persistentData;
	if (pData.timer >= 1) return;

	/** Current dimension */
	let current = player.level.dimension;
	/** Current dimension index */
	let currentIndex = allDimensions.findIndex((dim) => dim.dim == current);
	if (currentIndex == -1) return;

	if (y >= allDimensions[currentIndex].y + 10) teleport(-1, event);
});

EntityEvents.death((event) => {
	const { player } = event;
	if (!player) return;
	const { x, y, z } = player;
	let pData = player.persistentData;
	pData.deathx = x.toFixed(0);
	pData.deathy = y.toFixed(0);
	pData.deathz = z.toFixed(0);
	pData.deathreset = 1;
	[
		"spatial_storage",
		"deep_space",
		"overworld",
		"the_end",
		"the_nether",
		"panthalassa",
		"tectonic",
		"frost_world",
		"pocket_dimension",
		"the_abyss",
		"tutorial",
	].forEach((dim, i) => {
		if (dim == player.level.dimension.path) {
			pData.deathdimension = i + 1;
		}
	});
});
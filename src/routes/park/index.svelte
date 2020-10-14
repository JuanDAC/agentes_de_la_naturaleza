<script>
	import { onMount } from 'svelte';
	import RecycleOrdinary from '../../components/game_objects/rough/things/RecycleOrdinary.svelte';
	import Trash from '../../components/game_objects/rough/trash/Trash.svelte';
	import Tree from '../../components/game_objects/rough/Tree.svelte';
	import type { ICurrentLevelData } from '../../interfaces';
	import { currentLevelData } from '../../store';
	const type: string = "ordinarios";
	const items: Array<number> = Array.apply(null, Array(20)).map(() => (Math.floor(Math.random() * 27)))
	onMount(()=>{
		currentLevelData.set({level: location.pathname.replace(/\//, ""), garbage: items.length} as ICurrentLevelData);
	});
</script>

<style>
	.background {
		width: var(--width_main);
		height: var(--height_main);
		position: absolute;
		background-image: url("../img/park/park_color.png");
		background-size: 100% 100%;
	}
	.background-animate {
		background-image: url("../img/park/park.png");
		--length: 7;
	}
	@keyframes animateBackground {
		to {
			background-position: calc((var(--length) - 1) * var(--width_main)) 0px;
		}
	}
	/* your styles go here */

	.tree {
		position: absolute;
		--size: calc(var(--vh) * 0.5);
		--duration: 2s;
	}
	.tree:nth-last-child(1) {
		top: calc(var(--vh) * 68);
		left: calc(var(--vw) * 57);
	}
	.tree:nth-last-child(2) {
		top: calc(var(--vh) * 35);
		left: calc(var(--vw) * 74);
	}
	.tree:nth-last-child(3) {
		top: calc(var(--vh) * 47);
		left: calc(var(--vw) * 8);
	}
	.tree:nth-last-child(4) {
		top: calc(var(--vh) * 23);
		left: calc(var(--vw) * 83);
	}
	.tree:nth-last-child(5) {
		top: calc(var(--vh) * 93);
		left: calc(var(--vw) * 85);
	}
	.tree:nth-last-child(6) {
		top: calc(var(--vh) * 86);
		left: calc(var(--vw) * 24);
	}
	.tree:nth-last-child(7) {
		top: calc(var(--vh) * 12);
		left: calc(var(--vw) * 58);
	}
	.tree:nth-last-child(8) {
		top: calc(var(--vh) * 39);
		left: calc(var(--vw) * 20);
	}
	.tree:nth-last-child(9) {
		top: calc(var(--vh) * 10);
		left: calc(var(--vw) * 14);
	}
	.tree:nth-last-child(10) {
		top: calc(var(--vh) * 15);
		left: calc(var(--vw) * 20);
	}
	.tree:nth-last-child(11) {
		top: calc(var(--vh) * 32);
		left: calc(var(--vw) * 13);
	}
	.tree:nth-last-child(12) {
		top: calc(var(--vh) * 22);
		left: calc(var(--vw) * 4);
	}
	.tree:nth-last-child(13) {
		top: calc(var(--vh) * 10);
		left: calc(var(--vw) * 35);
	}
	.tree:nth-last-child(14) {
		top: calc(var(--vh) * 12);
		left: calc(var(--vw) * 85);
	}
	.tree:nth-last-child(15) {
		top: calc(var(--vh) * 6);
		left: calc(var(--vw) * 76);
	}
	.tree:nth-last-child(16) {
		top: calc(var(--vh) * 36);
		left: calc(var(--vw) * 52);
	}
	.tree:nth-last-child(17) {
		top: calc(var(--vh) * 30);
		left: calc(var(--vw) * 38);
	}
	.tree:nth-last-child(18) {
		top: calc(var(--vh) * 18);
		left: calc(var(--vw) * 89);
	}
	.tree:nth-last-child(19) {
		top: calc(var(--vh) * 49);
		left: calc(var(--vw) * 92);
	}
	.tree:nth-last-child(20) {
		top: calc(var(--vh) * 40);
		left: calc(var(--vw) * 66);
	}
	.wrapper-trash {
		position: absolute;
		left: calc(var(--vw) * 89);
		bottom: calc(var(--vh) * 62);
	}
	.game {
		width: var(--width_main);
		height: var(--height_main);
	}
	.menu-score {
		position: absolute;
		top: calc(var(--vh) * 13);
		right: calc(var(--vw) * 1);
		user-select: none;
	}
</style>

<!-- markup (zero or more items) goes here -->

<div class="background" draggable={false} on:dragstart|preventDefault={()=>{}}>
	
</div>
<div class="background-animate" draggable={false} on:dragstart|preventDefault={()=>{}}>
	{#each Array.apply(null, Array(20)) as _}
		<div class='tree' style="filter: saturate({0.5 + (1 / (Number(($currentLevelData).garbage) + 1))});">
			<Tree />
		</div>
	{/each}
</div>
<div class="game" draggable={false}>
	{#each items as item}
		<RecycleOrdinary item={item} type={type} randomPosition={true}/>
	{/each}
	
	<div class="wrapper-trash">
		<Trash type="ordinarios"/>
	</div>

	<div class="menu-score">
		Basuras {($currentLevelData).garbage || `0`}
	</div>
</div>
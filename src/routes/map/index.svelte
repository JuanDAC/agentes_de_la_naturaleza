<script>
	import Tree from '../../components/game_objects/rough/Tree.svelte';
	import {goto} from '@sapper/app';
	import {badges, levels} from "../../store";


	const clickHandler = (url: string) => {
		goto(url);
	};
	

</script>

<style>
	.actions,
	.map {
		width: var(--width_main);
		height: var(--height_main);
	}
	.map {
		position: absolute;
		background-image: url("../img/map/map.png");
		background-size: 100% 100%;
	}
	.park  {
		position: absolute;
		background-image: url("../img/map/park.png");
		background-size: 100% 100%;
		width: calc(var(--vh) * 48);
		height: calc(var(--vh) * 28);
		top: calc(var(--vh) * 40);
		left: calc(var(--vh) * 2);
	}
	.river  {
		position: absolute;
		background-image: url("../img/map/river.png");
		background-size: 100% 100%;
		width: calc(var(--vh) * 40);
		height: calc(var(--vh) * 20);
		top: calc(var(--vh) * 73);
		left: calc(var(--vh) * 5);
	}
	.school {
		position: absolute;
		background-image: url("../img/map/school.png");
		background-size: 100% 100%;
		width: calc(var(--vh) * 57);
		height: calc(var(--vh) * 23);
		top: calc(var(--vh) * 59);
		left: calc(var(--vw) * 62);
	}
	.street {
		position: absolute;
		background-image: url("../img/map/street.png");
		background-size: 100% 100%;
		background-size: 100% 100%;
		width: calc(var(--vh) * 35);
		height: calc(var(--vh) * 15);
		top: calc(var(--vh) * 33);
		left: calc(var(--vw) * 72);
	}
	.actions {
		position: relative;
	}

	.actions > * {
		transition: all 500ms ease-in-out;
		image-rendering: -webkit-optimize-contrast;
	}

	.actions > *:hover {
		transform: scale(1.2) rotateX(10deg) rotateY(3deg);
		filter: sepia(.24) saturate(1.1) contrast(1.2);
	}
	.tree {
		position: absolute;
		--size: calc(var(--vh) * 0.5);
		--random: 0.5;
		--duration: 2s;
	}
	.tree:nth-last-child(1) {
		top: calc(var(--vh) * 68);
		left: calc(var(--vh) * 90);
	}
	.tree:nth-last-child(2) {
		top: calc(var(--vh) * 46);
		left: calc(var(--vh) * 74);
	}
	.tree:nth-last-child(3) {
		top: calc(var(--vh) * 47);
		left: calc(var(--vh) * 119);
	}
	.tree:nth-last-child(4) {
		top: calc(var(--vh) * 54);
		left: calc(var(--vh) * 191);
	}
	.tree:nth-last-child(5) {
		top: calc(var(--vh) * 93);
		left: calc(var(--vh) * 164);
	}
	.tree:nth-last-child(6) {
		top: calc(var(--vh) * 92);
		left: calc(var(--vh) * 64);
	}
	.tree:nth-last-child(7) {
		top: calc(var(--vh) * 94);
		left: calc(var(--vh) * 19);
	}
	.tree:nth-last-child(8) {
		top: calc(var(--vh) * 45);
		left: calc(var(--vh) * 42);
	}
	.disabled {
		filter: saturate(0.3) sepia(0.2) grayscale(0.3);
	}
	.actions *:not(.disabled) + .disabled,
	.disabled:nth-child(1) {
		animation: level-active 600ms ease-in-out infinite alternate ;
	}
	@keyframes level-active {
		from {
			ransform: scale(1) rotateX(0deg) rotateY(0deg);
		}
		to {
			transform: scale(1.1) rotateX(10deg) rotateY(3deg);
		}
	}
</style>


<div class="map" style="filter: saturate({Math.max(Math.min(0.5 + (($badges).length *  0.125), 1), 0)});">
	{#each Array.apply(null, Array(8)) as item}
		<div class='tree'>
			{item || ''}
			<Tree />
		</div>
	{/each}
</div>

<div class="actions">
	{#each levels as level}
		<button 
			class={level} 
			class:disabled={!($badges).includes(level)}
			on:click={clickHandler.bind(null, `/${level}`)}
		></button>
	{/each}
</div>




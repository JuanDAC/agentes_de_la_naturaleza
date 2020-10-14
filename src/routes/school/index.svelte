<script>
import { onMount } from "svelte";

	import RecycleOrdinary from "../../components/game_objects/rough/things/RecycleOrdinary.svelte";
	import Trash from "../../components/game_objects/rough/trash/Trash.svelte";

	import {currentLevelData} from "../../store";
	import type {ICurrentLevelData} from "../../interfaces";
	const length: number = 5;
	const items: Array<string[]> = [
		Array.apply(null, Array(length)).fill("ordinarios") as string[],
		Array.apply(null, Array(length)).fill("papel") as string[],
		Array.apply(null, Array(length)).fill("plastico") as string[],
		Array.apply(null, Array(length)).fill("vidrio") as string[],
		Array.apply(null, Array(length)).fill("peligrosos") as string[],
		Array.apply(null, Array(length)).fill("organicos") as string[],
		Array.apply(null, Array(length)).fill("aluminio") as string[],
	];
	onMount(()=>{
		currentLevelData.set({level: location.pathname.replace(/\//, ""), garbage: length * items.length} as ICurrentLevelData);
	});
	// Array<number> = Array.apply(null, Array(20)).map(() => (Math.floor(Math.random() * 27)))

</script>

<style>
	.background {
		width: var(--width_main);
		height: var(--height_main);
		position: absolute;
		background-image: url("../img/school/school_color.png");
		background-size: 100% 100%;
	}
	.background-animate {
		background-image: url("../img/school/school.png");
		--length: 6;
	}
	@keyframes animateBackground {
		to {
			background-position: calc((var(--length) - 1) * var(--width_main)) 0px;
		}
	}
	.game {
		width: var(--width_main);
		height: var(--height_main);
	}
	/* your styles go here */
	.game > *,
	.wrapper-trash {
		transform: scale(1.3);
	}
	.wrapper-trash {
		position: absolute;
		left: calc(var(--vw) * 89);
		bottom: calc(var(--vh) * 1);
	}
	.wrapper-trash:nth-last-child(2n) {
		left: calc(var(--vw) * 95);

	}
	.wrapper-trash:nth-last-child(1) {
		bottom: calc(var(--vh) * 2);
	}
	.wrapper-trash:nth-last-child(2) {
		bottom: calc(var(--vh) * 10);
	}
	.wrapper-trash:nth-last-child(3) {
		bottom: calc(var(--vh) * 18);
	}
	.wrapper-trash:nth-last-child(4) {
		bottom: calc(var(--vh) * 26);
	}
	.wrapper-trash:nth-last-child(5) {
		bottom: calc(var(--vh) * 34);
	}
	.wrapper-trash:nth-last-child(6) {
		bottom: calc(var(--vh) * 42);
	}
	.wrapper-trash:nth-last-child(7) {
		bottom: calc(var(--vh) * 50);
	}
	.wrapper-trash:nth-last-child(8) {
		bottom: calc(var(--vh) * 58);
	}
	figure > img {
		width: 100%;
		height: 100%;
		image-rendering: optimizequality;
	}
	.figure-board-reciclaje {
		position: absolute;
		left: calc(var(--vw) * 50.5);
		bottom: calc(var(--vh) * 70);
		width: calc(var(--vw) * 19);
		transform: rotate(-1deg);
		transition: all 200ms;
		background-color: #cbf0fa;
		z-index: 10;
	}
	.figure-board-reciclaje:hover {
		bottom: calc(var(--vh) * 55);
		left: calc(var(--vw) * 40);
		transform: rotate(-1deg) scale(4);
		padding: calc(var(--vh) * 3);
		border-radius: calc(var(--vw) * 0.6);
		background-color: #cbf0fa;
	}
</style>



<!-- markup (zero or more items) goes here -->

<div class="background">
	
</div>
<div class="background-animate">
</div>

<div class="game" draggable={false}>
	{#each items as containers}
		{#each containers as item}
			<RecycleOrdinary type={item} randomPosition={true} fromType={true}/>
		{/each}
	{/each}
	<figure class="figure-board-reciclaje">
		<img src="img/school/reciclaje.png" alt="">
	</figure>	
	
	<div class="wrapper-trash">
		<Trash type="ordinarios"/>
	</div>
	<div class="wrapper-trash">
		<Trash type="papel"/>
	</div>
	<div class="wrapper-trash">
		<Trash type="plastico"/>
	</div>
	<div class="wrapper-trash">
		<Trash type="vidrio"/>
	</div>
	<div class="wrapper-trash">
		<Trash type="peligrosos"/>
	</div>
	<div class="wrapper-trash">
		<Trash type="organicos"/>
	</div>
	<div class="wrapper-trash">
		<Trash type="aluminio"/>
	</div>
	








	<!-- <div class="menu-score">
		Basuras {($currentLevelData).garbage}
	</div> -->
</div>